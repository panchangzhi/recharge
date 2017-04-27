<template lang="html">
    <div class="input-wrapper">
        <div class="inner">
            <input class="input" type="num" v-model="numb" :maxlength="maxLength" :placeholder="placeholder" @focus="focus" @blur="blur" ref="input">
            <p v-if="tip" :class="['tip',{'warn': warn}]">{{text}}</p>
            <div class="icon-wrapper">
                <span v-if="bookShow && type == 'tel'" class="icon book">&#xe6ed;</span>
                <span v-if="clearShow" class="icon clear" @click="clear">&#xe6f5;</span>
            </div>
        </div>
    </div>
</template>

<script>
import tools from '../../common/js/tools.js'
import fetch from '../../api/fetch.js'

export default {
  data() {
    return {
      numb: '', //号码
      returnNum: '', //返回号码
      clearShow: false, //清除号码按钮
      bookShow: true, //失去焦点
      clearClick: false, //点击清除按钮
      tip: false, //失去焦点显示提示
      warn: false, //手机号警告
      text: '', //提示文案
      //   numbfault: false, //手机号错误
      fakeBlur: false, //瞬间失去获取光标
      maxLength: '', //输入的最长位数
      spaceIndex: [], //添加空格下标
    }
  },
  props: ['type', 'placeholder'],
  created() {
    if (this.type == 'tel') {
      this.maxLength = 13
      this.spaceIndex = [4, 8]
    } else {
      this.maxLength = 22
      this.spaceIndex = [5, 9, 14]
    }
  },
  watch: {
    numb() {
      let tmp = this.numb;
      this.returnNum = tmp.replace(/\s/g, "")
      if (this.numb.length > 0) {
        this.clearShow = true;
        this.bookShow = false;
      }

      if (this.numb.length == this.maxLength) {
        this.$refs.input.blur();
      }
    },
    returnNum() {
      let length = this.returnNum.length
      if (length == this.spaceIndex[0] || length == this.spaceIndex[1] || (this.spaceIndex[2] && length == this.spaceIndex[2])) {
        this.numb = this.numb.slice(0, -1) + ' ' + this.numb.slice(-1)
        this.fakeBlur = true;
        this.$refs.input.blur()
        setTimeout(() => {
          this.$refs.input.focus()
        }, 10)
        this.$nextTick(function() {
          this.fakeBlur = false
        })
      }
      if (length == this.spaceIndex[0] - 1 || length == this.spaceIndex[1] - 1 || (this.spaceIndex[2] && length == this.spaceIndex[2] - 1)) {
        this.numb = this.numb.slice(-1) == ' ' ? this.numb.slice(0, -2) : this.numb
      }
    }
  },
  methods: {
    clear() { //删除事件
      this.numb = ''
      this.clearClick = true
    },
    blur() {
      if (!this.fakeBlur) {
        setTimeout(() => {
          if (this.clearClick) {
            this.$refs.input.focus()
            this.clearClick = false
          }
          this.bookShow = true
          this.clearShow = false
          if (this.returnNum.length > 0 && this.type == 'tel') {
            this.tip = true
            if (!tools.checkTel(this.returnNum)) {
              this.warn = true
              //   this.numbfault = true
              this.text = "\u624b\u673a\u53f7\u7801\u6709\u8bef"
              this.$parent.setNumbfault(true);
            } else {
              this.$parent.setNumbfault(false);
            }
          }
        }, 10)
      }
    },
    focus() {
      this.tip = false;
      if (this.numb.length > 0) {
        this.bookShow = false
        this.clearShow = true
      } else {
        this.bookShow = true
        this.clearShow = false
      }

    },
  }
}
</script>

<style lang="less" scoped>
.input-wrapper {
    position: relative;
    padding: 20px 15px;
    box-sizing: border-box;
    background: #fff;
    .inner {
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 0 35px 0 12px;
        height: 68px;
        background: #FAFAFA;
        border: 1px solid #EFEFEF;
        border-radius: 4px;
        .input {
            padding: 7px 0;
            width: 100%;
            font-size: 28px;
            line-height: 28px;
            background: transparent;
            box-sizing: border-box;
            &::-webkit-input-placeholder {
                color: #AAA;
            }
        }
        .tip {
            font-size: 14px;
            color: #999;
            line-height: 14px;
            &.warn {
                color: #E60013;
            }
        }
        .icon-wrapper {
            .icon {
                position: absolute;
                top: 50%;
                right: 27px;
                transform: translate3d(0,-50%,0);
                color: #999;
                font-family: 'recharge';
                &.book {
                    font-size: 24px;
                }
                &.clear {
                    font-size: 18px;
                }
            }
        }
    }
}
</style>
