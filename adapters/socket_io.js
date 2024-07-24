import { io } from "socket.io-client";
import AdapterAbstract from "./adapter-abstract.js";
export default class SocketIoAdapter extends AdapterAbstract {
    constructor(config) {
        super();
        this.config = config || {};
        this.url = config.url;
        this.connect();
    }
    connect() {
        try {
            const ws = io(this.url);
            this.nativeInstance = ws;
            // ws.emit("hello");
        } catch(error) {

        }
    }
}

// const socket = io("http://localhost:5002");
// socket.on("connect", () => {
//     console.log("connected");
// })