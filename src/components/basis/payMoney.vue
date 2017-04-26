<template lang="html">
  <div class="money-wrapper">
      <p class="text">支付金额</p>
      <p class="money">&yen;{{money}}</p>
  </div>
</template>

<script>
export default {
  props: ['money']
}
</script>

<style lang="less" scoped>
.money-wrapper {
    padding: 15px 0 10px;
    background: #fff;
    .text {

        line-height: 22px;
        font-size: 14px;
        color: #999;
        text-align: center;
    }
    .money {
        line-height: 48px;
        font-size: 32px;
        color: #333;
        text-align: center;
    }
}
</style>
