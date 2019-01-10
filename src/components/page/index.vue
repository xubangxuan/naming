<template>
  <div v-title data-title="呈贡区文化馆数字平台" v-cloak>
        <div class="indexBanner">
            <el-carousel arrow='never' trigger="click" height="500px">
                <el-carousel-item v-for="(item,index) in banners" :key="index">
                    <div class="contents">
                        <img @click="links(item.link)" style="width:100%;height:500px" :src="imgUrl + item.img" alt="">
                    </div>
                </el-carousel-item>
            </el-carousel>
        </div>
        <!--  场馆信息 -->
        <div class="indexInfo">
            <div  style="width:80%;margin:0 auto;">
                <div style="position:relative;height:350px">
                    <img style="width:100%;height:100%" :src="imgprobg" alt="">
                    <div class="ziInfor"></div>
                    <div class="textInfor">
                        <div>
                            {{jieshao | morestrings}}
                        </div>
                        <p @click="$router.push('/aboutUs')" class="moreInfor">更多详情</p>
                    </div>
                </div>
            </div>
        </div>
        <!-- 新闻 -->
        <div class="newsList">
            <div style="width:80%;margin:0 auto;">
                <el-row>
                    <el-col :span="11">
                        <div class="grid-content">
                            <div class="indexNews" style="height:300px">
                                <el-carousel trigger="click" height="300px">
                                    <el-carousel-item  v-for="(item,index) in newList" :key="index">
                                       <div  @click="goNewsDetail(item.id)" style="positiob:relative">
                                           <div class="contents">
                                                <img :src="imgUrl+item.img" alt="">
                                            </div>
                                            <div style="position:absolute;width:100%;height:50px;line-height:50px;padding-left:30px;color:#ffffff;bottom:0;background-color:rgba(51,51,51,.6)">
                                                {{item.title}}
                                            </div>
                                       </div>
                                    </el-carousel-item>
                                </el-carousel>
                            </div>
                        </div>
                    </el-col>
                    <el-col :span="11" :push="2">
                        <div class="grid-content">
                            <div style="height:300px">
                                <div style="padding-top:10px;padding-bottom:10px;border-bottom:2px solid #dcdcdc">
                                    <el-row :gutter="20">
                                        <el-col :span="12">
                                            <div class="grid-content">
                                                <div class="contentsTit" style="height:30px">
                                                    <div style='font-size:28px;font-family:MicrosoftYaHei;font-weight:400;color:rgba(255,18,18,1);'>
                                                        <div style="text-align:left;margin-right:5px">
                                                            新  闻
                                                        </div>
                                                    </div>
                                                    <div class="contentss">
                                                        <div style="font-size:12px;font-style:italic;color:rgba(255,18,18,1);">
                                                            NEWS
                                                        </div>
                                                        <div style="font-size:16px;color:#1E1C1B;font-weight:400">
                                                            公告
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </el-col>
                                        <el-col :span="6" :offset="6">
                                            <div class="grid-content">
                                                <div @click="$router.push({path:'/newsList',query:{type:'all'}})" style="text-align:right;height:30px;line-height:40px;cursor:pointer">
                                                    更多>>
                                                </div>
                                            </div>
                                        </el-col>
                                    </el-row>
                                </div>
                                <div class="newslistSmall" style="padding-top:15px;font-size:14px">
                                    <div @click="goNewsDetail(item.id)" class="projece" v-for="(item,index) in allList" :key="index">
                                        <span>【{{item.type}}】</span>
                                        <span>{{item.title}}</span>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </el-col>
                </el-row>
            </div>
        </div>
        <!-- 其他功能块 -->
        <div class="workArea">
            <div style="width:80%;margin:0 auto;">
                <el-row :gutter="40">
                    <el-col :span="12">
                        <div class="grid-content">
                            <div class="contents cup">
                                <img @click="$router.push('/cultureActList')" style="width:100%;height:300px" :src="cultureimg1" alt="">
                            </div>
                        </div>
                    </el-col>
                    <el-col :span="12">
                        <div class="grid-content">
                            <div class="contents cup">
                                <img style="width:100%;height:300px" :src="cultureimg2" alt="">
                            </div>
                        </div>
                    </el-col>
                </el-row>
            </div>
        </div>
        <div style="margin-top:30px;margin-bottom:80px">
            <div style="width:80%;margin:0 auto;">
                <el-row :gutter="20">
                    <el-col :span="10">
                        <div class="grid-content">
                            <div class="contents cup">
                                <img @click="$router.push('/siteList')" style="width:100%;height:300px" :src="cultureimg3" alt="">
                            </div>
                        </div>
                    </el-col>
                    <el-col :span="7">
                        <div class="grid-content">
                            <div class="contents cup">
                                <img @click="$router.push('/volunteer')" style="width:100%;height:300px" :src="cultureimg4" alt="">
                            </div>
                        </div>
                    </el-col>
                    <el-col :span="7">
                        <div class="grid-content">
                            <div class="contents cup">
                                <img @click="$router.push('/culture')" style="width:100%;height:300px" :src="cultureimg5" alt="">
                            </div>
                        </div>
                    </el-col>
                </el-row>       
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
export default {
        components:{
            hearderDom,
            footersDom
        },
        data () {
          return {
            imgUrl:'',
            jieshao:"",
            newList:[],
            allList:[],
            imgprobg:require('../../assets/images/banner.png'),
            cultureimg1:require('../../assets/images/index1.png'),
            cultureimg2:require('../../assets/images/index2.png'),
            cultureimg3:require('../../assets/images/index3.png'),
            cultureimg4:require('../../assets/images/index4.png'),
            cultureimg5:require('../../assets/images/index5.png'),
            banners:[],
          }
        },
        created(){
            this.imgUrl = url.imgUrl; 
            this.getBanner();
            this.getIndex();
        },
        methods:{
            // 获取banner
            getBanner(){
                this.axios.get(url.getIndexBanner)
                .then(res=>{
                    if(res.data.code==200){
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
            //获取首页信息 (实际上就一个新闻)
            getIndex(){
                this.axios.get(url.getIndex)
                .then(res=>{
                    console.log(res)
                    if(res.data.code==200){
                        this.jieshao = res.data.data.main.intro;
                        // this.allList = res.data.data.news;
                        if(res.data.data.news.length>8){
                            this.allList = res.data.data.news.slice(0,8);
                        }else{
                            this.allList = res.data.data.news
                        }
                        if(res.data.data.news.length>3){
                            this.newList = res.data.data.news.slice(0,3);
                        }else{
                            this.newList = res.data.data.news
                        }
                    }else{
                        this.$message.error(res.data.msg);
                    }
                })
                .catch(err=>{
                    console.log(err)
                })
            },
            //前往新闻详情
            goNewsDetail(id){
                this.$router.push({
                    path:"/newsDetail",
                    query:{
                        id:id
                    }
                })
            }
        },
        filters:{
            
            getAllDataTime(times){
                var d = new Date(times);
                var year = d.getFullYear();
                var month = d.getMonth() + 1;
                var day = d.getDate() < 10 ? '0' + d.getDate() : '' + d.getDate();
                return year + '年' + month + '月' + day+'日';
            },
            getNoYearDataTime(times){
                var d = new Date(times);
                var year = d.getFullYear();
                var month = d.getMonth() + 1;
                var day = d.getDate() < 10 ? '0' + d.getDate() : '' + d.getDate();
                return  month + '月' + day+'日';
            },
            morestrings(string){
                if(string.length>400){
                    return string.substring(0,400)+'...'
                }else{
                    return string
                }
                
            },
        }
}
</script>

<style scoped>
.el-carousel__item div {
    height: 500px;
  }
.indexInfo{
    margin-top: 80px;
}
.ziInfor{
    position:absolute;
    bottom:0;
    left:8%;
    width:84%;
    height:320px;
    background-color:rgba(51,51,51,.7);
    opacity: .5;
    
    
}
.textInfor{
    position:absolute;
    bottom:0;
    left:8%;
    width:84%;
    height:320px;
    padding: 58px 52px 32px 52px;
    color: #ffffff;
    font-size: 14px;
    line-height: 28px;
}
.moreInfor{
    cursor: pointer;
    width: 160px;
    height: 30px;
    border: 1px solid #ffffff;
    border-radius: 15px;
    text-align: center;
    line-height: 30px;
    margin: 0 auto;
    margin-top: 40px;
}
.newsList{
    margin-top: 80px;
}
.hoverShow{
    min-width:150%;
    padding:10px 5px;
    position:absolute;
    bottom:-165px;
    z-index:10;
    background-color:rgba(51,51,51,.7)
}
.hoverShow>div{
    padding: 13px 0;
}
.hoverShow>div:nth-child(2){
    margin: 13px 0;
    
}
.newslistSmall>div{
    margin: 15px 0;
    padding: 15px 2;
    cursor: pointer;
}
.newslistSmall>div:hover{
    color: #FF0000;
}
.workArea{
    margin-top: 80px;
}
.cup{
    cursor: pointer;
    overflow: hidden;
}
.cup>img{
    transition: all 0.6s;
}
.cup>img:hover{
    transform: scale(1.1);
}
</style>
