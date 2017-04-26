<template lang="html">
    <div class="home">
        <!-- tab 切换充值 -->
        <my-header current="1"></my-header>

        <!-- 输入 -->
        <my-input type="tel" placeholder="请输入手机号码"></my-input>

        <!-- 充值额度选择 -->
        <flow-tel class="tab" :choose='choose' :text="['冲流量','冲话费']" :numbfault ="numbfault"></flow-tel>

        <!-- 充值记录 -->
        <record></record>

        <tip v-if="tip"></tip>
    </div>
</template>

<script>
import myHeader from '../components/basis/header'
import myInput from '../components/basis/input'
// import tab from '../components/basis/tabRecharge'
// import limit from '../components/basis/chooseLimit'
import flowTel from '../components/funBlock/flowAndTel'
import submit from '../components/basis/submit'
import record from '../components/basis/record'
import tip from '../components/basis/popupTips'



export default {
  data() {
    return {
      tabHIndex: 1, //手机/油卡充值
      tip: false, //提示层
      numbfault: true, //手机号错误
      choose: {
        flow: [ //流量
          [{
              choose: '10',
              pay: 3.00
            },
            {
              choose: '100',
              pay: 10.00
            },
            {
              choose: '500',
              pay: 30.00
            }
          ]
        ],
        tel: [ //话费
          [{
              choose: '10',
              pay: 10.00
            },
            {
              choose: '20',
              pay: 20.00
            },
            {
              choose: '30',
              pay: 30.00
            }
        ],
          [{
              choose: '50',
              pay: 50.00
            },
            {
              choose: '100',
              pay: 100.00
            },
            {
              choose: '300',
              pay: 300.00
            }
          ]
        ],
      }
    }
  },
  components: {
    myHeader,
    myInput,
    // tab,
    // limit,
    flowTel,
    submit,
    record,
    tip
  },
  created() {},
  methods: {
    tabHead(index) {
      this.tabHIndex = index;
    },
    setNumbfault(numbfault) {
      this.numbfault = numbfault
    },
  },
  watch: {

  }
}
</script>

<style lang="less" scoped>
@import "../common/css/maxin.less";

.home {
    display: flex;
    flex-direction: column;
    height: 100vh;
    overflow-y: scroll;
    .submit {
        flex: 1;
        background: #fff;
    }
    .tab {
        flex: 1;
        margin-top: 10px;
    }
}
</style>
