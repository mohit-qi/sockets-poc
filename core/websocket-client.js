import Adapters from "../adapters/adapters.js";
export default class Websocketclient {
    constructor(config) {
        let adapter;
        if (!config.adapter) {
            adapter = Adapters.getAdapterByEnv();
        } else {
            adapter = Adapters.getAdapter(config.adapter);
        }
        console.log("adapter", adapter);
        if (!adapter) {
            throw new Error("No adapter found");
        }
        return new adapter(config);
    }
}
