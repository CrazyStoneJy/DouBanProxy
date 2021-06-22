import { serve } from "https://deno.land/std@0.74.0/http/server.ts";
import { generateSig } from './utils.ts';
import { APIS, HEADERS, HOST } from './const.ts';

function requestDouBan(url: string, httpMethod: string): Promise<Response> {
    
    let sigObj = generateSig(url, httpMethod);
    url += '&_sig=' + sigObj._sig + "&_ts=" + sigObj._ts;
    console.log("url: ", url);
    
    const client = fetch(url, {
        headers: {
            "Authorization": 'Bearer 23a80c29e43a731b6af8247dacaf5951',
            'Content-Type': 'application/json;charset=UTF-8',
            "User-Agent": 'api-client/1 com.douban.frodo/7.5.0(211) Android/28 product/taimen vendor/Google model/Pixel 2 XL  rom/android  network/wifi  udid/b3f6f374a316f6406883969d0520d0d4e47ab5dd  platform/mobile'
          }
    });
    
    return client;
}


async function runServer() {
  const server = serve({ port: 8080 });
  console.log(`HTTP webserver running.  Access it at:  http://localhost:8080/`);
  
  for await (const request of server) {
    console.log("resquest body:", request.body, ',url:', request.url);
    let urlPath = request.url;
    let httpMethod = request.method;
    let douBanUrl = HOST + urlPath;
    console.log("douban url:", douBanUrl);
    
    try {
      let res: Response = await requestDouBan(douBanUrl, httpMethod);
      let originalResJson = await res.json();
      console.log("original res json:", JSON.stringify(originalResJson));
      request.respond({ status: 200, body: JSON.stringify(originalResJson) });
    } catch (e) {
      request.respond({ status: 200, body: 'happen error:'});
    }
  }
}

runServer();
