class Tools {
  checkTel(num) {
    if (num.length > 0) {
      return /1(([38]\d)|(4[57])|(5[012356789])|(7[013678]))\d{8}/.test(num) ? true : false;
    }
  }
  isWx(){
    if(window.navigator.userAgent.match(/MicroMessenger/i)){
        console.log('is wx')
        return true;
    }
    else{
        console.log('is web')
        return false;
    }
  }
}

export default new Tools
