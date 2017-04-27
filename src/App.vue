<template>
<div id="app">
  <transition name="slide" mode="in-out">
    <keep-alive>
      <router-view class="view"></router-view>
    </keep-alive>
  </transition>
  <!-- <transition name="slide">
        <router-view></router-view>
    </transition> -->

</div>
</template>

<script>
export default {
  name: 'app'
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

// .slide-enter-active, .slide-leave {
//   transition: all 0.5s;
//   transform: translate3d(0,0,0);
//   // opacity: 0;
// }
//   .slide-enter, .slide-leave-active {
//
//     transform: translate3d(100vw,0,0);
//     // opacity: 0;
//   }

.slide-leave-active {
    transform: translate3d(100vw,0,0);
    transition: all 1s;
    z-index: 99;
}

.slide-enter,
.slide-enter-active {
    z-index: -1;
}

.slide-leave {
    transform: translate3d(0,0,0);
    z-index: 99;
}
</style>
