<template lang="html">
    <div class="tab-recharge">
        <span :class="['item-recharge',{'current': current == '1'}]" @click="tab(1)">{{text[0]}}</span>
        <span :class="['item-recharge',{'current': current == '2'}]" @click="tab(2)">{{text[1]}}</span>
    </div>
</template>

<script>
export default {
    data(){
        return{
            current:'1',
        }
    },
        props:['text'],
    methods:{
        tab(index){
            this.current = index;
        }
    }
}
</script>

<style lang="less" scoped>
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
</style>
