import io from "socket.io-client";

let endPoint = "http://172.31.58.92:8000";
export let socket = io.connect(`${endPoint}`);