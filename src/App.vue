<template>
<div id="app">
  <router-view></router-view>
</div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="less">
@import "./common/css/reset.less";

@font-face {
  font-family: 'recharge';  /* project id 285675 */
  src: url('//at.alicdn.com/t/font_kvv7ahlxrg0newmi.eot');
  src: url('//at.alicdn.com/t/font_kvv7ahlxrg0newmi.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_kvv7ahlxrg0newmi.woff') format('woff'),
  url('//at.alicdn.com/t/font_kvv7ahlxrg0newmi.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_kvv7ahlxrg0newmi.svg#iconfont') format('svg');
}
.icon{
    font-family: 'recharge'
}
</style>
