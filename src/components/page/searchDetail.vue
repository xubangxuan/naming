<template>
    <div v-title data-title="检索详情" v-cloak style="background-color:#f5f5f5">
        <div class="all">
            <div class="top">
                <img width="100%" height="150px" :src="topimg" alt="">
            </div>
            <div class="mains">
                <div class="lists">
                    <div  class="one_list">
                        <p>书名：《12321231》</p>
                        <p>作者：张三</p>
                        <p>索书号：G633.1/001</p>
                        <p>ISBN：123456789</p>
                        <p>价格：￥23.00</p>
                        <p>出版社：某某出版社</p>
                        <p>图书简介：</p>
                        <p style="text-indent:35px">此文段为图书简介占用文案，放弃失落带来的痛楚；放弃屈辱留下的仇怨；
                            放弃无休无止的争吵；放弃没完没了的辩解；放弃虚幻情感的奢望；
                            放弃财物金钱的渴求；放弃权贵势力的觊觎；
                            放弃夸大虚伪的纠缠。只有当机立断地放弃那些不切实际的东西，
                            你的世界才能风和日丽，晴空万里...
                        </p>
                    </div>
                    
                </div>
                
            </div>

        </div>
    </div>
</template>

<script>
    import commonFooter from '../compont/commonFooter.vue'
    export default {
        components:{
            commonFooter
        },
        data() {
            return {
                topimg:require('../../assets/images/banner.png'),
            }
        },
    }
</script>

<style scoped>
.all{
    margin-top: 80px;
    min-height: calc(100vh - 80px);
}
.mains{
    width: 70vw;
    margin: 0 auto;
}
.lists{
    background-color: #fff;
    padding: 0 20px 0 20px;
    margin-top: 30px;
}
.one_list{
    padding: 30px 0;
}
.lists>div>p{
    font-size:16px;
    font-family:MicrosoftYaHei;
    font-weight:400;
    color:rgba(3,3,3,1);
    line-height:24px;
}
.lists>div>p:last-child{
    font-size:16px;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:rgba(102,102,102,1);
    line-height: 23px;
    margin-top: 10px;
}
</style>