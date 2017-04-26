<template lang="html">
    <div class="input-wrapper">
        <input class="input" type="num" v-model="numb" :maxlength="19" :placeholder="placeholder" @focus="focus" @blur="blur" ref="input">
        <!-- <p v-if="false" class="tip">自己的手机号</p> -->
        <span v-if="clearShow" class="icon clear" @click="clear">&#xe6f5;</span>
    </div>
</template>

<script>
export default {
      data() {
            return {
                numb: '',//号码
                returnNum:'',//返回号码
                clearShow: false,//清除号码按钮
                bookShow: true,//失去焦点
                clearClick: false,//点击清除按钮
            }
        },
    props: ['placeholder'],
    created(){
    },
    watch:{
        numb(){
            let tmp = this.numb;
            this.returnNum = tmp.replace(/\s/g,"")
            if(this.numb.length > 0 ){
                this.clearShow = true;
                this.bookShow = false;
            }
            if(this.numb.length == 13){
                this.$refs.input.blur();
            }
        },
        returnNum(){
            let length = this.returnNum.length;
            if(length == 4 || length == 9){
                this.numb = this.numb.slice(0,-1) + ' ' +this.numb.slice(-1);
            }
            if(length == 3 || length == 8){
                this.numb = this.numb.slice(-1) == ' '? this.numb.slice(0,-2) : this.numb;
            }
        }
    },
    methods: {
        clear(){//删除事件
            this.numb = '';
            this.clearClick = true;
        },
        blur(){
            setTimeout(()=>{
                if(this.clearClick){
                    this.$refs.input.focus();
                    this.clearClick = false;
                }
                this.bookShow = true
                this.clearShow = false
            },300)
        },
        focus(){
            if(this.numb.length > 0){
                this.bookShow = false
                this.clearShow = true
            }
            else{
                this.bookShow = true
                this.clearShow = false
            }

        }
    }
}
</script>

<style lang="less" scoped>
.input-wrapper {
    position: relative;
    padding: 20px 15px;
    box-sizing: border-box;
    background: #fff;
    .input {
        width: 100%;
        padding: 20px 35px 20px 12px;
        height: 68px;
        font-size: 28px;
        box-sizing: border-box;
        background: #FAFAFA;
        border: 1px solid #EFEFEF;
        border-radius: 4px;
        &::-webkit-input-placeholder {
            color: #AAA;
        }
        &:focus {
            border: 1px solid #EFEFEF;
        }
    }
    .icon-wrapper{
        z-index: 9;
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
</style>
