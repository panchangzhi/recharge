<template lang="html">
    <div class="home">
        <!-- tab 切换充值 -->
        <my-header current="2"></my-header>

        <!-- 油卡充值 -->

        <!-- 输入 -->
        <my-input type="oil" placeholder="请输入19位加油卡"></my-input>


        <!-- 充值额度选择 -->
        <tab-choose class="tab" :choose='choose' :text="['中国石化','中国石油']" :numbfault ="numbfault"></tab-choose>

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
import tabChoose from '../components/funBlock/pcAndpa'
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
        pc: [ //流量
          [{
              choose: '100',
              pay: 100.00
            },
            {
              choose: '200',
              pay: 200.00
            },
            {
              choose: '500',
              pay: 500.00
            }
          ]
        ],
        pa: [ //话费
          [{
              choose: '100',
              pay: 100.00
            },
            {
              choose: '200',
              pay: 200.00
            },
            {
              choose: '500',
              pay: 500.00
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
    tabChoose,
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

<style lang="less" scoped>@import "../common/css/maxin.less";

.home {
    display: flex;
    flex-direction: column;
    height: 100vh;
    background: #f5f5f5;
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
