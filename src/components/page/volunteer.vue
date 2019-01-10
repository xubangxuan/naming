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
                <div class="styleChoose" style="padding-top:16px">
                    <span @click="spanClick(index,item.id)" class="allStyles" :class="onIndex==index?'onAllStyles':''" v-for="(item,index) in guanlist" :key="index">
                        {{item.name}}
                    </span>
                </div>
                <div class="styleChoose">
                    <span @click="spanClickstate(index,item.state)" class="allStyles" :class="onIndexstate==index?'onAllStyles':''" v-for="(item,index) in mylist" :key="index">
                        {{item.name}}
                    </span>
                </div>
                <!-- 师资力量 -->
                <div v-if="list" class="personChoose">
                    <div @click="goDetail(item.id)" v-for="(item,index) in list" :key="index" style="cursor:pointer">
                        <div class="contentss">
                            <img style='width:370px;height:240px;border:1px solid #eeeeee' :src="imgUrl + item.img" alt="">
                            <div style="width:370px;margin-top:26px">
                                <el-row>
                                    <el-col :span="18">
                                        <div class="grid-content">
                                            <p class="names">{{item.title}}</p>
                                        </div>
                                    </el-col>
                                    <el-col :span="6">
                                        <div class="grid-content">
                                            <p :class="item.state=='活动已结束'?'redFz':'blueFz'" class="contentsR">
                                                {{item.state}}
                                            </p>
                                        </div>
                                    </el-col>
                                </el-row>
                                <p class="guanzis">活动名额：{{item.apply_number}}/{{item.number}}</p>
                                <p class="guanzis">报名时间：{{item.apply_start_time | getAllDataTime}}/{{item.apply_end_time | getAllDataTime}}</p>
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
            guanlist:[],
            guanid:'',//馆id
            stylelist:[],
            mylist:[{
                name:'全部状态',
                state:'all'
            },{
                name:'报名未开始',
                state:'1'
            },{
                name:'报名中',
                state:'2'
            },{
                name:'报名已结束',
                state:'3'
            },{
                name:'活动进行中',
                state:'4'
            },{
                name:'活动已结束',
                state:'5'
            }],
            state:'all',
            onIndex:0,
            onIndexstate:0,
            list:[],
            banners:[],
            page:1,
            allPage:1,
          }
        },
        created(){
            this.imgUrl = url.imgUrl; 
            this.getBanner();
            this.getAllguanname();
            
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
            // 获取馆列表
            getAllguanname(){
                this.axios.get(url.branch)
                .then(res=>{
                    console.log(res)
                    if(res.data.code==200){
                        this.guanlist = res.data.data;
                        this.guanid = res.data.data[0].id;
                        // this.getStylist();
                        this.getList();
                    }
                })
                .catch(err=>{
                    console.log(err)
                })
            },
            //获取类型列表
            getStylist(){
                this.axios.post(url.voluntype)
                .then(res=>{
                    console.log(res)
                    if(res.data.code==200){
                        this.stylelist = res.data.data;
                        this.styleid = res.data.data[0].id;
                        this.getList();
                    }
                })
                .catch(err=>{
                    console.log(err)
                })
            },
            //选择图书馆
            spanClick(index,id){
                this.onIndex = index;
                this.guanid = id;
                this.page = 1;
                this.getList();
            },
            //选择状态
            spanClickstate(index,state){
                this.onIndexstate = index;
                this.state = state;
                this.page = 1;
                this.getList();
            },
            //获取列表
            getList(){
                // var param = new URLSearchParams();
                // param.append('cu_id',this.guanid)
                // param.append('type_id',this.styleid)
                // param.append('page',this.page)
                // param.append('token',this.$store.state.user.token||'')
                this.axios.get(url.volunlist,{
                    params:{
                        page:this.page,
                        stadium_id:this.guanid,
                        state:this.state
                    }
                })
                .then(res=>{
                    console.log(res)
                    if(res.data.code==200){
                        console.log('列表')
                        this.allPage = res.data.data.total;
                        this.list = res.data.data.volun;
                    }else if(res.data.code==202){
                        this.$message.error(res.data.msg)
                        this.allPage = 1;
                        this.list = [];
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
                this.getList();
            },
            goDetail(id){

                this.$router.push({
                    path:'/volunteerDetail',
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
                return year + '.' + month+ '.' + day;
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
.styleChoose{
    margin-top: 26px;
    /* padding-top: 16px; */
    /* padding-bottom: 16px; */
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
.blueFz{
    font-size:14px;
    font-family:SourceHanSansCN-Regular;
    font-weight:400;
    color:rgba(37,178,246,1);
}
.redFz{
    font-size:14px;
    font-family:SourceHanSansCN-Regular;
    font-weight:400;
    color:rgba(255,0,0,1);
}
</style>