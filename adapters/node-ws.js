import WebSocket from 'ws';
import AdapterAbstract from "./adapter-abstract.js";


console.log("NODE ADAPTER");
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
        this.nativeInstance.on(...args)
    }
    emit(...args) {
        this.nativeInstance.emit(...args);
    }

}
