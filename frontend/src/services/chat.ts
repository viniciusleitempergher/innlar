import { io } from 'socket.io-client';

export const socket = io("http://191.253.101.30:3000/", {
    autoConnect: false,
})

