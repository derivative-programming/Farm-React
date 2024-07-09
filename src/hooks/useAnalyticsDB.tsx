import { useEffect, useState, useContext } from "react";
import { openDB } from "idb";
import { v4 as uuidv4 } from "uuid";
import { SubscribeDBContext } from "../context/subscribeDB-context";
import { ANALYTICS_DBNAME, ANALYTICS_DBTABLE } from "../constants/dbName";
import { useNavigate, useParams } from "react-router-dom";
import { sendClientAnalyticsData } from "../components/services/analyticsService";
//import "fake-indexeddb/auto";

type TAnalyticsEvent = {
  messageType: string;
  controlName: string; 
  sourceObjectName: string;
  param1: string; 
  description: string;
};
function useAnalyticsDB() {
  const [db, setDB] = useState<any>(null);
  const { updateDB } = useContext(SubscribeDBContext);
  
  const { id } = useParams();
  const contextCode: string = id ?? "00000000-0000-0000-0000-000000000000";

  useEffect(() => {
    (async function () {
      const data = await connectDB;
      setDB(data);
    })();
  }, []);

  const connectDB = openDB(ANALYTICS_DBNAME, 1, {
    upgrade(db) {
      db.createObjectStore(ANALYTICS_DBTABLE, {
        autoIncrement: true,
      });
    },
  });

  const getIsRowDB = async () => {
    const arrKeys = await db.getAllKeys(ANALYTICS_DBTABLE);
    return !!arrKeys.length;
  };
  const clearDB = () => { 
    db.getAll(ANALYTICS_DBTABLE).then((allObjs: any[]) => {
      allObjs.forEach(item => {  
        sendClientAnalyticsData(JSON.stringify(item));
      });
    })
    db.clear(ANALYTICS_DBTABLE);
  };
  const addDB = (event: TAnalyticsEvent) => {
    const customerCode = localStorage.getItem("customerCode");
    const appName = "React 18 Bootstrap 5";
    const dbData = {
        ...event, 
        pageContextCode: contextCode,
        id: uuidv4(), 
        eventUTCDateTime: 
        new Date().toISOString(), 
        customerCode: customerCode,
        appName: appName,
        hostName: window.location.hostname, 
        pathName: window.location.pathname, 
      }

    if(!!db){
      db.add(ANALYTICS_DBTABLE, dbData);
      updateDB();
    }
  };
  const logClick = (controlName: string, sourceObjectName: string, param1: string) => {
    //console.log('logClick ' + controlName + ' ' + sourceObjectName + ' ' + param1);
    const eventData = { 
      messageType: "UI Click", 
      controlName: controlName,  
      sourceObjectName: sourceObjectName, 
      param1: param1,  
      description: "Click", 
    }
    addDB(eventData);
  };
  
  const logInitStartEvent = (controlName: string) => {
    console.log('logInitStartEvent ' + controlName);
    const eventData = { 
      messageType: "event", 
      controlName: 'Init Start ' + controlName,  
      sourceObjectName: "", 
      param1: "",  
      description: "", 
    }
    addDB(eventData);
  }
  
  const logInitCompleteEvent = (controlName: string) => {
    console.log('logInitCompleteEvent ' + controlName);
    const eventData = { 
      messageType: "event", 
      controlName: 'Init Complete ' + controlName,  
      sourceObjectName: "", 
      param1: "",  
      description: "", 
    }
    addDB(eventData);
  }

  const logEvent = (eventName:string) => {
    console.log('logEvent ' + eventName);
    const eventData = { 
      messageType: "event", 
      controlName: eventName,  
      sourceObjectName: "", 
      param1: "",  
      description: "", 
    }
    addDB(eventData);
  }
  

  const logInternetConnectionLost = () => { 
    logEvent("InternetConnectionLost");
  }
  
  const logInternetConnectionRegained = () => { 
    logEvent("logInternetConnectionRegained"); 
  }

  return { db, getIsRowDB, clearDB, addDB, logClick, logInternetConnectionLost, logInternetConnectionRegained,
    logInitStartEvent,logInitCompleteEvent };
}
export default useAnalyticsDB;
