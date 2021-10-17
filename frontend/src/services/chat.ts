import { io } from 'socket.io-client';

export const socket = io("http://191.253.112.252:3000/", {
    autoConnect: false,
})

