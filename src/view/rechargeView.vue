<template lang="html">
  <div class="recharge">
      <!-- 需要支付 -->
      <money :money="money"></money>

      <!-- 订单信息 -->
      <div class="infor-wrapper">

          <!-- 流量充值 -->
          <div v-if="type == 'flow'" class="">
              <infor-order infor="153-2135-6606 北京电信" title="充值号码"></infor-order>
              <infor-order infor="200M" title="充值流量"></infor-order>
              <infor-order infor="248797248797248797" title="订单编号"></infor-order>
          </div>


          <!-- 话费充值 -->
          <div v-if="type == 'tel'" class="">
              <infor-order infor="153-2135-6606 北京电信" title="充值号码"></infor-order>
              <infor-order infor="¥200" title="充值金额"></infor-order>
              <infor-order infor="248797248797248797" title="订单编号"></infor-order>
          </div>

          <!-- 中国石化 -->
          <div v-if="type == 'pc'" class="">
              <infor-order infor="1234 5678 91235 879644" title="加油卡号"></infor-order>
              <infor-order infor="张三" title="油卡姓名"></infor-order>
              <infor-order infor="中国石油化工有限公司" title="缴费单位"></infor-order>
              <infor-order infor="¥200" title="缴费金额"></infor-order>
              <infor-order infor="248797248797248797" title="订单编号"></infor-order>
          </div>

          <!-- 中国石油 -->
          <div v-if="type == 'pa'" class="">
              <infor-order infor="1234 5678 91235 879644" title="加油卡号"></infor-order>
              <infor-order infor="张三" title="油卡姓名"></infor-order>
              <infor-order infor="中国石油化工有限公司" title="缴费单位"></infor-order>
              <infor-order infor="¥200" title="缴费金额"></infor-order>
              <infor-order infor="248797248797248797" title="订单编号"></infor-order>
          </div>

      </div>

      <!-- 支付方式 -->
      <pay-way></pay-way>

      <!-- 支付 -->
      <submit :text="money+'元'" :pay="true"></submit>

      <pay-leave v-show="payLeave"></pay-leave>
  </div>
</template>

<script>
import money from '../components/basis/payMoney'
import inforOrder from '../components/basis/inforOrder'
import payWay from '../components/basis/payWay'
import submit from '../components/basis/submit'
import payLeave from '../components/basis/payEnd'
import Tools from '../common/js/tools.js'



export default {
    data(){
        return{
            payLeave: false,//是否显示弹层
            payWay:'wx',//支付方式
            money: this.$route.params.money,//需要支付的钱
            text:'',//button文案
            type:'',//充值类型
        }
    },
    components:{
        money,
        inforOrder,
        payWay,
        submit,
        payLeave,
    },
    created(){
        this.type = this.$route.params.type

        if(!Tools.isWx()){
            this.payWay = 'zfb'
        }
    },

    methods:{
        setPayWay(payWay){//设置支付方式
            this.payWay = payWay;
        },
        submit(){
            if(this.payWay == 'wx'){
                console.log('微信支付')
            }
            else{
                console.log('支付宝支付')
            }
        },
    }
}
</script>

<style lang="less" scoped>
    .recharge{
        .infor-wrapper{
            background: #fff;
        }
    }
</style>
