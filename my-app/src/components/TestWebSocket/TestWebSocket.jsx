import { useCallback, useEffect, useState } from 'react'
import useWebSocket, {ReadyState} from 'react-use-websocket'

const WS_URL = 'wss://echo.websocket.org'

function TestWebSocket() {
    const [socketUrl, setSocketUrl] = useState(null);
    const { sendMessage, lastMessage, readyState, getWebSocket } = useWebSocket(socketUrl, {
        shouldReconnect: () => true,
    });

    /* -------------------------------------------------------------------------- */
    /*                       Функция подключения к WebSocket                      */
    /* -------------------------------------------------------------------------- */
    const handleConnect = useCallback(() => {
        setSocketUrl(WS_URL);
        // setMessageHistory([]);
    }, []);

    /* -------------------------------------------------------------------------- */
    /*                       Функция отключения от WebSocket                      */
    /* -------------------------------------------------------------------------- */
    const handleDisconnect = useCallback(() => {
        const ws = getWebSocket();
        if (ws) {
            ws.close();
        }

        setSocketUrl(null);
    }, [getWebSocket]);

    /* -------------------------------------------------------------------------- */
    /*                 Срабатывает при получении нового сообщения                 */
    /* -------------------------------------------------------------------------- */
    useEffect(() => {
        if (lastMessage !== null) {
            console.log(`Received message: ${lastMessage.data}`);
        }
    }, [lastMessage]);

    /* -------------------------------------------------------------------------- */
    /*                     Отправка сообщения через WebSocket                     */
    /* -------------------------------------------------------------------------- */
    const handleSendMessage = () => {
        sendMessage('Hello, WebSocket!');
    };

    /* -------------------------------------------------------------------------- */
    /*                       Статусы подключения к WebSocket                      */
    /* -------------------------------------------------------------------------- */
    const connectionStatus = {
        [ReadyState.CONNECTING]: 'Connecting',
        [ReadyState.OPEN]: 'Open',
        [ReadyState.CLOSING]: 'Closing',
        [ReadyState.CLOSED]: 'Closed',
        [ReadyState.UNINSTANTIATED]: 'Uninstantiated',
    }[readyState];

    return (
        <>
            <div>
                <h1>WebSocket</h1>
                <button onClick={handleConnect}>Подключиться</button>
                <button onClick={handleDisconnect}>Отключиться</button>
                <button onClick={handleSendMessage}>Отправить сообщение</button>
                <p>Статус Подключения: {connectionStatus}</p>
                {lastMessage && <p>Последнее сообщение: {lastMessage.data}</p>}
            </div>
        </>
    );
}

export default TestWebSocket;