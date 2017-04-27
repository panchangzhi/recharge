<template lang="html">
    <div class="record">
        <p class="month">本月</p>
        <div class="item-record">
            <!-- 日期 -->
            <div class="time-wrapper">
                <span class="date">21日</span>
                <span class="day">19:00</span>
            </div>

            <!-- 充值类型icon -->
            <div class="icon tel">&#xe6f2;</div>

            <!-- 充值信息 -->
            <div class="infor-order">
                <p class="money">-9.08</p>
                <p class="desc">充值10元－15321356606</p>
                <span class="failed">交易失败</span>
            </div>

        </div>

        <div class="item-record">
            <!-- 日期 -->
            <div class="time-wrapper">
                <span class="date">21日</span>
                <span class="day">19:00</span>
            </div>

            <!-- 充值类型icon -->
            <div class="icon oil">&#xe6ef;</div>

            <!-- 充值信息 -->
            <div class="infor-order">
                <p class="money">-9.08</p>
                <p class="desc">充值10元－15321356606</p>
                <span class="failed">交易失败</span>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    created(){
        console.log('record created')
    }
}
</script>

<style lang="less" scoped>
@import "../common/css/maxin.less";

.record {
    background: #fff;
    .month {
        padding: 10px 15px;
        font-size: 14px;
        color: #666;
        line-height: 24px;
        background: #f5f5f5;
    }
    .item-record{
        display: flex;
        align-items: center;
        margin-left: 15px;
        height: 70px;
        .borderBH();
        .time-wrapper{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            color: #999;
            letter-spacing: 0;
            .date{
                line-height: 24px;
                font-size: 16px;
            }
            .day{
                line-height: 18px;
                font-size: 12px;
            }
        }
        .icon{
            margin: 0 20px;
            font-size: 34px;
            &.tel{
                color: #0083E6;
            }
            &.oil{
                color:#FF6600;
            }
        }
        .infor-order{
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            position: relative;
            height: 100%;
            .money{
                line-height: 24px;
                font-size: 18px;
            }
            .desc{
                line-height: 22px;
                font-size: 14px;
                color: #666;
            }
            .failed{
                position: absolute;
                right: 15px;
                top: 15px;
                line-height: 18px;
                font-size: 12px;
                color: #999;
            }
        }
    }
}
</style>
