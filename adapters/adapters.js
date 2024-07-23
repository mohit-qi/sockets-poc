import WebAdapter from "./browser.js";
import NodeAdapter from "./node-ws.js";
import SocketIoAdapter from "./socket_io.js";
import { getEnv, ENVS } from "../utils.js";

export default class Adapter {
    static getAdapter(type) {
        switch(type) {
            case ENVS.BROWSER:
                return WebAdapter;
            case ENVS.NODE:
                return NodeAdapter;
            case ENVS.SOCKET_IO:
                return SocketIoAdapter;
            default:
                return null;
        }
    }

    static getAdapterByEnv() {
        const env = getEnv();
        this.getAdapter(env);
    }
}