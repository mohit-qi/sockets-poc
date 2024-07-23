export default class AdapterAbstract {
    connect() {
        throw new Error("No method for connect written");
    }
    disconnect() {
        throw new Error("No method for connect written");
    }
    reconnect() {
        throw new Error("No method for connect written");
    }
    on(...args) {
        this.nativeInstance.on(...args)
    }
    emit(...args) {
        this.nativeInstance.emit(...args);
    }
}

// socket_io adapter
// Worker thread
// auth
// integrate with other POCs