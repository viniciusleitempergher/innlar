const app = require("express")();
const httpServer = require("http").createServer(app);

const options = {
    cors: {
        origin: "*"
    },
    pingInterval: 10000,
    pingTimeout: 5000,
    cookie: false
};
const io = require("socket.io")(httpServer, options);

const users = [];

io.on("connection", (socket) => {
    const userId = socket.handshake.auth.userId;

    console.log("usuário conectado: " + userId);
    if (!users.find(user => user === userId)) {
        users.push({ userId, socketId: socket.id });
    }

    socket.emit("users", users);

    socket.on("send message", (message, to) => {
        const user = users.find(user => user.userId === to);
        io.to(user.socketId).emit("new message", message );
    });

    socket.on("disconnect", () => {
        users.filter(user => user !== userId)
    })
});

httpServer.listen(3000, () => {
    console.log("Server started!");
});

