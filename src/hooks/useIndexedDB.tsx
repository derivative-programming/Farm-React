import { useEffect, useState, useContext } from "react";
import { openDB } from "idb";
import { DBTABLE } from "../constants/dbName";
import { v4 as uuidv4 } from "uuid";
import { SubscribeDBContext } from "../context/subscribeDB-context";

type TObjInfo = {
  title: string;
  date: string;
};
function useIndexedDB(nameDB: string, nameTable: string) {
  const [db, setDB] = useState<any>(null);
  const { updateDB } = useContext(SubscribeDBContext);
  useEffect(() => {
    (async function () {
      const data = await connectDB;
      setDB(data);
    })();
  }, []);

  const connectDB = openDB(nameDB, 1, {
    upgrade(db) {
      db.createObjectStore(nameTable, {
        autoIncrement: true,
      });
    },
  });

  const getIsRowDB = async () => { 
    const arrKeys = await db.getAllKeys(nameTable);
    return !!arrKeys.length;
  };
  const clearDB = () => { 
    db.clear(nameTable);
  };
  const addDB = (objInfo: TObjInfo) => { 
    db.add(DBTABLE, { ...objInfo, id: uuidv4() });
    updateDB();
  };

  return { db, getIsRowDB, clearDB, addDB };
}
export default useIndexedDB;
