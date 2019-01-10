<template>
    <div v-cloak>
         <!-- 顶部logo -->
        <!-- <hearderDom></hearderDom> -->
        <div v-if="haveTeam" class="top">
            <div style="width:80%;margin:0 auto;">
                <div style="padding:0 10%;" > 
                    <el-row>
                        <el-col :span="18">
                            <div class="grid-content" style="height:205px">
                                <div class="topleft contentssL">
                                    <p>{{objs.name}}</p>
                                    <p>队长：{{objs.username}}</p>
                                    <p>建队时间：{{objs.create_time}}</p>
                                    <p>团队人数：{{objs.number}}</p>
                                    <p>团队口号：{{objs.slogan}}</p>
                                </div>
                            </div>
                        </el-col>
                        <el-col :span="6">
                            <div class="grid-content" style="height:205px">
                                <div v-if="objs.commander" class="contentsBottom" style="padding-bottom:30px">
                                    <el-button @click="$router.push({path:'/teamManger',query:{name:objs.name,sloage:objs.slogan}})" type="primary" round>团队管理</el-button>
                                    <el-button @click="jiesanTeam" style="background:rgba(170,170,170,1);color:#FFFFFF;border-color:#AAAAAA" round>解散团队</el-button>
                                </div>
                                <div v-else class="contentsBottom" style="padding-bottom:30px">
                                    <el-button @click="$router.push('/seePeople')" type="primary" round>团队成员</el-button>
                                </div>
                            </div>
                        </el-col>
                    </el-row>
                </div>
            </div>
        </div>
        <div class="allContent">
            <div style="width:80%;margin:0 auto;">
                <div class="allLists" style="padding:45px 10%;" > 
                    <div @click="goDetail(item.id)" class="contentssL" v-for="(item,index) in list" :key="index" >
                        <img style='width:244px;height:240px' :src="imgUrl+item.img" alt="">
                        <p class="guanzi">{{item.title}}</p>
                        <p class="guanzis">活动名额：{{item.apply_number}}/{{item.number}}</p>
                        <p class="guanzis">活动时间：{{item.time}}</p>
                        <el-button @click="cancelAct(item.id)" v-if="objs.commander&&item.status=='取消活动'" style="width:120px;margin-top:15px;color:#999999;border-color:#d9d9d9;background-color:#d9d9d9" round>取消预约</el-button>
                    </div>
                </div>
            </div>
        </div>
        <el-dialog id="myAdd" width="220px" :visible.sync="dialogFormVisible" :close-on-click-modal='false' :show-close='false'>
            <div @click="$router.push('/createTeam')" class="contentss" style="height:220px;border-radius:50%;background-color:#ffffff;cursor:pointer">
                <img style="width:100%;height:220px" :src="groups" alt="">
            </div>
            <div class="contents" style="margin-top:80px">
                <el-button @click="cancelCreate" type="info" round>取消</el-button>
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
            footersDom,
        },
        data () {
          return {
              imgUrl:'',
              objs:{},
              clickZan:require('../../assets/images/clickZan.png'),
              groups:require('../../assets/images/creatGroup.png'),
              haveTeam:true,//是否有团队
              dialogFormVisible:false,
              page:1,
              list:[],
          }
        },
        created(){
            this.imgUrl = url.imgUrl;
            this.getTeamInfo();
        },
        methods:{
            getTeamInfo(){
                this.axios.get(url.teamInfos,{
                    params:{
                        token:this.$store.state.user.token
                    }
                })
                .then(res=>{
                    console.log(res)
                    if(res.data.code==200){
                        this.objs = res.data.data;
                        this.getActList();
                    }else if(res.data.code==202){
                        this.dialogFormVisible = true
                    }else{
                        this.$message.error(res.data.msg)
                    }
                })
                .catch(err=>{
                    console.log(err)
                })
            },
            getActList(){
                this.axios.get(url.teamActList,{
                    params:{
                        token:this.$store.state.user.token
                    }
                })
                .then(res=>{
                    console.log(res)
                    if(res.data.code==200){
                        this.list = res.data.data;
                    }else if(res.data.code==202){
                        this.list = [];
                    }
                })
                .catch(err=>{
                    console.log(err)
                })
            },
            cancelCreate(){
                this.dialogFormVisible=false;
                this.$router.replace('/')
            },
            //解散团队
            jiesanTeam(){
                this.$confirm('是否确认解散团队?', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                }).then(() => {
                    var params = new URLSearchParams();
                    params.append('token',this.$store.state.user.token)
                    params.append('group_list_id',0)
                    this.axios.post(url.jiesanTeam,params)
                    .then(res=>{
                        console.log(res)
                        if(res.data.code==200){
                            this.$router.replace('/')
                        }else{
                            this.$message.error(res.data.msg)
                        }
                    })
                    .catch(err=>{
                        console.log(err)
                    })
                }).catch(() => {
                      
                });
            },
            // 取消活动
            cancelAct(id){
                this.$confirm('是否确认取消活动?', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                }).then(() => {
                    var params = new URLSearchParams();
                    params.append('id',id)
                    params.append('token',this.$store.state.user.token)
                    this.axios.post(url.cancelTeam,params)
                    .then(res=>{
                        if(res.data.code==200){
                            this.$message.success(res.data.msg);
                            this.getActList();
                        }else{
                            this.$message.error(res.data.msg)
                        }
                    })
                }).catch(() => {
                      
                });
            },
            goDetail(id){
                this.$router.push({
                    path:'/cultureActDetail',
                    query:{
                        id:id
                    }
                })
            }
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

</style>