import { HttpTransportType, HubConnection, HubConnectionBuilder, HubConnectionState } from "@microsoft/signalr";
import config from '../../../config';

let connection: HubConnection | null = null;

export const startConnection = () => { 
    const connectionId = localStorage.getItem("customerCode");
    if (connectionId) {
        const url = new URL(config.apiBaseUrl +'/analytics-hub');
        connection = new HubConnectionBuilder()
            .withUrl(url.toString(), {
                transport: HttpTransportType.WebSockets,
            })
            .withAutomaticReconnect()
            .build();
 
        connection.start()
        .then( () => { 
            if (connection) {
                connection.invoke('SetConnectionId', connectionId); 
            }
        }); 
 
        connection.on('ReceiveMessage', (user: string, message: string) => {
            console.log(message);
        });


    }
} 

export const stopConnection = (): Promise<void> => { 
    if (connection) {
        return connection.stop();
    }
    return Promise.resolve();
}

export const reconnectOnRefresh = () => {
    window.addEventListener('beforeunload', () => {
        stopConnection()
            .then(() => {
                startConnection();
            })
            .catch((error: Error) => console.error(error));
    });
}

export const reconnectWhenOnline = () => {
    window.addEventListener('online', () => {
        startConnection();
    });
} 

export const CollectDataFromClient = async(data:string) => {  
    if (connection && connection.state == HubConnectionState.Connected) { 
        await connection.invoke('CollectDataFromClient', data); 
    }
}
 