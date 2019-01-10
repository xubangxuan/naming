<template>
    <div v-cloak>
         <!-- 顶部logo -->
        <!-- <hearderDom></hearderDom> -->
        <div class="allContents">
            <div style="width:80%;margin:0 auto">
                <div style="padding:45px 10%">
                    <p>
                        <span class="names">{{detailObj.name}}</span>
                        <span class="guan">{{detailObj.title}}</span>
                    </p>
                    <div class="siteDetails">
                        <p>
                            <span>场馆简介：</span>
                            <span>
                                {{detailObj.intro}}
                            </span>
                        </p>
                        <p>
                            <span>场馆设备：</span>
                            <span>{{detailObj.equipment}}</span>
                        </p>
                        <p>
                            <span>容纳人数：</span>
                            <span>{{detailObj.accom_number}}</span>
                        </p>
                        <p>
                            <span>详细地址：</span>
                            <span>{{detailObj.address}}</span>
                        </p>
                    </div>
                </div>
            </div>
            <div style="background-color:#f5f5f5">
                <div style="width:80%;margin:0 auto">
                    <div style="padding:45px 10%">
                        <p class="titles">场馆预约表</p>
                        <p class="psamll">直接点击“预约”可进行操作， 红色字体表示不可以进行预约，黑色字体可以进行预约!</p>
                        <div  class="allBiao contents">
                            <div class="contentss">
                                <div class="oneDay">
                                    <div class="contentss conts" style="position:relative;width:115px;background-color:#ffffff;padding:0 15px">
                                        <p class="week" style="width:100%;text-align:right">日期</p>
                                        <p class="week" style="width:100%;text-align:left">时间</p>
                                    </div>
                                    <div class="contentss wenzi" style="cursor:pointer;border-top:1px solid #FDBDBD;border-bottom:1px solid #FDBDBD;">
                                        上午
                                    </div>
                                    <div class="contentss wenzi" style="cursor:pointer;">
                                        下午
                                    </div>
                                </div>
                            </div>
                            <div v-for="(item,index) in weekList" :key="index" class="contentss">
                                <div class="oneDay">
                                    <div class="contentss" style="background-color:#ffffff">
                                        <p class="week">{{item.week}}</p>
                                        <p class="weekTime">{{item.date}}</p>
                                    </div>
                                    <div @click="wantYuyue('am',item.am,item)" class="contentss wenzi" :class="item.am?'':'onwenzi'" style="cursor:pointer;border-top:1px solid #FDBDBD;border-bottom:1px solid #FDBDBD;">
                                        预约
                                    </div>
                                    <div @click="wantYuyue('pm',item.pm,item)" class="contentss wenzi" :class="item.pm?'':'onwenzi'" style="cursor:pointer;">
                                        预约
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="contents">
                            <div class="contents" style="margin-right:107px">
                                <span class="circleB"></span>
                                <span class="yuyues">可以预约</span>
                            </div>
                            <div class="contents">
                                <span class="circleR"></span>
                                <span class="yuyuess">不可预约</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <el-dialog width='640px' :visible.sync="dialogFormVisible">
            <div style="height:50px;background:rgba(91,44,44,1);">
                <span style="line-height:50px;color:#ffffff;padding-left:30px;font-size:16px">预约信息</span>
            </div>
            <div class="contentss" style="height:330px;background-color:#ffffff;">
                <div v-if="!onlePost" class="contentss">
                    <div style="width:420px">
                        <el-input
                            style="width:100%;"
                            type="textarea"
                            :rows="7"
                            placeholder="请填写信息备注"
                            resize="none"
                            v-model="textarea">
                        </el-input>
                    </div>
                    <el-button @click="postInfo(textarea)" style="margin-top:60px" type="primary" round>提交</el-button>
                </div>
                <div v-else class="contentss">
                    <img style="width:140px;height:140px" :src="successImg" alt="">
                    <p class="postSuccess" style="width:140px;margin-top:45px;text-align:center">提交成功!</p>
                </div>
            </div>
                
        </el-dialog>
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
              successImg:require('../../assets/images/success.png'),
              cancelImg:require('../../assets/images/cancel.png'),
              detailObj:{},//分馆详情
              weekList:[],//预约时间列表详情
              paramsDate:'',//提交的   预约时间
              paramsStage:'',//提交的   预约上下午
              dialogFormVisible:false,
              onlePost:false,//是否已经提交
              name:'',
              textarea:"",
          }
        },
        created(){
            this.getDetail();
        },
        methods:{
            // 获取详情
            getDetail(){
                // var params = new URLSearchParams();
                // params.append('id',this.$route.query.id)
                this.axios.get(url.orderguanDetail,{
                    params:{
                        id:this.$route.query.id
                    }
                })
                .then(res=>{
                    console.log(res)
                    if(res.data.code==200){
                        this.detailObj = res.data.data;
                        this.weekList =  res.data.data.week;
                    }
                })
                .catch(error=>{
                    this.$message.error()
                    
                    console.log(error.response.status)
                })
            },
            wantYuyue(time,istime,item){
                if(istime){
                    this.onlePost = false;
                    this.dialogFormVisible = true;
                    this.paramsDate = item.date;
                    this.paramsStage = time;
                }else{
                    this.$message.error('该时间段不能预约')
                }
            },
            postInfo(info){
                if(this.$store.state.user.token){
                    var params = new URLSearchParams();
                    params.append('id',this.$route.query.id);
                    params.append('token',this.$store.state.user.token);
                    params.append('date',this.paramsDate);
                    params.append('stage',this.paramsStage);
                    params.append('remark',info);
                    this.axios.post(url.orderguanPost,params)
                    .then(res=>{
                        console.log(res)
                        if(res.data.code==200){
                            this.onlePost = true;
                            this.getDetail();
                        }else{
                            this.$message.error(res.data.msg)
                        }
                    })
                    .catch(err=>{
                        console.log(err)
                    })
                    
                }else{
                    this.$message.error('你还未登录，请登录后重试')
                }
            }
        },
    }
