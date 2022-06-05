import socketIOClient from "socket.io-client";

const serverEndpoint = "http://localhost:3999/";

export const socket = socketIOClient(serverEndpoint, {
        transports: ['websocket']
});
