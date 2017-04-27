<template lang="html">
    <div class="tab-choose">
        <!-- tab -->
        <!-- <tab class="tab" :text="text" :current='2'></tab> -->

        <!-- 话费充值 -->
        <limit :choose="choose.tel" :yuan="true" :numbfault="numbfault"></limit>

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
        tab(index){
            this.current = index;
        }
    }
}
</script>

<style lang="less" scoped>
    .tab-choose{
        display: flex;
        flex-direction: column;
        .submit{
            flex: 1;
            background: #fff;
        }
    }
</style>
