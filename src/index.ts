
import { error } from "console";
import http from "http";
import { ErrorCode } from "./error";

const myServer = http.createServer((req, res) => {
    res.write('Hello World!')
    res.end()
 });

//Retrieves the ip associsted with a particular client request
export const GetUserIp = (http.ClientRequest,http.ServerResponse) => {
    var res = http.ServerResponse
    var req = http.ClientRequest
    
    const clientIP = req.headers['x-forwarded-for']?.split(',').shift() || req.socket?.remoteAddress;
    res.end(`The client's IP Address is: ${clientIP}`);
    
} 


