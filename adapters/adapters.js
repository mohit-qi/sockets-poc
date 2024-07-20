import WebAdapter from "./raw-web.js";
import NodeAdapter from "./raw-node.js";
export default class Adapter {
    static getAdapter(type) {
        switch(type) {
            case "browser":
                return WebAdapter;
            case "node":
                return NodeAdapter;
        }
    }
}