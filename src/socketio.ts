import { Application } from "express";
import { Server, ServerOptions } from "socket.io";

export default function socketIO(server: Partial<ServerOptions>, app: Application) {
  const io = new Server(server);
  const socket = io.on("connection", (socket) => {
    console.log(socket.id);
  });
  app.set("socket", socket);
  app.set("io", io);
}
