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
        } catch(error) {

        }
    }
}
