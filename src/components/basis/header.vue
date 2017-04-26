<template lang="html">
    <header class="recharge-header">
        <router-link :to="'home'" :class="['item-recharge' ,'tel-flow',{'current': current == '1'}]">话费&流量</router-link>
        <router-link :to="'oil'" :class="['item-recharge' ,'oil',{'current': current == '2'}]">加油卡</router-link>
    </header>
</template>

<script>
export default {
    props:['current'],
    created(){}
}
</script>

<style lang="less" scoped>
@import "../../common/css/maxin.less";

.recharge-header{
    width: 100%;
    display: flex;
    font-size: 16px;
    line-height: 44px;
    background: #fff;
    .borderBH(#F7F9FA);
    .item-recharge{
        flex: 1;
        text-align: center;
        color: #333;
        &.current{
            position: relative;
            font-size: 18px;
            color: #FD4C29;
            &:after{
                content: "";
                position: absolute;
                left: 50%;
                bottom: 0;
                transform: translate3d(-50%, 0, 0);
                width: 75px;
                height: 2px;
                background: #FD4C29;
            }
        }
    }
}
</style>
