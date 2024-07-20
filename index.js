import _WebsocketClient from "./core/websocket-client.js";
export default class SocketManager {
    create(config) {
        let ws = new _WebsocketClient(config);
        return ws;
    }
}

// export default class testing {
//     constructor() {
//         console.log("----------");
//     }
// }