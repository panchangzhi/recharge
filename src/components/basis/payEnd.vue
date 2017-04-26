<template>
   <div class="popup-tips">
      <div class="mask"></div>
      <div class="pay-tips">
           <div class="pay-end">
               <h4>确认离开收银台？</h4>
               <p>超时支付订单会被取消请尽快完成支付</p>
           </div>
           <div class="pay-btn">
               <span>继续支付</span>
               <span class="addorg">确认离开</span>
           </div>
      </div>
    </div>
</template>
<script>
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .popup-tips{
      position: fixed;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      width: 100%;
      height: 100%;
      display: flex;
  }
  .mask{
      background-color: #000;
      opacity: 0.4;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 99;
  }
  .pay-tips{
      padding-top: 5px;
      color: #333;
      width: 88%;
      margin: auto;
      text-align: center;
      border-radius: 4px;
      background-color: #fff;
      z-index: 100;
  }
  .pay-end{
      width: 100%;
      padding-bottom: 31px;
  }
  .pay-end h4{
      width: 100%;
      font-size: 20px;
      line-height: 30px;
      padding: 15px 0;
  }
  .pay-end p{
      width: 54.5%;
      margin: 0 auto;
      font-size: 18px;
      line-height: 28px;
  }
  .pay-btn{
      font-size: 0;
      border-top: 1px solid #d2d3d5;
  }
  .pay-btn span{
      display: inline-block;
      width: 50%;
      line-height: 50px;
      color: #666;
      font-size: 18px;
      box-sizing: border-box;
      z-index: 100;
  }
  .pay-btn .addorg{
      color: #fd4c29;
      border-left: 1px solid #d2d3d5;
  }
</style>
