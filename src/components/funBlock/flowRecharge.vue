<template lang="html">
    <div class="tab-choose">
        <!-- tab -->
        <!-- <tab class="tab" :text="text" :current='1'></tab> -->
        <!-- <div class="tab-recharge">
            <span class="item-recharge" :class="{'current': current == '1'}" @click="tab(1)">{{text[0]}}</span>
            <span class="item-recharge" :class="{'current': current == '2'}" @click="tab(2)">{{text[1]}}</span>
        </div> -->


        <!-- 流量充值 -->
        <limit :choose="choose.flow" :flow="true" :numbfault="numbfault"></limit>
        <!-- 话费充值 -->
        <!-- <limit :choose="choose.tel" :yuan="true" :numbfault="numbfault"></limit> -->

        <div class="submit">
            <submit text="立即充值" :unable="true"></submit>
        </div>

    </div>
</template>

<script>
import limit from '../basis/chooseLimit'
import submit from '../basis/submit'
// import tab from '../basis/tabRecharge'


export default {
    data(){
        return {
            current: 1,//tab切换
            recharge:{},//充值的额度和金额
        }
    },
    props:['choose','text','numbfault'],
    components:{
        limit,
        submit,
        // tab,
    },
    methods:{

    }
}
</script>

<style lang="less" scoped>
    .tab-choose{
        display: flex;
        flex-direction: column;
        // .tab-recharge {
        //     display: flex;
        //     padding: 20px 0;
        //     box-sizing: border-box;
        //     background: #fff;
        //     .item-recharge {
        //         flex: 1;
        //         font-size: 16px;
        //         line-height: 24px;
        //         text-align: center;
        //         &:first-child{
        //             border-right: 1px solid #DDDDDD;
        //         }
        //         &.current {
        //             position: relative;
        //             color: #FD4C29;
        //             line-height: 24px;
        //             &:after{
        //                 position:absolute;
        //                 bottom: -18px;
        //                 left: 50%;
        //                 transform: translate3d(-50%,0,0) scale(.7) rotate(90deg);
        //                 content:"\e6f3";
        //                 font-family: 'recharge';
        //                 font-weight: lighter;
        //                 font-size: 12px;
        //             }
        //         }
        //     }
        // }
        .submit{
            flex: 1;
            background: #fff;
        }
    }
</style>
