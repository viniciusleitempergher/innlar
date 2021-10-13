import { io } from 'socket.io-client';

export const socket = io(process.env.BACKEND_CHAT_SOCKET_URL + "", {
    autoConnect: false,
})

