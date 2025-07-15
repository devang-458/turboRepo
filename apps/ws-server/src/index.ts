import { prisma } from "@repo/db/client";
import { WebSocketServer } from "ws";

const server = new WebSocketServer({ port: 8080 });

server.on("connection", async (socket) => {
  prisma.user.create({
    data: {
      name: Math.random().toString(),
      password: "hi",
    },
  });
  socket.send("something");
});
