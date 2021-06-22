import { hmac } from "https://deno.land/x/god_crypto/hmac.ts";
import * as base64 from "https://deno.land/x/base64@v0.2.1/mod.ts"
import { STR3, SECRET } from "./const.ts";

function getMillisSec() {
    return new Date().getTime();
}

function generateSig(url: string, httpMethod: string) {
    let uri = new URL(url);
    
    let str = httpMethod + "&";
    let encodePath = uri.pathname;
    // console.log(">>>str: ", str);
    
    console.log("encodePath:", encodePath);
    
    str += encodeURIComponent(encodePath) + "&";
    // console.log(">>>str: ", str);
    str += STR3 + "&";
    // console.log(">>>str: ", str);
    let millis = Math.floor(getMillisSec() / 1000);
    // console.log(">>>millis:", millis);
    
    str += millis;
    // console.log(">>>str: ", str);
    let result: string = base64.fromUint8Array(hmac("sha1", SECRET, str));

    // console.log(">>>result: " + result);
    return {
        _sig: result,
        _ts: millis
    }
}

export { generateSig }