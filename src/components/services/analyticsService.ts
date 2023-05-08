
import { reconnectOnRefresh, reconnectWhenOnline, startConnection, stopConnection, CollectDataFromClient } from "./analytics/signalr";

export const start = () => {
    startConnection();
    reconnectOnRefresh();   
    reconnectWhenOnline(); 
}
export const stop = () => {
    stopConnection();
}

export const sendClientAnalyticsData = (data:string) => {
    CollectDataFromClient(data);
}
 