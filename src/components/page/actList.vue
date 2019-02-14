<template>
    <div v-title data-title="活动报名" v-cloak>
        <div class="all">
            <div class="top">
                <img width="100%" height="100%" :src="topimg" alt="">
            </div>
            <div class="allStatus">
                <div>
                    <span @click="chooseStyle(index)" v-for="(item,index) in stuasList" :key="index" :class="onstatus==index?'onStatus':''">{{item.name}}</span>
                </div>
            </div>
            <div class="bghui"></div>
            <div class="mains">
                <div class="lists">
                    <div v-for="(item,index) in 3" :key="index" class="oneitem contentsNav">
                        <div class="contentsNav">
                            <div style="width:11.5vw;height:7.8vw">
                                <img style="width:100%;height:100%" :src="activeimg" alt="">
                            </div>
                            <div class="contentssTB" style="height:7.8vw;margin-left:25px">
                                <p class="title">活动标题</p>
                                <div class="actinfo">
                                    <p>活动名额：2/10</p>
                                    <p>活动地址：某个详细地址</p>
                                    <p>活动时间：2018-10-10 9:00至2018-10-11 17:00</p>
                                </div>
                                <p class="times">
                                    <span>活动预告</span>
                                    <span>2018-10-10</span>
                                </p>
                            </div>
                        </div>
                        <div @click="$router.push({path:'/actDetail',query:{id:item.id}})" @mouseenter="showimg=false;onindexShowPic=index" @mouseleave="showimg=true;onindexShowPic=-1" class="contents moreinfo" style="height:7.8vw">
                            <span>进一步了解</span>
                            <img v-show="showimg||index!=onindexShowPic" width="25px" height="auto" :src="rightimg" alt="">
                            <img v-show="!showimg&&index==onindexShowPic" width="25px" height="auto" :src="rightimgon" alt="">
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
                activeimg:require('../../assets/images/active.png'),
                topimg:require('../../assets/images/banner.png'),
                rightimg:require('../../assets/images/right.png'),
                rightimgon:require('../../assets/images/rightOn.png'),
                stuasList:[
                    {
                        name:'全部状态',
                        stuas:'all'
                    },{
                        name:'活动预告',
                        stuas:'all'
                    },{
                        name:'活动报名中',
                        stuas:'all'
                    },{
                        name:'活动进行中',
                        stuas:'all'
                    },{
                        name:'活动已结束',
                        stuas:'all'
                    }
                ],
                onstatus:0,
                showimg:true,//显示hover的箭头
                onindexShowPic:-1,//显示hover的箭头的下标
                page:1,
                allPage:1,
            }
        },
        methods:{
            chooseStyle(index){
                this.onstatus = index
            },
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
    margin-top: 30px;
}
.lists>div{
    padding: 60px 0;
    border-bottom: 1px solid #e6e6e6;
}
.actinfo>p{
    font-size:14px;
    font-family:MicrosoftYaHei;
    font-weight:400;
    color:rgba(102,102,102,1);
}
.actinfo>p:nth-child(2){
    margin: 5px 0;
}
.title{
    font-size:16px;
    font-family:MicrosoftYaHei;
    font-weight:400;
    color:rgba(3,3,3,1);
    line-height:16px;
}
.times{
    font-size:14px;
    font-family:MicrosoftYaHei;
    font-weight:400;
    color:rgba(102,102,102,1);
    line-height:14px;
}
.times>span:first-child{
    background:rgba(221,19,19,1);
    border-radius:1px;
    padding: 4px 6px;
    color: #fff;
    font-size:14px;
    font-family:MicrosoftYaHei;
    font-weight:400;
    line-height:14px;
}
.moreinfo{
    font-size:14px;
    font-family:MicrosoftYaHei;
    font-weight:400;
    color:rgba(102,102,102,1);
    line-height:24px;
}
.moreinfo:hover{
    color: rgba(0,160,233,1);
}
.moreinfo>span{
    margin-right: 15px;
    cursor: pointer;
}
.allStatus>div>span{
    border:1px solid rgba(153,153,153,1);
    border-radius:9px;
    padding: 4px 14px;
    font-size:14px;
    font-family:MicrosoftYaHei;
    font-weight:400;
    color:rgba(153,153,153,1);
    line-height:16px;
    margin-right: 10px;
    cursor: pointer;
}
.onStatus{
    background:rgba(0,160,233,1) !important;
    color:rgba(255,255,255,1) !important;
    border-color: rgba(0,160,233,1) !important;
}
</style>