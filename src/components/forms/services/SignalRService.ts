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
            return;
        }
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

function timeout(delay: number) {
    return new Promise(res => setTimeout(res, delay));
}

const checkAliveConnection = async (connectionId: string) => {
    while (true) {
        await timeout(2000);
        if (connection && connection.state == HubConnectionState.Connected) {
            connection.invoke('SendMessageFromHub', connectionId);

            return;
        }
    }
}

