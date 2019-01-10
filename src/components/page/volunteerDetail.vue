<template>
    <div v-cloak>
         <!-- 顶部logo -->
        <!-- <hearderDom></hearderDom> -->
        <div class="allContents">
            <div style="width:80%;margin:0 auto">
                <div style="padding:45px 10% 0 10%">
                    <p>
                        <span class="names">{{obj.title}}</span>
                    </p>
                    <p style="padding-bottom:45px;border-bottom:1px solid #eeeeee">
                         <span class="guan">发布时间：{{obj.create_time | getAllDataTime}}</span>
                    </p>
                    <!-- <p class="personDetail">
                        <span>相亲相爱</span>
                    </p> -->
                </div>
            </div>
            <div style="background-color:#f5f5f5;min-height:50vh">
                <div style="width:80%;margin:0 auto">
                    <div class="wenzi" style="padding:45px 10%">
                        <div>
                            <p>活动详情</p>
                            <p v-html="obj.content"></p>
                        </div>
                        <div style="margin-top:20px">
                            <p>参与详情</p>
                            <p>活动时间：{{obj.start_time}}至{{obj.end_time}}</p>
                            <p>报名时间：{{obj.apply_start_time}}至{{obj.apply_end_time}}</p>
                            <p>活动地点：{{obj.address}}</p>
                            <p>活动名额：{{obj.apply_number}}/{{obj.number}}</p>
                            <p>报名方式：线上报名</p>
                            <p>活动状态：{{obj.status}}</p>
                        </div>
                        <div class="contents" style="padding:70px 0">
                            <div  @click="wantYuyue" v-if="!$store.state.user.token&&obj.status=='报名中'||obj.apply==5&&obj.status=='报名中'" class="anniu contentss" >
                                <span>报名</span>
                            </div>
                            <div  @click="cancelYuyue"  v-else-if="obj.apply==3&&obj.status=='报名中'" class="onlyAnniu contentss" >
                                <span>取消报名</span>
                            </div>
                            <div v-else-if="obj.apply==1&&obj.status=='报名中'" class="onlyAnniu contentss" >
                                <span>已通过</span>
                            </div>
                            <div v-else-if="obj.apply==2&&obj.status=='报名中'" class="onlyAnniu contentss" >
                                <span>已取消</span>
                            </div>
                            <div v-else-if="obj.apply==4&&obj.status=='报名中'" class="onlyAnniu contentss" >
                                <span>已拒绝</span>
                            </div>
                            <div v-else-if="obj.status!='报名中'" class="onlyAnniu contentss" >
                                <span>{{obj.status}}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <el-dialog width='640px' :visible.sync="dialogFormVisible">
                <div style="height:50px;background:rgba(91,44,44,1);">
                    <span style="line-height:50px;color:#ffffff;padding-left:30px;font-size:16px">志愿者活动</span>
                </div>
                <div class="contentss" style="height:330px;background-color:#ffffff;">
                    <div class="contentss">
                        <img style="width:140px;height:140px" :src="successImg" alt="">
                        <p class="postSuccess" style="width:140px;margin-top:45px;text-align:center">报名成功!</p>
                    </div>
                </div>
                    
            </el-dialog>
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
              clickZan:require('../../assets/images/clickZan.png'),
              successImg:require('../../assets/images/success.png'),
              cancelImg:require('../../assets/images/cancel.png'),
              dialogFormVisible:false,
              isvolun:false,//是否是志愿者
              obj:{},
          }
        },
        created(){
            this.getDetail();
        },
        methods:{
            getDetail(){
                this.axios.get(url.volunDetail,{
                    params:{
                        id:this.$route.query.id,
                        token:this.$store.state.user.token||''
                    }
                })
                .then(res=>{
                    console.log(res)
                    if(res.data.code==200){
                        this.obj = res.data.data;
                        this.isvolun = res.data.data.is_volun;
                    }
                })
                .catch(err=>{
                    console.log(err)
                })
            },
            // 报名
            wantYuyue(){
                // 判断是否登录
                if(!localStorage.token){
                    this.$message('您还未登录，请那个点击右上登录');
                }else{
                    this.$confirm('是否确认报名?', '提示', {
                        confirmButtonText: '确定',
                        cancelButtonText: '取消',
                        type: 'warning'
                    }).then(() => {
                        // 确认报名
                        // 判断是否是志愿者
                        if(this.isvolun){
                            this.report();
                        }else{
                            this.becomeVolun();
                        }
                        
                    }).catch(() => {
                        this.$message({
                            type: 'info',
                            message: '已取消删除'
                        });          
                    });
                }
            },
            report(){
                var  param = new URLSearchParams();
                param.append('id',this.$route.query.id)
                param.append('token',this.$store.state.user.token)
                this.axios.post(url.volunReport,param)
                .then(res=>{
                    console.log(res)
                    if(res.data.code==200){
                        this.getDetail();
                        this.dialogFormVisible = true;
                    }else{
                        this.$message.error(res.data.msg)
                    }
                })
                .catch(err=>{
                    console.log(err)
                })
            },
            // 变成志愿者
            becomeVolun(){
                this.$confirm('你还不是志愿者，是否成为志愿者?', '提示', {
                        confirmButtonText: '确定',
                        cancelButtonText: '取消',
                        type: 'warning'
                    }).then(() => {
                        var  param = new URLSearchParams();
                        param.append('token',this.$store.state.user.token)
                        this.axios.post(url.volunvolun,param)
                        .then(res=>{
                            console.log(res)
                            if(res.data.code==200){
                                this.isvolun = true;
                                this.$message({
                                    message: '已成为志愿者',
                                    type: 'success'
                                });
                                this.getDetail();
                            }else{
                                this.$message.error(res.data.msg)
                            }
                        })
                        .catch(err=>{
                            console.log(err)
                        })
                    }).catch(() => {
                        this.$message({
                            type: 'info',
                            message: '已取消删除'
                        });          
                    });
                
            },
            // 取消报名
            cancelYuyue(){
                // 判断是否登录
                if(!localStorage.token){
                    this.$message('您还未登录，请那个点击右上登录');
                }else{
                    this.$confirm('是否取消报名?', '提示', {
                        confirmButtonText: '确定',
                        cancelButtonText: '取消',
                        type: 'warning'
                    }).then(() => {
                        // 确认报名
                        
                        this.cancelreport();
                    }).catch(() => {
                        this.$message({
                            type: 'info',
                            message: '已取消删除'
                        });          
                    });
                }
                
            },
            cancelreport(){
                var  param = new URLSearchParams();
                param.append('id',this.$route.query.id)
                param.append('token',this.$store.state.user.token)
                this.axios.post(url.volunCancel,param)
                .then(res=>{
                    console.log(res)
                    if(res.data.code==200){
                        this.getDetail();
                        this.$message({
                            message: '已成功取消',
                            type: 'success'
                        });
                    }else{
                        this.$message.error(res.data.msg)
                    }
                })
                .catch(err=>{
                    console.log(err)
                })
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
        }
    }
</script>

<style scoped>
.names{
    font-size:20px;
    font-family:MicrosoftYaHei;
    font-weight:400;
    color:rgba(51,51,51,1);
    line-height:28px;
}
.guan{
    font-size:14px;
    font-family:MicrosoftYaHei;
    font-weight:400;
    color:rgba(102,102,102,1);
    line-height:28px;
}
.personDetail{
    margin-top: 23px;
    font-size:14px;
    font-family:MicrosoftYaHei;
    font-weight:400;
    color:rgba(51,51,51,1);
    line-height:28px;
}
.wenzi{
    font-size:16px;
    font-family:MicrosoftYaHei;
    font-weight:400;
    color:rgba(51,51,51,1);
    line-height:32px;
}
.anniu{
    background:#25B2F6;
    border-radius:22px;
    padding: 4px 25px ;
    color: #ffffff;
    cursor: pointer;
}
.onlyAnniu{
    background:rgba(153,153,153,1);
    border-radius:22px;
    padding: 4px 33px ;
    color: #ffffff;
    cursor: pointer;
}
</style>