import { HTTP_DEV,HTTPS, DEBUG } from './config'
let SEK = JSON.parse(localStorage.getItem('vipLodData')) || {}
let SESSION = '45742_0244d363b582dcf525972316206f0ad631bd84de'
export const SEID = DEBUG ? SESSION : SEK.sessionid

const HTTP = DEBUG ? HTTP_DEV : HTTPS

class API{
    // 检测手机号
    checkTel(){
        return `https://tcc.taobao.com/cc/json/mobile_tel_segment.htm`
    }
}

// 实例化后再导出
export default new API
