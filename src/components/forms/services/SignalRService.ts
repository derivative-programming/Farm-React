import { HttpTransportType, HubConnection, HubConnectionBuilder, HubConnectionState } from "@microsoft/signalr";

var connection: any = null;
export const startConnection = () => {
    const connectionId = localStorage.getItem("customerCode");
    if (connectionId) {
        const url = new URL('https://localhost:7194/hub');
        connection = new HubConnectionBuilder()
            .withUrl(url.toString(), {
                transport: HttpTransportType.WebSockets,
            })
            .withAutomaticReconnect()
            .build();

        connection.start();
        console.log('Connection Start');

        SetConnectionId(connectionId);
        checkAliveConnection(connectionId);

        connection.on('ReceiveMessage', (user: any, message: any) => {
            console.log(message);
        });


    }
}

const SetConnectionId = async (connectionId: string) => {
    while (true) {
        await timeout(2000);
        if (connection && connection.state == HubConnectionState.Connected) {
            connection.invoke('SetConnectionId', connectionId);
            console.log('Set ConnectionId');
            return;
        }
    }
}

export const stopConnection = () => {
    if (connection) {
        console.log('Connection Stop');
        return connection.stop();
    }
}

export const reconnectOnRefresh = () => {
    window.addEventListener('beforeunload', () => {
        stopConnection()
            .then(() => {
                console.log('SignalR connection stopped on page refresh');
                startConnection();
                console.log('SignalR connection re-established on page refresh');
            })
            .catch((error: any) => console.error(error));
    });
}

export const reconnectWhenOnline = () => {
    window.addEventListener('online', () => {
        console.log('Internet connection restored - attempting to reconnect SignalR connection');
        startConnection();
    });
}

function timeout(delay: number) {
    return new Promise(res => setTimeout(res, delay));
}

const checkAliveConnection = async (connectionId: string) => {
    while (true) {
        await timeout(2000);
        if (connection && connection.state == HubConnectionState.Connected) {
            console.log('Send Message to Hub');
            connection.invoke('SendMessageFromHub', connectionId);
            console.log('Alive connection invoked');

            return;
        }
    }
}

