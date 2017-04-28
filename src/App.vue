<template>
<div id="app">
  <transition :name="router?'go':'back'" mode="in-out">
    <keep-alive>
      <router-view class="view"></router-view>
    </keep-alive>
  </transition>
</div>
</template>

<script>
export default {
  name: 'app',
  data(){
      return{
          router: true//是跳路由还是返回
      }
  },
  watch:{
      '$route':'pageAnimation'
  },
  methods:{
      pageAnimation(){
          let sessionRouter = sessionStorage.getItem('routerList');
          let routerList = sessionRouter ? JSON.parse(sessionRouter):[];
          let routerListL = routerList.length;

          if( routerListL > 0){
              if(location.href != routerList[routerListL-1]){//判断不是刷新

                  if(routerList[routerListL-2] && location.href == routerList[routerListL-2]){
                      routerList.pop();
                      sessionStorage.setItem('routerList', JSON.stringify(routerList))
                      console.log('后退',JSON.parse(sessionStorage.getItem('routerList')));
                      this.router = false;
                  }
                  else{
                      routerList.push(location.href);
                      sessionStorage.setItem('routerList',JSON.stringify(routerList))
                      console.log('前进',JSON.parse(sessionStorage.getItem('routerList')));
                     this.router = true;
                  }
              }
              else{//是刷新
                  console.log('刷新',JSON.parse(sessionStorage.getItem('routerList')))
                  return ;
              }
          }
          else{
              sessionStorage.setItem('routerList',JSON.stringify([location.href]))
              console.log('首次加载',JSON.parse(sessionStorage.getItem('routerList')))
              return ;
          }
      }
  },
}
</script>

<style lang="less">@import "./common/css/reset.less";
@font-face {
    font-family: 'recharge';
    /* project id 285675 */
    src: url('//at.alicdn.com/t/font_kvv7ahlxrg0newmi.eot');
    src: url('//at.alicdn.com/t/font_kvv7ahlxrg0newmi.eot?#iefix') format('embedded-opentype'), url('//at.alicdn.com/t/font_kvv7ahlxrg0newmi.woff') format('woff'), url('//at.alicdn.com/t/font_kvv7ahlxrg0newmi.ttf') format('truetype'), url('//at.alicdn.com/t/font_kvv7ahlxrg0newmi.svg#iconfont') format('svg');
}
.icon {
    font-family: 'recharge';
}
.app {
    position: relative;
}
.view {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
}

.go-enter-active, .go-leave {
  transition: all 0.5s;
  transform: translate3d(0,0,0);
  // opacity: 0;
}
  .go-enter, .go-leave-active {

    transform: translate3d(100vw,0,0);
    // opacity: 0;
  }

.back-leave-active {
    transform: translate3d(100vw,0,0);
    transition: all 1s;
    z-index: 99;
}

.back-enter,
.back-enter-active {
    z-index: -1;
}

.back-leave {
    transform: translate3d(0,0,0);
    z-index: 99;
}
</style>