</script>

<style scoped>
.names{
    height:20px;
    font-size:20px;
    font-family:MicrosoftYaHei;
    font-weight:400;
    color:rgba(51,51,51,1);
    line-height:32px;
}
.guan{
    height:14px;
    font-size:14px;
    font-family:MicrosoftYaHei;
    font-weight:400;
    color:rgba(102,102,102,1);
    line-height:32px;
}
.titles{
    font-size:20px;
    font-family:MicrosoftYaHei;
    font-weight:400;
    color:rgba(51,51,51,1);
    line-height:32px;
    text-align: center;
    margin-bottom: 10px;
}
.psamll{
    font-size:14px;
    font-family:MicrosoftYaHei;
    font-weight:400;
    color:rgba(102,102,102,1);
    line-height:16px;
    text-align: center;
    margin-bottom: 20px;
}
.oneDay>div{
    height: 50px;
    width: 115px;
}
.allBiao>div{
    border: 1px solid #FDBDBD;
    border-left: none;
    margin-bottom: 30px;
}
.allBiao>div:first-child{
    border-left: 1px solid #FDBDBD;
}
.week{
    font-size:14px;
    font-family:MicrosoftYaHei;
    font-weight:400;
    color:rgba(51,51,51,1);
    line-height:24px;
}
.weekTime{
    font-size:12px;
    font-family:MicrosoftYaHei;
    font-weight:400;
    color:rgba(102,102,102,1);
    line-height:20px;
}
.wenzi{
    font-size:14px;
    font-family:MicrosoftYaHei;
    font-weight:400;
    color:rgba(51,51,51,1);
    line-height:32px;
}
.onwenzi{
    color: #ff0000 !important;
}
.circleB{
    width:14px;
    height:14px;
    background:rgba(51,51,51,1);
    border-radius:7px;
    margin-right: 20px;
}
.circleR{
    width:14px;
    height:14px;
    background:rgba(255,0,0,1);
    border-radius:7px;
    margin-right: 20px;
}
.yuyues{
    font-size:14px;
    font-family:MicrosoftYaHei;
    font-weight:400;
    color:rgba(51,51,51,1);
    line-height:28px;
}
.yuyuess{
    font-size:14px;
    font-family:MicrosoftYaHei;
    font-weight:400;
    color:rgba(255,0,0,1);
    line-height:28px;
}
.postSuccess{
    font-size:24px;
    font-family:MicrosoftYaHei;
    font-weight:400;
    color:rgba(51,51,51,1);
    line-height:32px;
}
.siteDetails{
    margin-top: 23px;
    font-size:14px;
    font-family:MicrosoftYaHei;
    font-weight:400;
    color:rgba(51,51,51,1);
    line-height:32px;
}
.siteDetails span{
    display:inline;
}
.conts::before{
    content:'';
    position: absolute;
    left: 0;
    top:0;
    width:115px;
    height:25px;
    box-sizing:border-box;
    border-bottom:1px solid #333333;
    transform-origin:bottom center;
    transform:rotateZ(20deg) scale(1);
}
</style>