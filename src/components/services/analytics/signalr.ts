import { HttpTransportType, HubConnection, HubConnectionBuilder, HubConnectionState } from "@microsoft/signalr";

var connection: any = null;
export const startConnection = () => { 
    const connectionId = localStorage.getItem("customerCode");
    if (connectionId) {
        const url = new URL('https://dp-farm-pageapi.azurewebsites.net/analytics-hub');
        connection = new HubConnectionBuilder()
            .withUrl(url.toString(), {
                transport: HttpTransportType.WebSockets,
            })
            .withAutomaticReconnect()
            .build();
 
        connection.start()
        .then( () => { 
            connection.invoke('SetConnectionId', connectionId); 
        }); 
 
        connection.on('ReceiveMessage', (user: any, message: any) => {
            console.log(message);
        });


    }
} 

export const stopConnection = () => { 
    if (connection) {
        return connection.stop();
    }
}

export const reconnectOnRefresh = () => {
    window.addEventListener('beforeunload', () => {
        stopConnection()
            .then(() => {
                startConnection();
            })
            .catch((error: any) => console.error(error));
    });
}

export const reconnectWhenOnline = () => {
    window.addEventListener('online', () => {
        startConnection();
    });
} 

export const CollectDataFromClient = async(data:string) => {  
    if (connection && connection.state == HubConnectionState.Connected) { 
        connection.invoke('CollectDataFromClient', data);

        return;
    }
}
 