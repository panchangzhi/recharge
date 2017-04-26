<template lang="html">
    <div class="result">
        <!-- 支付成功 -->
        <div class="item-result succeed">
            <p class="icon">&#xe6f1;</p>
            <p class="title">卡车之家为您充值成功</p>
            <p class="text">订单编号:248797248797248797</p>
            <div class="button-wrapper" >
                  <span  class="button submit">继续充值</span>
                  <span  class="button jump">查看订单</span>
            </div>
        </div>

        <!-- 支付失败 -->
        <div class="item-result fail">
            <p class="icon">&#xe6ec;</p>
            <p class="title">抱歉，支付失败</p>
            <p class="text">您可以选择重新尝试一次</p>
            <p class="text">或者换一种支付方式。</p>
            <div class="button-wrapper" >
                  <span  class="button submit">重新支付</span>
                  <span  class="button jump">回到首页</span>
            </div>
        </div>

    </div>


</template>

<script>
import submit from '../components/basis/submit'

export default {
  components: {},
  methods: {
    test() {
      console.log(111)
    }
  }
}
</script>

<style lang="less" scoped>
.result {
    text-align: center;
    .item-result{
        padding: 30px 0;
        background: #fff;
        .icon {
            margin-bottom: 20px;
            line-height: 60px;
            font-size: 60px;
        }
        .title {
            margin-bottom: 5px;
            font-size: 18px;
            line-height: 24px;
        }
        .text {
            font-size: 16px;
            color: #666;
            line-height: 24px;
        }
        .button-wrapper {
            display: flex;
            justify-content: space-around;
            margin-top: 30px;
            .button {
                display: block;
                padding: 11px 0;
                width: 130px;
                height: 50px;
                line-height: 28px;
                font-size: 18px;
                box-sizing: border-box;
                &.submit {
                    color: #FFF;
                    background-image: linear-gradient(90deg, #FF9900 0%, #FD4C29 100%);
                    border-radius: 4px;
                }
                &.jump {
                    background: #f5f5f5;
                }
            }
        }
    }

    .succeed {
        .icon {
            color: #54C50D;
        }
    }
    .fail {
        .icon {
            color: #F76260;
        }
    }
}
</style>
