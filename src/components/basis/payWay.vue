<template lang="html">
  <div class="pay-way">
      <p class="title">选择支付方式</p>

      <!-- 微信 -->
      <div v-if="isWx" class="item-way">
          <label for="wx" class="label">
              <span class="icon wx-icon">&#xe6f4;</span>
              <span class="text">微信</span>
          </label>
          <input hidden type="radio" name="pay-way" id="wx" value="wx" v-model="payWay">
          <span class="icon radio-icon" :class="{'checked': payWay == 'wx'}">&#xe6ee;</span>
      </div>

      <!-- 支付宝 -->
      <div v-else class="item-way">
          <label for="zfb" class="label">
              <span class="icon zfb-icon">&#xe6f0;</span>
              <span class="text">支付宝</span>
          </label>
          <input hidden type="radio" name="pay-way" id="zfb" value="zfb" v-model="payWay">
          <span class="icon radio-icon" :class="{'checked': payWay == 'zfb'}">&#xe6ee;</span>

      </div>
  </div>
</template>

<script>
import Tools from '../../common/js/tools.js'

export default {
    data(){
        return{
            payWay:'wx',//支付方式
            isWx: true,//是微信
        }
    },
    created(){
        if(!Tools.isWx()){
            this.payWay = 'zfb'
            this.isWx = false
        }
    },
    watch:{
        payWay(){
            this.$parent.setPayWay(this.payWay);
        }
    },
}
</script>

<style lang="less" scoped>
.pay-way {
    background: #fff;
    .title {
        padding: 0 15px;
        height: 50px;
        line-height: 50px;
        font-size: 14px;
        color: #666;
        background: #f5f5f5;
    }
    .item-way {
        display: flex;
        padding: 0 15px;
        align-items: center;
        font-size: 0;
        .label {
            display: flex;
            flex: 1;
            align-items: center;
            .icon {
                margin-right: 15px;
                font-size: 26px;
                &.wx-icon{
                    color: #09BB07;
                }
                &.zfb-icon{
                    color: #01ADF3;
                }
            }
            .text {
                font-size: 16px;
            }

        }
        .radio-icon {
            width: 20px;
            height: 20px;
            font-size: 20px;
            line-height: 20px;
            vertical-align: top;
            border-radius: 50%;
            color: #ececec;
            &.checked{
                background-image: linear-gradient(90deg, #FF9900 0%, #FD4C29 100%);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
            }
        }
    }
}
</style>
