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
            <div style="width:80%;margin:0 auto;padding:15px 0">
                <div v-if="list" >
                <div v-for="(item,index) in list" :key="index">
                    <el-row>
                        <el-col :span="20">
                            <div class="grid-content">
                                <div @click="goDetail(item.id)" style="height:120px;padding:15px 0;">
                                    <div class="contents">
                                        <div style="cursor: pointer;width:20%;height:100%;overflow:hidden">
                                            <img :src="imgUrl + item.img" alt="">
                                        </div>
                                        <div style="cursor: pointer;width:40%;padding-left:15px;height:100%">
                                            <p style="width:100%" class="tit projece">【{{item.type}}】<span>{{item.title}}</span></p>
                                            <p class="smallTit projece2" style="width:100%;height:50px" v-html="item.content"></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </el-col>
                        <el-col :span="4">
                            <div class="grid-content">
                                <div style="height:120px;padding:15px 0">
                                    <div class="afterDiv" style="width:90px;height:90px;position:relative">
                                        <div class="contentsNews">
                                            <p><span class='numbers'>{{item.create_time | getNoYearDataTime}}</span></p>
                                            <p style="text-align:right"><span class='years'>{{item.create_time | getAllDataTime}}</span></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </el-col>
                    </el-row>
                </div>
                <div class="contents mypages" style="margin:20px auto">
                    <el-pagination 
                        @current-change = 'onpage'
                        background
                        :page-size=15
                        layout="prev, pager, next"
                        :page-count="allPage">
                    </el-pagination>
                </div>
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
            list:[],
            imgUrl:'',
            page:1,
            allPage:1,
            banners:[],
          }
        },
        created(){
            this.imgUrl = url.imgUrl; 
            this.getBanner();
            this.getList();

        },
        watch:{
            '$route'(to,from) {
                this.page = 1;
                this.getList()
            }
        },
        methods:{
            getList(){
                this.axios.get(url.getNew+'?page='+this.page+'&type='+this.$route.query.type)
                .then(res=>{
                    console.log(res)
                    if(res.data.code==200){
                        this.list = res.data.data.news;
                        this.allPage = res.data.data.total;
                    }
                })
                .catch(err=>{
                    console.log(err)
                })
            },
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
            goDetail(id){
                this.$router.push({
                    path:'/newsDetail',
                    query:{
                        id:id
                    }
                })
            },
            onpage(page){
                // 当前页
                console.log(page)
                this.page = page;
                this.getList();
            }
        },
        filters:{
            getAllDataTime(times){
                var d = new Date(times);
                var year = d.getFullYear();
                var month = d.getMonth() + 1;
                return year + '.' + month;
            },
            getNoYearDataTime(times){
                var d = new Date(times);
                var day = d.getDate() < 10 ? '0' + d.getDate() : '' + d.getDate();
                return  day;
            },
            str(x){
                if(x&&x.length>45){
                    return x.substring(0,45) + '...'
                }else{
                    return x
                }
                
            },
        }
    }
</script>

<style scoped>
.tit{
    font-size:16px;
    font-family:MicrosoftYaHei;
    font-weight:400;
    color:rgba(51,51,51,1);
    line-height:28px;
    
}
.smallTit{
    font-size:14px;
    font-family:MicrosoftYaHei;
    font-weight:400;
    color:rgba(102,102,102,1);
    line-height:28px;
}
.afterDiv::before{
    content:'';
    position: absolute;
    left: 0;
    top:0;
    width:100%;
    height:45px;
    box-sizing:border-box;
    border-bottom:1px solid #333333;
    transform-origin:bottom center;
    transform:rotateZ(-45deg) scale(1.2);
}
.numbers{
    font-size:30px;
    font-family:Baskerville;
    font-weight:400;
    color:rgba(51,51,51,1);
    line-height:28px;
}
.years{
    font-size:14px;
    font-family:Baskerville;
    font-weight:400;
    color:rgba(51,51,51,1);
    line-height:28px;
}
</style>