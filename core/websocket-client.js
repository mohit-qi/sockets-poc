import Adapters from "../adapters/adapters.js";
export default class Websocketclient {
    constructor(config) {
        let adapter;
        if (!config.adapter) {
            adapter = Adapters.getAdapterByEnv();
        }
        adapter = Adapters.getAdapter(config.adapter);
        if (!adapter) {
            throw new Error("No adapter found");
        }
        return new adapter(config);
    }
}
