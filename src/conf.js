/*
 * 后台各个服务的地址（含协议，网络地址，端口）.
 * defaultBase为默认地址，如果某个服务的配置为null，则使用它作为后台地址.
 * ws是指websocket.
 */
BACKEND_URL_BASE = {
    defaultBase: "http://192.168.59.104/",
    node: null,
    stack: null,
    network: null,
    misc: null
};

HOME_URL = '/auth';
