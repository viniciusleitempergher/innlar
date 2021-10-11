import { io } from 'socket.io-client';

export const socket = io("http://192.168.2.7:3000", {
    autoConnect: false,
})

