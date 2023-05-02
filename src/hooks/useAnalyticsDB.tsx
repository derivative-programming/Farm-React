import { useEffect, useState, useContext } from "react";
import { openDB } from "idb";
import { v4 as uuidv4 } from "uuid";
import { SubscribeDBContext } from "../context/subscribeDB-context";
import { ANALYTICS_DBNAME, ANALYTICS_DBTABLE } from "../constants/dbName";
import { useNavigate, useParams } from "react-router-dom";

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
    db.add(ANALYTICS_DBTABLE, dbData);
    updateDB();
  };
  const logClick = (controlName: string, sourceObjectName: string, param1: string) => {
    //console.log('logClick ' + controlName + ' ' + sourceObjectName + ' ' + param1);
    const eventData = { 
      messageType: "ButtonClick", 
      controlName: controlName,  
      sourceObjectName: sourceObjectName, 
      param1: param1,  
      description: "Button Click", 
    }
    addDB(eventData);
  };


  return { db, getIsRowDB, clearDB, addDB, logClick };
}
export default useAnalyticsDB;
