<template>
    <div v-cloak>
         <!-- 顶部logo -->
        <!-- <hearderDom></hearderDom> -->
        <div class="allContent">
            <div style="width:80%;margin:0 auto;">
                <div style="padding:45px 10%">
                    <el-row :gutter="20">
                        <el-col :span="6">
                            <div class="grid-content">
                                <div class="leftnav">
                                    <div @click="chose(item.postUrl,index)" :class="onindex==index?'onstatus':'status'" v-for="(item,index) in styleList" :key="index">{{item.text}}</div>
                                </div> 
                            </div>
                        </el-col>
                        <el-col :span="18">
                            <div class="grid-content">
                                <div v-if="list.length" class="con" style="background-color:#ffffff;overflow-y:scroll">
                                    <div v-if="onindex==0" v-for="(item,index) in list" :key="index" style="margin:30px 0">
                                        <el-row :gutter="20">
                                            <el-col :span="20">
                                                <div class="grid-content" style="height:40px">
                                                    <div class="contentssL">
                                                        <p class="title"><span>[{{item.type}}]</span> {{item.intro}}</p>
                                                        <span class="time">{{item.create_time | getAllDataTime}}</span>
                                                    </div>
                                                </div>
                                            </el-col>
                                            <el-col :span="4">
                                                <div class="grid-content" style="height:40px">
                                                    <div class="contents">
                                                        <span class="title">
                                                            <span v-text="item.score"></span>
                                                        </span>
                                                        <!-- <span v-else class="title">
                                                            {{item.name}}
                                                        </span> -->
                                                    </div>
                                                </div>
                                            </el-col>
                                        </el-row>
                                    </div>
                                    <div v-if="onindex==1" v-for="(item,index) in list" :key="index" style="margin:30px 0">
                                        <el-row :gutter="20">
                                            <el-col :span="20">
                                                <div class="grid-content" style="height:40px">
                                                    <div class="contentssL">
                                                        <p class="title"><span>[{{item.type}}]</span> {{item.title}}</p>
                                                        <span class="time">{{item.create_time}}</span>
                                                    </div>
                                                </div>
                                            </el-col>
                                            <el-col :span="4">
                                                <div class="grid-content" style="height:40px">
                                                    <div class="contents">
                                                        <span class="title">
                                                            {{item.name}}
                                                        </span>
                                                    </div>
                                                </div>
                                            </el-col>
                                        </el-row>
                                    </div>
                                    <!-- 教师，场地，设备账单 -->
                                    <div @click="godetail(onindex,item.id)" v-if="onindex==2||onindex==3||onindex==5" v-for="(item,index) in list" :key="index" style="cursor:pointer;margin:30px 0">
                                        <el-row :gutter="20">
                                            <el-col :span="20">
                                                <div class="grid-content" style="height:40px">
                                                    <div class="contentssL">
                                                        <p class="title"><span>[{{item.tname}}]</span>{{item.name}}</p>
                                                        <span class="time">{{item.make_time}}</span>
                                                    </div>
                                                </div>
                                            </el-col>
                                            <el-col :span="4">
                                                <div class="grid-content" style="height:40px">
                                                    <div class="contents">
                                                        <span class="title">
                                                            {{item.status}}
                                                        </span>
                                                    </div>
                                                </div>
                                            </el-col>
                                        </el-row>
                                    </div>
                                    <!-- 志愿者 -->
                                    <div v-if="onindex==4" v-for="(item,index) in list" :key="index" style="margin:30px 0">
                                        <el-row :gutter="20">
                                            <el-col :span="20">
                                                <div class="grid-content" style="height:40px">
                                                    <div class="contentssL">
                                                        <p class="title"><span>[{{item.type}}]</span> {{item.title}}</p>
                                                        <span class="time">{{item.apply_time}}</span>
                                                    </div>
                                                </div>
                                            </el-col>
                                            <el-col :span="4">
                                                <div class="grid-content" style="height:40px">
                                                    <div class="contents">
                                                        <span class="title">
                                                            {{item.name}}
                                                        </span>
                                                    </div>
                                                </div>
                                            </el-col>
                                        </el-row>
                                    </div>
                                    <p class="contents mypages" style="max-height:50px;margin:20px auto">
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
                        </el-col>
                    </el-row>
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
                clickZan:require('../../assets/images/clickZan.png'),
                onindex:0,
                styleList:[{
                    text:'积分账单',
                    postUrl:'score'
                },{
                    text:'文化活动账单',
                    postUrl:'cultureAct'
                },{
                    text:'师资预约账单',
                    postUrl:'teacherOrder'
                },{
                    text:'场馆预定账单',
                    postUrl:'addressOrder'
                },{
                    text:'志愿者账单',
                    postUrl:'volunter'
                },{
                    text:'设备预约账单',
                    postUrl:'equitment'
                }],
                list:[],
                bill:false,
                page:1,
                allPage:1,
          }
        },
        created(){
            this.getList1();
        },
        methods:{
            chose(url,index){
                this.page = 1;
                this.onindex = index;
                if(this.onindex==0){
                    this.getList1();
                }else if(this.onindex==1){
                    this.getList2();
                }else if(this.onindex==2){
                    this.getList3();
                }else if(this.onindex==3){
                    this.getList4();
                }else if(this.onindex==4){
                    this.getList5();
                }else if(this.onindex==5){
                    this.getList6();
                }
            },
            // 积分账单
            getList1(){
                this.axios.get(url.scorebillList,{
                    params:{
                        token:this.$store.state.user.token,
                        page:this.page
                    }
                })
                .then(res=>{
                    console.log(res)
                    if(res.data.code==200){
                        this.allPage = res.data.data.total;
                        this.list = res.data.data.inter;
                    }else{
                        this.allPage = 1;
                        this.list = [];
                        // this.$message.error(res.data.msg)
                    }
                })
                .catch(err=>{
                    console.log(err)
                })
            },
            // 文化活动账单
            getList2(){
                var param = new URLSearchParams();
                param.append('token',this.$store.state.user.token)
                param.append('page',this.page)
                this.axios.get(url.actbillList,{
                    params:{
                        token:this.$store.state.user.token,
                        page:this.page
                    }
                })
                .then(res=>{
                    console.log(res)
                    if(res.data.code==200){
                        this.allPage = res.data.data.total;
                        this.list = res.data.data.act;
                    }else{
                        this.allPage = 1;
                        this.list = [];
                        // this.$message.error(res.data.msg)
                    }
                })
                .catch(err=>{
                    console.log(err)
                })
            },
            // 教师，场地，设备账单
            getList3(){
                this.axios.get(url.culturebillList,{
                    params:{
                        token:this.$store.state.user.token,
                        type:1,
                        page:this.page
                    }
                })
                .then(res=>{
                    console.log(res)
                    if(res.data.code==200){
                        this.allPage = res.data.data.total;
                        this.list = res.data.data.site;
                    }else{
                        this.allPage = 1;
                        this.list = [];
                        // this.$message.error(res.data.msg)
                    }
                })
                .catch(err=>{
                    console.log(err)
                })
            },
            //场地
            getList4(){
                this.axios.get(url.culturebillList,{
                    params:{
                        token:this.$store.state.user.token,
                        type:2,
                        page:this.page
                    }
                })
                .then(res=>{
                    console.log(res)
                    if(res.data.code==200){
                        this.allPage = res.data.data.total;
                        this.list = res.data.data.site;
                    }else{
                        this.allPage = 1;
                        this.list = [];
                        // this.$message.error(res.data.msg)
                    }
                })
                .catch(err=>{
                    console.log(err)
                })
            },
            //设备账单
            getList6(){
                this.axios.get(url.culturebillList,{
                    params:{
                        token:this.$store.state.user.token,
                        type:3,
                        page:this.page
                    }
                })
                .then(res=>{
                    console.log(res)
                    if(res.data.code==200){
                        this.allPage = res.data.data.total;
                        this.list = res.data.data.site;
                    }else{
                        this.allPage = 1;
                        this.list = [];
                        // this.$message.error(res.data.msg)
                    }
                })
                .catch(err=>{
                    console.log(err)
                })
            },
            //志愿者
            getList5(){
                this.axios.get(url.volunbillList,{
                    params:{
                        token:this.$store.state.user.token,
                        page:this.page
                    }
                })
                .then(res=>{
                    console.log(res)
                    if(res.data.code==200){
                        this.allPage = res.data.data.total;
                        this.list = res.data.data.volun;
                    }else{
                        this.allPage = 1;
                        this.list = [];
                        // this.$message.error(res.data.msg)
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
                if(this.onindex==0){
                    this.getList1();
                }else if(this.onindex==1){
                    this.getList2();
                }else if(this.onindex==2){
                    this.getList3();
                }else if(this.onindex==3){
                    this.getList4();
                }else if(this.onindex==4){
                    this.getList5();
                }else if(this.onindex==5){
                    this.getList6();
                }
                
            },
            godetail(index,id){
                if(index==2){
                    // 老师
                    this.$router.push({
                        path:'/myteacher',
                        query:{
                            id:id
                        }
                    })
                }else if(index==3){
                    // 场地
                    this.$router.push({
                        path:'/mysitedetail',
                        query:{
                            id:id
                        }
                    })
                }else if(index==5){
                    // 设备
                    this.$router.push({
                        path:'/myequitdetail',
                        query:{
                            id:id
                        }
                    })
                }
            },
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
                if(x&&x.length>25){
                    return x.substring(0,25) + '...'
                }else{
                    return x
                }
                
            },
        }
    }
</script>

<style scoped>
.allContent{
    background-color: #f5f5f5;
    padding-top: 40px;
}
.status{
    color:#333333;
    text-align:center;
    padding:13px;
    border-bottom:1px solid #f5f5f5;
    cursor: pointer;
}
.onstatus{
    color:#ffffff;
    text-align:center;
    background-color: red !important;
    padding:13px;
    border-bottom:1px solid #f5f5f5;
    cursor: pointer;
}
.con{
    padding: 23px 30px;
    height: 460px;
    font-size:14px;
    font-family:MicrosoftYaHei;
    font-weight:400;
    color:rgba(51,51,51,1);
    line-height:28px;
}
.leftnav>div{
    background-color:#ffffff;
    margin: 10px 0;
}
.title{
    font-size:14px;
    font-family:MicrosoftYaHei;
    font-weight:400;
    color:rgba(51,51,51,1);
}

.time{
    font-size:14px;
    font-family:MicrosoftYaHei;
    font-weight:400;
    color:rgba(153,153,153,1);
}
.con::-webkit-scrollbar {/*滚动条整体样式*/
    width: 4px;     /*高宽分别对应横竖滚动条的尺寸*/
    height: 4px;
}
.con::-webkit-scrollbar-thumb {/*滚动条里面小方块*/
    border-radius: 5px;
    box-shadow: inset 0 0 5px rgba(255, 255, 255, 0.2);
    -webkit-box-shadow: inset 0 0 5px rgba(255, 255, 255, 0.2);
    background: rgba(255, 255, 255, 0.2);
}
.con::-webkit-scrollbar-track {/*滚动条里面轨道*/
    box-shadow: inset 0 0 5px rgba(255, 255, 255, 0.2);
    -webkit-box-shadow: inset 0 0 5px rgba(255, 255, 255, 0.2);
    border-radius: 0;
    background: rgba(255, 255, 255, 0.2);
}
</style>