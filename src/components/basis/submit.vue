<template lang="html">
  <div class="button" :class="{'unable': unable,'pay': pay}" @click="submit">
        {{text}}
  </div>
</template>

<script>
export default {
    props:['text','unable','pay'],
    methods:{
        submit(){
            this.$parent.submit();
        },
    },
}
</script>

<style lang="less" scoped>
.button {
    padding: 11px 0;
    margin: 30px 15px 0;
    line-height: 28px;
    font-size: 18px;
    color: #FFF;
    text-align: center;
    box-sizing: border-box;
    background-image: linear-gradient(90deg, #FF9900 0%, #FD4C29 100%);
    box-shadow: 0 3px 10px 0 rgba(253,75,40,0.40);
    border-radius: 4px;
    &.unable{
        opacity: 0.4;
    }
    &.pay{
        &:before{
            content:"\7acb\5373\652f\4ed8";
            margin-right: 10px;
        }
    }
}
</style>
