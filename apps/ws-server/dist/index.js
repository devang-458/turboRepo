"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@repo/db/client");
const ws_1 = require("ws");
const server = new ws_1.WebSocketServer({ port: 8080 });
server.on("connection", async (socket) => {
    client_1.prisma.user.create({
        data: {
            name: Math.random().toString(),
            password: "hi",
        },
    });
    socket.send("something");
});
