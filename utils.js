export const ENVS = {
    NODE: "NODE",
    BROWSER: "BROWSER",
    SOCKET_IO: "SOCKET_IO"
}

export function getEnv() {
    if (typeof window !== 'undefined' && typeof window.document !== 'undefined') {
        return ENVS.BROWSER;
    } else if (typeof process !== 'undefined' && process.versions != null && process.versions.node != null) {
        return ENVS.NODE;
    } else {
        return null;
    }
}

export function isNode() {
    return getEnv() === ENVS.NODE;
}

export function isBrowser() {
    return getEnv() === ENVS.BROWSER;
}