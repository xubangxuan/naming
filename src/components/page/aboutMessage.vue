<template>
    <div v-title data-title="本馆资讯" v-cloak>
        <div class="all">
            <div class="top">
                <img width="100%" height="150px" :src="topimg" alt="">
            </div>
            <div class="mains">
                <div class="lists">
                    <div @click="$router.push({path:'/aboutMessageDetail',query:{id:item.id}})"  class="one_list" v-for="(item,index) in 7" :key="index">
                        <div class="contents">
                            <img width="100%" max-height="150px" :src="activeimg" alt="">
                        </div>
                        <div class="contentssL">
                            <p>
                                【新闻公告】新闻标题
                            </p>
                            <p class="projece2">
                                某某新闻标题内容、某某新闻某某新闻标题内容某某新闻
                                标题内容某某新闻标题内容某某新闻标题内容题内......
                            </p>
                            <p>2018-10-22</p>
                            <img width='10%' height="auto" :src="rightimg" alt="">
                        </div>
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
                page:1,
                allPage:1,
                activeimg:require('../../assets/images/active.png'),
                topimg:require('../../assets/images/banner.png'),
                rightimg:require('../../assets/images/right.png'),
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
    padding: 10px 5px;
    display: inline-block;
    width: 30%;
    margin-right: 5%;
}
.one_list:nth-child(3n){
    margin-right: 0;
}
.one_list p{
    font-size:14px;
    font-family:MicrosoftYaHei;
    font-weight:400;
    color:rgba(102,102,102,1);
    line-height:20px;
}
.one_list p:first-child{
    font-size:16px;
    font-family:MicrosoftYaHei;
    font-weight:400;
    color:rgba(3,3,3,1);
    line-height:28px;
    margin-top:10px;
}
.one_list p:nth-child(2){
    margin: 5px 0;
}
.one_list img{
    margin-top: 15px;
}
</style>