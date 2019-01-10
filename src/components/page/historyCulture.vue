<template>
    <div v-cloak>
         <!-- 顶部logo -->
        <!-- <hearderDom></hearderDom> -->
        <!-- banner -->
        <div class="indexBanner">
            <el-carousel arrow='never' trigger="click" height="500px">
                <el-carousel-item v-for="(item,index) in banners" :key="index">
                    <div class="contents">
                        <img @click="links(item.link)" style="width:100%;height:500px" :src="imgUrl + item.img" alt="">
                    </div>
                </el-carousel-item>
            </el-carousel>
        </div>
        <div class="allContent">
            <div style="width:80%;margin:0 auto;">
                <!-- 上面的筛选条件区域 -->
                <div class="styleChoose">
                     <span @click="spanClick(index,item.id)" class="allStyles" :class="onIndex==index?'onAllStyles':''" v-for="(item,index) in styleList" :key="index">
                        {{item.title}}
                    </span>
                </div>
                <!-- 列表 -->
                <div v-if="list" class="personChoose">
                    <div v-for="(item,index) in list" :key="index" >
                        <div @click="goDetail(item.id)" class="contentss">
                            <img style='width:370px;height:240px;border:1px solid #eeeeee' :src="imgUrl + item.img" alt="">
                            <div style="width:370px;margin-top:26px">
                                <p class="names projece">{{item.title}}</p>
                                <div class="guanzis contentsL">
                                    <div class="contents">
                                        <span class="contents">
                                            <img :src="zanImg" alt="">
                                        </span>
                                        <span>{{item.like_num}}</span>
                                    </div>
                                    <div class="contents" style="margin-left:35px">
                                        <span>
                                            <img :src="seeImg" alt="">
                                        </span>
                                        <span>{{item.browse_num}}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p class="contents mypages" style="margin:20px auto">
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
        <!-- 尾部 -->
        <footersDom></footersDom>
    </div>
</template>

<script>
import url from '@/serverApi.js'
import axios from 'axios'
import { Message } from 'element-ui'
import hearderDom from '../compont/commonTop.vue'
import footersDom from '../compont/commonFooter.vue'
import noresouce from '../compont/noresouce.vue'
    export default {
        components:{
            hearderDom,
            footersDom,
            noresouce
        },
        data () {
          return {
            imgUrl:'',
            onIndex:0,
            styleList:[],
            list:[],
            guanId:'',
            page:1,
            allPage:1,
            zanImg:require('../../assets/images/zan.png'),
            seeImg:require('../../assets/images/see.png'),
            banners:[],
          }
        },
        created(){
            this.imgUrl = url.imgUrl; 
            this.getBanner();
            this.getStyle();
        },
        methods:{
            // 获取banner
            getBanner(){
                this.axios.get(url.getIndexBanner)
                .then(res=>{
                    if(res.data.code==200){
                        // console.log(res)
                        this.banners = res.data.data;
                    }
                })
                .catch(err=>{
                    console.log(err)
                })
            },
            // 跳转页面
            links(url){
                location.href = url;
            },
            getStyle(){
                this.axios.get(url.databaseStyle)
                .then(res=>{
                    console.log(res)
                    if(res.data.code==200){
                        this.styleList = res.data.data;
                        this.guanId = res.data.data[0].id;
                        this.getAllList()
                    }
                    
                })
            },
            //选择类型
            spanClick(index,id){
                this.onIndex = index;
                this.guanId = id;
                this.page = 1;
                this.getAllList();
            },
            goDetail(id){
                this.$router.push({
                    path:'/historyCultureDetail',
                    query:{
                        id:id
                    }
                })
            },
            getAllList(){
                this.axios.get(url.databaselists,{
                    params:{
                        cu_id:this.guanId,
                        token:this.$store.state.user.token||'',
                        page:this.page
                    }
                })
                .then(res=>{
                    console.log(res)
                    if(res.data.code==200){
                        this.allPage = res.data.data.total;
                        this.list = res.data.data.cul;
                    }else if(res.data.code==202){
                        this.$message.error(res.data.msg);
                        this.list = [];
                        this.allPage = 1;
                        this.page = 1;
                    }else{
                        this.$message.error(res.data.msg);
                    }
                })
                .catch(err=>{
                    console.log(err)
                })
            },
            onpage(page){
                // 当前页
                console.log(page)
                this.page = page;
                this.getAllList();
            },
        },
    }
</script>

<style scoped>
.styleChoose{
    margin-top: 26px;
    padding-top: 16px;
    padding-bottom: 26px;
    border-bottom: 1px solid #eeeeee;
}
.allStyles{
    /* width:105px; */
    height:30px;
    padding: 0 24px;
    color: #999999;
    background:rgba(238,238,238,1);
    border-radius:15px;
    line-height: 30px;
    text-align: center;
    cursor: pointer;
    margin-bottom: 28px;
    margin-right: 28px;
}
.onAllStyles{
    background:rgba(254,5,5,1);
    color: #ffffff;
}
.personChoose{
    margin-top: 80px;
}
.personChoose>div{
    display: inline-block;
    width: 31%;
    margin-left: 2%;
    margin-bottom: 60px;
}
.personChoose>div:nth-child(3n+1){
    margin-left: 0;
}
.names{
    font-size:18px;
    font-family:SourceHanSansCN-Regular;
    font-weight:400;
    color:rgba(51,51,51,1);
}
.guanzis{
    height:14px;
    font-size:14px;
    font-family:SourceHanSansCN-Regular;
    font-weight:400;
    color:rgba(102,102,102,1);
    margin-top: 13px;
}
.guanzis>div>span:last-child{
    display:inline;
    margin-left: 12px;
}
</style>