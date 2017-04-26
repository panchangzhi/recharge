<template>
 <div class="popup-tips">
     <div class="mask"></div>
     <div class="tips">
         <div class="tip-con">
             <p>确定给手机号</p>
             <p>15231356606 (不在通讯录)</p>
             <p>充值吗？</p>
         </div>
         <div class="btn">
             <span class="cancel">取消</span>
             <span>确定</span>
         </div>
     </div>
 </div>
</template>
<script>
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 p{
     margin: 0;
 }
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
 .tips{
     margin: auto;
     background: #fff;
     color: #fcfcfc;
     width: 72%;
     max-width: 270px;
     border-radius: 10px;
     z-index: 100;
     text-align: center;
     font-size: 17px;
     line-height: 20px;
     letter-spacing: -0.4px;
 }
 .tip-con{
     padding: 20px 23px;
     font-size: 17px;
     color: #030303;
     line-height: 20px;
 }
 .btn{
     width: 100%;
     font-size: 0;
 }
 .btn span{
     width: 50%;
     color: #0076ff;
     display: inline-block;
     font-size: 17px;
     height: 44px;
     border-top: 1px solid rgba(77,77,77,0.28);
     box-sizing: border-box;
     line-height: 44px;
 }
 .btn .cancel{
     border-right: 1px solid rgba(77,77,77,0.28);
 }
 @media screen and (max-width: 350px){
     .tip-con{
         font-size: 15px;
     }
 }
</style>
