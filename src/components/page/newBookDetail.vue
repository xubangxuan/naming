<template>
    <div v-title data-title="新书详情" v-cloak>
        <div class="all">
            <div class="top">
                <img width="100%" height="100%" :src="topimg" alt="">
            </div>
            <div class="mains">
                <div class="lists">
                    <div style="margin-top:80px;margin-bottom:40px" class="contentsL">
                        <div class="coontentss">
                            <img width='155px' height="220px" :src="bookimg" alt="">
                        </div>
                        <div class="contentssLR_no" style="flex:1;height:220px;margin-left:20px">
                            <div style="height:100%">
                                <div class="contentssTB" style="height:100%">
                                    <span>书名：《跟任何都...》</span>
                                    <span>作者：张三</span>
                                    <span>索书号：G12342222</span>
                                    <span>价格：G12342222</span>
                                    <span>ISBN：G12342222</span>
                                    <span>出版社：G12342222</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p class="jianjie">图书简介：</p>
                        <p class="jianjiemore" v-html="'简介'"></p>
                    </div>
                </div>
            </div>
            <commonFooter></commonFooter>
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
                bookimg:require('../../assets/images/book.png'),
            }
        },
        methods:{
            
        }
    }
</script>

<style scoped>
.all{
    margin-top: 80px;
    min-height: calc(100vh - 80px);
}
.top{
    width: 100%;
    height: 13.7vw;
}
.allStatus{
    width: 70vw;
    margin: 30px auto;
}
.mains{
    width: 70vw;
    margin: 0 auto;
    margin-bottom: 150px;
}
.lists{
    background-color: #fff;
}
.jianjie{
    font-size:16px;
    font-family:MicrosoftYaHei;
    font-weight:400;
    color:rgba(3,3,3,1);
    line-height:28px;
}
.jianjiemore{
    font-size:14px;
    font-family:MicrosoftYaHei;
    font-weight:400;
    color:rgba(102,102,102,1);
    line-height:28px;
    text-indent: 30px;
}
</style>