<template>
    <div v-cloak>
         <!-- 顶部logo -->
        <!-- <hearderDom></hearderDom> -->
        <div class="allContent">
            <div style="width:80%;margin:0 auto;padding:40px 0;">
                <div style="padding:45px 10%;background-color:#ffffff;" > 
                    <div class="contentss myteams">
                        <div class="contentss titless">
                            团队信息
                            <span class="lines"></span>
                        </div>
                        <div class="contents smalls" style="width:100%;margin-bottom:30px; margin-top:40px;">
                            团队名称
                            <el-input style="width:600px;margin-left:16px" v-model="teamName" placeholder="请输入内容"></el-input>
                        </div>
                        <div class="contents smalls" style="width:100%;margin-bottom:60px">
                            团队口号
                            <el-input style="width:600px;margin-left:16px" v-model="teamSloage" placeholder="请输入内容"></el-input>
                        </div>
                        <el-button @click="createTeams" type="primary" round>创建团队</el-button>
                    </div>
                </div>
                <!-- <div style="padding:45px 10%;background-color:#ffffff;margin-top:40px" > 
                    <div class="contentss">
                        <div class="contentss titless">
                            团队成员
                            <span class="lines"></span>
                        </div>
                        <div class="smalls" style="width:100%;margin-bottom:30px; ">
                            <div v-for='(iten,index) in list' :key="index" style="margin:30px 0">
                                <el-row>
                                    <el-col :span="12">
                                        <div class="grid-content">
                                            <div class="contents names" style="height:25px">
                                                王五（123456789012）
                                            </div>
                                        </div>
                                    </el-col>
                                    <el-col :span="12">
                                        <div class="grid-content">
                                            <div class="contents"  >
                                                <i style="font-size:25px;line-height:25px;color:#ff0000;cursor:pointer" class="el-icon-delete"></i>
                                            </div>
                                        </div>
                                    </el-col>
                                </el-row>
                            </div>
                        </div>
                        <el-button @click="add" type="primary" round>添加队员</el-button>
                    </div>
                </div>
                <el-dialog id="addParert" width='640px' :visible.sync="dialogFormVisible">
                    <div style="height:50px;background:rgba(91,44,44,1);">
                        <span style="line-height:50px;color:#ffffff;padding-left:30px;font-size:16px">预约信息</span>
                    </div>
                    <div class="contentss" style="height:280px;background-color:#ffffff;">
                        <div class="contentss">
                            <div style="width:420px">
                                <el-input
                                    placeholder="请输入账号"
                                    v-model="val">
                                </el-input>
                            </div>
                            <el-button @click="postInfo(textarea)" style="margin-top:60px" type="primary" round>提交</el-button>
                        </div>
                    </div>
                        
                </el-dialog> -->
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
    export default {
        components:{
            hearderDom,
            footersDom,
        },
        data () {
          return {
              clickZan:require('../../assets/images/clickZan.png'),
              headerUrl:require('../../assets/images/ewm.png'),
              isLeader:false,
              list:0,
              input:"",
              val:"",
              teamName:'',
              teamSloage:'',
              dialogFormVisible:false,
          }
        },
        created(){
         

        },
        methods:{
            // add(){
            //     this.dialogFormVisible = true
            // },
            createTeams(){
                if(this.teamName==''||this.teamSloage==''){
                    this.$message.error('请填写名称和口号')
                }else{
                    var params = new URLSearchParams();
                    params.append('token',this.$store.state.user.token)
                    params.append('name',this.teamName)
                    params.append('slogan',this.teamSloage)
                    this.axios.post(url.createMyteam,params)
                    .then(res=>{
                        console.log(res)
                        if(res.data.code==200){
                            this.$router.replace('/myTeam')
                        }else{
                            this.$message.error(res.data.msg)
                        }
                    })
                    .catch(err=>{
                        console.log(err)
                    })
                }
            },
        },
    }
</script>

<style scoped>
.top{
     padding: 28px 0;
}
.topleft>p{
    font-size:14px;
    font-family:MicrosoftYaHei;
    font-weight:400;
    color:rgba(51,51,51,1);
    line-height:28px;
}
.topleft>p:first-child{
    font-size:20px;
    font-family:MicrosoftYaHei;
    font-weight:400;
    color:rgba(51,51,51,1);
    line-height:28px;
    margin-bottom: 25px;
}
.allContent{
    background-color: #f5f5f5;
}

.guanzis{
    font-size:14px;
    font-family:SourceHanSansCN-Regular;
    font-weight:400;
    color:rgba(51,51,51,1);
    margin-top: 13px;
}
.guanzi{
    font-size:16px;
    font-family:SourceHanSansCN-Regular;
    font-weight:400;
    color:rgba(51,51,51,1);
    margin-top: 15px;
}
.allLists>div{
    display: inline-block;
    width: 45%;
    margin-right:5% ;
    margin-bottom: 40px;
}
.allLists>div:nth-child(2n+1){
    
    margin-right:0 ;
}
.lines{
    width: 20px;
    height: 2px;
    background-color: #ff0000;
    margin-top: 10px;
}
.titless{
    font-size:20px;
    font-family:MicrosoftYaHei;
    font-weight:400;
    color:rgba(51,51,51,1);
    line-height:28px;
}
.smalls{
    font-size:14px;
    font-family:MicrosoftYaHei;
    font-weight:400;
    color:rgba(51,51,51,1);
    line-height:28px;
}
.names{
    font-size:14px;
    font-family:MicrosoftYaHei;
    font-weight:400;
    color:rgba(51,51,51,1);
    line-height:28px;
}
</style>