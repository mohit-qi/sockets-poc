import Adapters from "../adapters/adapters.js";
export default class Websocketclient {
    constructor(config) {
        this.config = config;
        let adapter = Adapters.getAdapter(config.adapter);
        if (!adapter) {
            throw new Error("No adapter found for " + config.adapter)
        }
        return new adapter(config);
    }
}
