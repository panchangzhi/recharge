<template lang="html">
    <ul class="choose-limit">
        <li class="row" v-for="(item,index) in choose">
            <div class="item-limit" v-for="(ele,tag) in item" :class="{'border': tag == 1,'current': parseInt(current) == index*3 + tag}"  @click="setCurrent(index,tag)">
                <p class="choose" :class="{'yuan': yuan,'flow': flow,'able': !numbfault}">{{ele.choose}}</p>
                <p v-if="!numbfault" class="pay">{{ele.pay}}</p>
            </div>
        </li>
    </ul>
</template>

<script>
export default {
  props: ['choose', 'flow', 'yuan', 'numbfault'],
  data() {
    return {
      current: '',
    }
  },
  created() {},
  methods: {
    setCurrent(index, tag) {
      if (!this.numbfault) {
        this.current = index * 3 + tag;
        console.log(this.choose[index][tag]);
        this.$parent.setRecharge(this.choose[index][tag]);
      }
    }
  },
}
</script>

<style lang="less" scoped>
@borderE5: 1px solid #E5E5E5;

.choose-limit {
    width: 100%;
    font-size: 18px;
    color: #999;
    line-height: 24px;
    text-align: center;
    background: #fff;
    &.able {
        color: #333;
    }
    .row {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        height: 70px;
        border: @borderE5;
        border-left: 0;
        border-right: 0;
        border-bottom: 0;
        &:last-child{
            border-bottom: @borderE5;
        }
        .item-limit {
            flex: 1;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100%;
            position: relative;
            &.border {
                border: @borderE5;
                border-top: 0;
                border-bottom: 0;
            }
            &.current {
                &:after {
                    content: '';
                    position: absolute;
                    left: 0;
                    top: 0;
                    right: 0;
                    bottom: 0;
                    border: 1px solid #FD4C29;
                }
                .item-limit.able {
                    color: #FD4C29;
                }
                .pay {
                    &:after {
                        color: #FD4C29;
                    }
                }
            }
            .choose {
                &.able {
                    color: #333;
                }
                &.yuan {
                    &:after {
                        content: "\5143";
                    }
                }
                &.flow {
                    &:after {
                        content: "M";
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
</style>
