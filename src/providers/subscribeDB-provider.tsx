import React, { useCallback, useEffect, useState } from "react";
import { SubscribeDBContext } from "../context/subscribeDB-context";
import useNavigatorOnline from "../hooks/useNavigatorOnLine";
import useIndexedDB from "../hooks/useIndexedDB";
import { DBNAME, DBTABLE } from "../constants/dbName";
interface ISubscribeDbProvider {
  children: React.ReactNode;
}

const SubscribeDbProvider = ({ children }: ISubscribeDbProvider) => {
  const { db, clearDB, getIsRowDB } = useIndexedDB(DBNAME, DBTABLE);
  const isOnline = useNavigatorOnline();
  const [isSubscribe, setIsSubscribe] = useState<boolean>(false);
  const updateDB = useCallback(() => {
    setIsSubscribe((current) => !current);
  }, []);

  useEffect(() => {
    handleClear();
  }, [isOnline, db, isSubscribe]);

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
