const APIS = {
    recommend_feed: 'https://frodo.douban.com/api/v2/elendil/recommend_feed?start=0&count=2&loc_id=108288&apple=d36a491abbb2bb39ea1f26f634295159&icecream=5dfa79f63c32124b97f4b24f1800c75e&mooncake=956ee811cbd2c3f5859dc391fc3a4b22&webview_ua=Mozilla%2F5.0%20%28Linux%3B%20Android%209%3B%20Pixel%202%20XL%20Build%2FPQ3A.190801.002%3B%20wv%29%20AppleWebKit%2F537.36%20%28KHTML%2C%20like%20Gecko%29%20Version%2F4.0%20Chrome%2F86.0.4240.198%20Mobile%20Safari%2F537.36&screen_width=1440&screen_height=2712&sugar=0&longitude=0.0&latitude=0.0&apikey=0dad551ec0f84ed02907ff5c42e8ec70&channel=Google_Market&udid=b3f6f374a316f6406883969d0520d0d4e47ab5dd&os_rom=android&timezone=Asia%2FShanghai'
};

const HOST = 'https://frodo.douban.com';

const HEADERS = {
    "Authorization": 'Bearer 23a80c29e43a731b6af8247dacaf5951',
    "UA": 'api-client/1 com.douban.frodo/7.5.0(211) Android/28 product/taimen vendor/Google model/Pixel 2 XL  rom/android  network/wifi  udid/b3f6f374a316f6406883969d0520d0d4e47ab5dd  platform/mobile'
}

const STR3 = "23a80c29e43a731b6af8247dacaf5951";

const SECRET = "bf7dddc7c9cfe6f7";

export { APIS, STR3, SECRET, HEADERS, HOST }