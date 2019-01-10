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
                    <span @click="spanClick(index,item.id)" class="allStyles" :class="onIndex==index?'onAllStyles':''" v-for="(item,index) in stylelist" :key="index">
                        {{item.name}}
                    </span>
                </div>
                <!-- 师资力量 -->
                <div v-if="list" class="personChoose">
                    <div v-for="(item,index) in list" :key="index" >
                        <div @click="goDetail(item.id)" class="contentss">
                            <img style='width:244px;height:240px' :src="imgUrl+item.head_img" alt="">
                            <span class="names">{{item.username}}</span>
                            <span class="guanzis">{{item.name}}</span>
                            <p style="width:100%;text-align:center" class="guanzis projece">
                                擅长：
                                <span v-for="(i,indexs) in item.labei" :key="indexs">{{i}}<span style="padding:0 2px" v-if="indexs<item.labei.length-1">,</span></span>
                            </p>
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
            page:1,
            allPage:1,
            onIndex:0,
            onid:'',//当前id
            stylelist:[],//所有分馆
            list:[],
            banners:[],
          }
        },
        created(){
            this.imgUrl = url.imgUrl; 
            this.getBanner();
            this.getAllname();

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
            getAllname(){
                this.axios.get(url.branch)
                .then(res=>{
                    console.log(res)
                    if(res.data.code==200){
                        this.stylelist = res.data.data;
                        this.onid = res.data.data[0].id;
                        this.getJieShao();
                    }
                })
                .catch(err=>{
                    console.log(err)
                })
            },
            //选择类型
            spanClick(index,id){
                this.page = 1;
                this.onIndex = index;
                this.onid = id;
                this.getJieShao()
            },
            getJieShao(){
                this.axios.get(url.orderteacher,{
                    params:{
                        stadium_id:this.onid,
                        page:this.page
                    }
                })
                .then(res=>{
                    console.log(res)
                    if(res.data.code==200){
                        this.allPage = res.data.data.total;
                        this.list = res.data.data.teacher;
                    }
                })
                .catch(err=>{
                    console.log(err)
                })
            },
            goDetail(id){
                this.$router.push({
                    path:'/teacherListDetail',
                    query:{
                        id:id
                    }
                })
            },
            onpage(page){
                // 当前页
                console.log(page)
                this.page = page;
                this.getJieShao();
            }
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
    width: 22%;
    margin-left: 4%;
    margin-bottom: 60px;
}
.personChoose>div:nth-child(4n+1){
    margin-left: 0;
}
.names{
    font-size:18px;
    font-family:SourceHanSansCN-Regular;
    font-weight:400;
    color:rgba(51,51,51,1);
    margin-top:25px;
}
.guanzis{
    height:14px;
    font-size:14px;
    font-family:SourceHanSansCN-Regular;
    font-weight:400;
    color:rgba(102,102,102,1);
    margin-top: 13px;
}
</style>