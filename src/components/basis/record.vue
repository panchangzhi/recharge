<template lang="html">
  <div class="record" @click="routerGO">
      充值记录
  </div>
</template>

<script>
import route from '../../router/index'

export default {
    methods:{
        routerGO(){
             route.push({name:'record',query:{key: (new Date()).valueOf()}})
        }
    }
}
</script>

<style lang="less" scoped>
.record {
    padding: 10px 0;
    line-height: 22px;
    font-size: 14px;
    color: #666;
    letter-spacing: 0;
    text-align: center;
    background: #fff;
}
</style>
