import WebSocket from 'ws';
import AdapterAbstract from "./adapter-abstract.js";


export default class NodeAdapter extends AdapterAbstract {
    constructor(config) {
        super();
        this.config = config || {};
        this.url = config.url;
        this.connect();
    }
    connect() {
        try {
            const ws = new WebSocket(this.url);
            // ws.on('message', this.onMessage)
            this.nativeInstance = ws;
        } catch(error) {

        }
    }
    onMessage(message) {
        console.log("-----", message);
    }
    on(...args) {
        // this.nativeInstance.on(...args);
        if (args[0] === "message") {
            this.nativeInstance.onmessage = (event) => {
                try {
                    let data = JSON.parse(event.data);
                    args[1](data);
                } catch (error) {
                    args[1](event.data);
                }
            }
            return;
        }
        args[1]();
    }
    emit(...args) {
        this.nativeInstance.emit(...args);
    }

}
