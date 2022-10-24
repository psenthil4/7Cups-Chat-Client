import io from "socket.io-client";

let endPoint = "http://54.160.93.120/api/";
export let socket = io.connect(`${endPoint}`);
