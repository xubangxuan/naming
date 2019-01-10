<template>
    <div v-cloak>
         <!-- 顶部logo -->
        <!-- <hearderDom></hearderDom> -->
        <div class="allContent">
            <div style="width:80%;margin:0 auto;">
                <div class="allDiv" style="padding:45px 10%;" > 
                    <div style="background-color:#ffffff;padding:50px 40px 0 40px" >
                        <p style="margin-bottom:40px">文化活动</p>
                        <div v-if="list1.length" class="allLists">
                             <div v-for="(item,index) in list1" :key="index" class="contentssL">
                                <img style='width:370px;height:240px' :src="imgUrl + item.img" alt="">
                                <p class="guanzi">{{item.title}}</p>
                                <p class="guanzis">参赛对象：{{item.objects}}</p>
                                <p class="guanzis">活动时间：{{item.time}}</p>
                                <el-button v-if="!item.state" style="width:120px;margin-top:25px;color:#999999;border-color:#d9d9d9;background-color:#d9d9d9" round>{{item.status}}</el-button>
                                <el-button @click="offOrder(item.id,item.types)" v-else style="width:120px;margin-top:25px;color:#999999;border-color:#d9d9d9;background-color:#d9d9d9" round>取消预约</el-button>
                            </div>
                        </div>
                        <div v-else>
                            <noresouce></noresouce>
                        </div>
                    </div>
                    <div style="background-color:#ffffff;padding:50px 40px 0 40px" >
                        <p style="margin-bottom:40px">文化志愿者活动</p>
                        <div v-if="list2.length" class="allLists">
                             <div v-for="(item,index) in list2" :key="index" class="contentssL">
                                <img style='width:370px;height:240px' :src="imgUrl + item.img" alt="">
                                <p class="guanzi">{{item.title}}</p>
                                <p class="guanzis">活动名额：{{item.apply_number}}/{{item.number}}</p>
                                <p class="guanzis">活动时间：{{item.time}}</p>
                                <el-button v-if="!item.state" style="width:120px;margin-top:25px;color:#999999;border-color:#d9d9d9;background-color:#d9d9d9" round>{{item.status}}</el-button>
                                <el-button @click="offOrder(item.id,item.types)" v-else style="width:120px;margin-top:25px;color:#999999;border-color:#d9d9d9;background-color:#d9d9d9" round>取消预约</el-button>
                            </div>
                        </div>
                        <div v-else>
                            <noresouce></noresouce>
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
              list1:[],
              list2:[],
          }
        },
        created(){
            this.imgUrl = url.imgUrl;
            this.getPage();
        },
        methods:{
            getPage(){
                this.axios.get(url.myAct,{
                    params:{
                        token:this.$store.state.user.token
                    }
                })
                .then(res=>{
                    console.log(res)
                    if(res.data.code==200){
                        this.list1 = res.data.data.activity;
                        this.list2 = res.data.data.volun;
                    }else{
                        this.$message.error(res.data.msg)
                    }
                })
                .catch(err=>{
                    console.log(err)
                })
            },
            offOrder(id,type){
                this.$confirm('是否确定取消报名?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    var params = new URLSearchParams();
                    params.append('token',this.$store.state.user.token)
                    params.append('types',type)
                    params.append('id',id)
                    this.axios.post(url.offmyAct,params)
                    .then(res=>{
                        console.log(res)
                        if(res.data.code==200){
                            this.$message.success(res.data.msg)
                            this.getPage();
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
.allContent{
    background-color: #f5f5f5;
    padding-top: 40px;
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
    margin-top: 26px;
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
.allDiv>div{
    margin-bottom: 60px;
}
</style>