<template>
    <div v-title data-title="检索结果" v-cloak style="background-color:#f5f5f5">
        <div class="all">
            <div class="top">
                <img width="100%" height="100%" :src="topimg" alt="">
            </div>
            <div class="mains">
                <p>相关书籍检索结果：300</p>
                <div v-if="list" class="lists">
                    <div @click="$router.push({path:'/searchDetail',query:{id:item.id}})" class="one_list" v-for="(item,index) in list" :key="index">
                        <p>书名：《12321231》</p>
                        <p>作者：张三</p>
                        <p>索书号：G633.1/001</p>
                        <p class="projece2">此文段为图书简介占用文案，放弃失落带来的痛楚；放弃屈辱留下的仇怨；
                            放弃无休无止的争吵；放弃没完没了的辩解；放弃虚幻情感的奢望；
                            放弃财物金钱的渴求；放弃权贵势力的觊觎；
                            放弃夸大虚伪的纠缠。只有当机立断地放弃那些不切实际的东西，
                            你的世界才能风和日丽，晴空万里...
                        </p>
                    </div>
                    <p class="contents mypages" style="margin:20px auto;width:100%">
                        <el-pagination 
                            @current-change = 'onpage'
                            :current-page='page'
                            background
                            :page-size=15
                            layout="prev, pager, next"
                            :page-count="allPage">
                        </el-pagination>
                    </p>
                </div>
                <div v-else>
                   <noresouce></noresouce>
                </div>
            </div>

        </div>
        <commonFooter></commonFooter>
    </div>
</template>

<script>
    import noresouce from '../compont/noresouce.vue'
    import commonFooter from '../compont/commonFooter.vue'
    export default {
        components:{
            commonFooter,
            noresouce
        },
        data() {
            return {
                page:1,
                allPage:1,
                list:3,
                topimg:require('../../assets/images/banner.png'),
            }
        },
        methods:{
            onpage(page){
                this.page = page;
            }
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
.mains{
    width: 70vw;
    margin: 0 auto;
    margin-bottom: 100px;
}
.mains>p{
    font-size:16px;
    font-family:MicrosoftYaHei;
    font-weight:400;
    color:rgba(102,102,102,1);
    line-height:16px;
    padding: 20px 32px;
}
.lists{
    background-color: #fff;
    padding: 30px;
    margin-bottom: 50px;
}
.one_list{
    padding: 30px 0;
    border-bottom: 1px dashed #999999 ;
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