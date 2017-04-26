import axios from 'axios'
// import qs from 'qs'
import API from './api'
import { SEID } from './api'
import { DEV_URL, PRO_URL } from './config'

var config = {
  headers: {'Content-Type': 'application/x-www-form-urlencoded'},
  // headers: {'Content-Type': 'multipart/form-data'},
  // headers: {'Content-Type': 'application/json'}
}

class XHR {

  //   axios.get(`https://tcc.taobao.com/cc/json/mobile_tel_segment.htm?tel=${numb}`)
  // .then(function (response) {
  //   console.log(response);
  //   return response
  // })
  // .catch(function (error) {
  //   console.log(error);
  //   return error
  // });
  checkTel(numb){
      return axios.get(API.checkTel(),{params:{tel:numb}})
  }

}


// 实例化后再导出
export default new XHR
