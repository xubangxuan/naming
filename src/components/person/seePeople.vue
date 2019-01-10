<template>
    <div v-cloak>
         <!-- 顶部logo -->
        <!-- <hearderDom></hearderDom> -->
        <div class="allContent">
            <div style="width:80%;margin:0 auto;padding:40px 0;">
                <div style="padding:45px 10%;background-color:#ffffff;margin-top:40px" > 
                    <div class="contentss">
                        <div class="contentss titless">
                            团队成员
                            <span class="lines"></span>
                        </div>
                        <div class="smalls" style="width:100%;margin-bottom:30px; ">
                            <div v-for='(item,index) in objs.data' :key="index" style="margin:30px 0">
                                <el-row>
                                    <el-col :span="12">
                                        <div class="grid-content">
                                            <div class="contents names" style="height:25px">
                                                {{item.username}}（{{item.account}}）
                                            </div>
                                        </div>
                                    </el-col>
                                    <el-col :span="12">
                                        <div class="grid-content">
                                            <div class="contents"  >
                                                <img v-if="index==0" style="width:25px;height:25px;cursor:pointer" :src="rankimg" alt="">
                                                <i v-if="item.self&&index!=0" @click="tuichu(item.id)" style="font-size:25px;line-height:25px;color:#ff0000;cursor:pointer" class="el-icon-delete"></i>
                                            </div>
                                        </div>
                                    </el-col>
                                </el-row>
                            </div>
                        </div>
                    </div>
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
    export default {
        components:{
            hearderDom,
            footersDom,
        },
        data () {
          return {
              rankimg:require('../../assets/images/rank.png'),
              objs:{},
          }
        },
        created(){
            this.getPeopleList()
        },
        methods:{
            getPeopleList(){
                this.axios.get(url.getPeople,{
                    params:{
                        token:this.$store.state.user.token
                    }
                })
                .then(res=>{
                    console.log(res)
                    if(res.data.code==200){
                        
                        this.objs = res.data.data;
                    }else{
                        this.$message.error(res.data.msg)
                    }
                })
                .catch(err=>{
                    console.log(err)
                })
            },
            // 删除成员
            tuichu(id){
                this.$confirm('是否确认退出团队?', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                }).then(() => {
                    
                    var params = new URLSearchParams();
                    params.append('token',this.$store.state.user.token)
                    params.append('group_list_id',id)
                    this.axios.post(url.jiesanTeam,params)
                    .then(res=>{
                        console.log(res)
                        if(res.data.code==200){
                            this.$message.success(res.data.msg)
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