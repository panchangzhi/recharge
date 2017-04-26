<template lang="html">
    <div class="choose-limit">
        <table class="table">
            <tbody>
                <tr class="tr" v-for="(item,index) in choose">
                    <td class="td" v-for="(ele,tag) in item" :class="{'current': parseInt(current) == index*3 + tag}"  @click="setCurrent(index,tag)">
                        <p class="item-limit" :class="{'yuan': yuan,'flow': flow,'able': !numbfault}">{{ele.choose}}</p>
                        <p v-if="!numbfault" class="pay">{{ele.pay}}</p>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
  props: ['choose', 'flow', 'yuan','numbfault'],
  data() {
    return {
      current: '',
    }
  },
  created() {
  },
  methods:{
      setCurrent(index,tag){
          if(!this.numbfault){
              this.current = index*3 + tag;
              console.log(this.choose[index][tag]);
              this.$parent.setRecharge(this.choose[index][tag]);
          }
      }
  },
}
</script>

<style lang="less" scoped>
.choose-limit {
    .table {
        width: 100%;
        font-size: 18px;
        color: #999;
        line-height: 24px;
        text-align: center;
        border: 1px solid #E5E5E5;

        border-collapse: collapse;
        background: #fff;
        &.able {
            color: #333;
        }
        .tr {
            height: 70px;
            border: 1px solid #E5E5E5;

            .td {
                position: relative;
                border: 1px solid #E5E5E5;
                &.current {
                    &:after{
                        content:'';
                        position: absolute;
                        left: 0;
                        top: 0;
                        right: 0;
                        bottom: 0;
                        border: 1px solid #FD4C29;
                    }
                    .item-limit.able{
                        color: #FD4C29;
                    }
                    .pay {
                        &:after {
                            color: #FD4C29;
                        }
                    }
                }
                .item-limit {
                    &.able{
                        color: #333;
                    }
                    &.yuan {
                        &:after {
                            content: "\5143";
                        }
                    }
                    &.flow{
                        &:after{
                            content:"M";
                        }
                    }
                }
                .pay {
                    font-size: 12px;
                    line-height: 18px;
                    color: #FD4C29;
                    &:before {
                        content: '\5b9e\4ed8';
                    }
                    &:after {
                        content: "\5143";
                        color: #2A2A2A;
                    }
                }
            }

        }

    }
}
</style>
