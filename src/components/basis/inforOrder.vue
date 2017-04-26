<template lang="html">
    <div class="infor-order">
        <span class="title">{{title}}</span>
        <span class="infor">{{infor}}</span>
    </div>
</template>

<script>
export default {
  props: ['title', 'infor']
}
</script>

<style lang="less" scoped>
@import "../../common/css/maxin.less";

.infor-order {
    display: flex;
    padding: 13px 0;
    margin: 0 15px;
    line-height: 24px;
    font-size: 16px;
    background: #fff;
    .borderBH();
    .title {
        margin-right: 10px;
        color: #666;
    }
    .infor {
        flex: 1;
    }
}
</style>
