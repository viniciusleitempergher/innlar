import { io } from 'socket.io-client';

export const socket = io("http://10.10.204.194:3000/", {
    autoConnect: false,
})

