import AdapterAbstract from "./adapter-abstract.js";

export default class BrowserAdapter extends AdapterAbstract {
    constructor(config) {
        super();
        this.config = config || {};
        this.url = config.url;
        this.connect();
    }
    connect() {
        try {
            const ws = new WebSocket(this.url);
            ws.onmessage = message => this.onMessage(message);
            this.nativeInstance = ws;
        } catch(error) {

        }
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
        }
        else if (args[0] === "connect") {
            this.nativeInstance.onmessage = (event) => {
                try {
                    let data = JSON.parse(event.data);
                    args[1](data);
                } catch (error) {
                    args[1](event.data);
                }
            }
        }
    }
    emit(...args) {
        this.nativeInstance.send(args[0]);
    }

}
