<template lang="html">
    <div class="tab-choose">
        <!-- tab -->
        <!-- <tab class="tab" :text="text" :current='1'></tab> -->
        <div class="tab-recharge">
            <span class="item-recharge" :class="{'current': current == '1'}" @click="tab(1)">{{text[0]}}</span>
            <span class="item-recharge" :class="{'current': current == '2'}" @click="tab(2)">{{text[1]}}</span>
        </div>


        <!-- 流量充值 -->
        <limit v-show="current == '1'" :choose="choose.flow" :flow="true" :numbfault="numbfault"></limit>
        <!-- 话费充值 -->
        <limit v-show="current == '2'" :choose="choose.tel" :yuan="true" :numbfault="numbfault"></limit>

        <div class="submit">
            <submit text="立即充值" :unable="!submitAble"></submit>
        </div>

    </div>
</template>

<script>
import limit from '../basis/chooseLimit'
import submit from '../basis/submit'
// import tab from '../basis/tabRecharge'
import router from '../../router/index'


export default {
    data(){
        return {
            current: 1,//tab切换
            recharge:{},//充值的额度和金额
            flow:{},//流量
            tel:{},//话费
            submitAble: false,//可以提交
        }
    },
    props:['choose','text','numbfault'],
    components:{
        limit,
        submit,
        // tab,
    },
    watch:{
        current(){
            if(this.current == '1'){
                this.recharge = this.flow
            }
            else{
                this.recharge = this.tel
            }
        },
        numbfault(){
            this.submitAble = !this.numbfault && this.recharge.choose? true : false;
            // this.submitAble =this.recharge.choose? true : false
        },
        recharge(){
            this.submitAble = !this.numbfault && this.recharge.choose? true : false;
            // this.submitAble =this.recharge.choose? true : false
        },
    },
    methods:{
        tab(index){//充值类型
            this.current = index;
        },
        getRecharge(obj){//获取充值的额度和金额
            this.setRecharge(obj)
        },
        setRecharge(obj){
            if(this.current == '1'){
                this.flow = obj
                this.recharge = this.flow
            }
            else{
                this.tel = obj
                this.recharge = this.tel
            }
        },
        submit(){
            if(this.submitAble){
                if(this.current == '1'){//流量充值
                    console.log('流量',this.recharge)
                    router.push({name:'recharge',params:{type:'flow',choose: this.recharge.choose,pay: this.recharge.pay}})
                }
                else{//话费充值
                    console.log('话费',this.recharge)
                    router.push({name:'recharge',params:{type:'tel',choose: this.recharge.choose,pay: this.recharge.pay}})
                }
            }
        },
    }
}
</script>

<style lang="less" scoped>
    .tab-choose{
        display: flex;
        flex-direction: column;
        .tab-recharge {
            display: flex;
            padding: 20px 0;
            box-sizing: border-box;
            background: #fff;
            .item-recharge {
                flex: 1;
                font-size: 16px;
                line-height: 24px;
                text-align: center;
                &:first-child{
                    border-right: 1px solid #DDDDDD;
                }
                &.current {
                    position: relative;
                    color: #FD4C29;
                    line-height: 24px;
                    &:after{
                        position:absolute;
                        bottom: -18px;
                        left: 50%;
                        transform: translate3d(-50%,0,0) scale(.7) rotate(90deg);
                        content:"\e6f3";
                        font-family: 'recharge';
                        font-weight: lighter;
                        font-size: 12px;
                    }
                }
            }
        }
        .submit{
            flex: 1;
            background: #fff;
        }
    }
</style>
