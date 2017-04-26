<template lang="html">
    <div class="detail">
        <!-- 总共支付 -->
        <money money="199.00"></money>

        <infor-order infor="153-2135-6606 北京电信" title="充值号码"></infor-order>
        <infor-order infor="153-2135-6606 北京电信" title="充值号码"></infor-order>
        <infor-order infor="153-2135-6606 北京电信" title="充值号码"></infor-order>
        <infor-order infor="153-2135-6606 北京电信" title="充值号码"></infor-order>

    </div>
</template>

<script>
import money from '../components/basis/payMoney'
import inforOrder from '../components/basis/inforOrder'


export default {
    components:{
        money,
        inforOrder
    }
}
</script>

<style lang="less" scoped>
    .detail{
        background: #fff;
    }
</style>
