import React, { useCallback, useEffect, useState } from "react";
import { SubscribeDBContext } from "../context/subscribeDB-context";
import useNavigatorOnline from "../hooks/useNavigatorOnLine";
import useAnalyticsDB from "../hooks/useAnalyticsDB"; 
interface ISubscribeDbProvider {
  children: React.ReactNode;
}

const SubscribeDbProvider = ({ children }: ISubscribeDbProvider) => {
  const { db, clearDB, getIsRowDB,logInternetConnectionLost, logInternetConnectionRegained } = useAnalyticsDB();
  const isOnline = useNavigatorOnline();
  const [isSubscribe, setIsSubscribe] = useState<boolean>(false);
  const updateDB = useCallback(() => {
    setIsSubscribe((current) => !current);
  }, []);

  useEffect(() => { 
    handleClear();
    //get all rows and send analytics
    // let data = "test data" 
    // sendClientAnalyticsData(data);
  }, [isOnline, db, isSubscribe]);
  
  useEffect(() => {
     if(!!db && isOnline) {
      logInternetConnectionRegained();
    } 
    if(!!db && !isOnline) {
      logInternetConnectionLost();
    }
  }, [isOnline]);

  async function handleClear() { 
    if (!!db && isOnline && (await getIsRowDB())) { 
      clearDB();
    }
  }

  return (
    <SubscribeDBContext.Provider value={{ updateDB }}>
      {children}
    </SubscribeDBContext.Provider>
  );
};

export default SubscribeDbProvider;
