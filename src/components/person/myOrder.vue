<template>
    <div v-cloak>
         <!-- 顶部logo -->
        <!-- <hearderDom></hearderDom> -->
        <div class="allContent">
            <div style="width:80%;margin:0 auto;">
                <div class="allDiv" style="padding:45px 10%;" >
                    <div style="background-color:#ffffff;padding:50px 40px 0 40px" >
                        <p style="margin-bottom:40px">师资预约</p>
                        <div v-if="list1.length" class="allList">
                             <div v-for="(item,index) in list1" :key="index" class="contentssL">
                                <div class="contentss">
                                    <img style='width:244px;height:240px' :src="imgUrl+item.head_img" alt="">
                                </div>
                                <p class="mystatus" v-if="item.status=='审核中'">{{item.status}}</p>
                                <p class="mystatusR" v-else-if="item.status=='已通过'">{{item.status}}</p>
                                <p class="mystatusG" v-else>{{item.status}}</p>
                                <p class="guanzis">姓名：{{item.name}}</p>
                                <p class="guanzis">分馆：{{item.title}}</p>
                                <p class="guanzis">预约：{{item.make_time}}({{item.stage}})</p>
                                <el-button v-if="!item.state" style="width:120px;margin-top:25px;color:#999999;border-color:#d9d9d9;background-color:#d9d9d9" round>{{item.status}}</el-button>
                                <el-button @click="offOrder(item.id)" v-else style="width:120px;margin-top:25px;color:#999999;border-color:#d9d9d9;background-color:#d9d9d9" round>取消预约</el-button>
                            </div>
                        </div>
                        <div v-else>
                            <noresouce></noresouce>
                        </div>
                    </div>
                    <div style="background-color:#ffffff;padding:50px 40px 0 40px" >
                        <p style="margin-bottom:40px">场馆预约</p>
                        <div v-if="list2.length" class="allLists">
                             <div v-for="(item,index) in list2" :key="index" class="contentssL">
                                <div class="contentss">
                                    <img style='width:370px;height:240px' :src="imgUrl+item.img" alt="">
                                </div>
                                <p class="mystatus" v-if="item.status=='审核中'">{{item.status}}</p>
                                <p class="mystatusR" v-else-if="item.status=='已通过'">{{item.status}}</p>
                                <p class="mystatusG" v-else>{{item.status}}</p>
                                <p class="guanzis">场馆：{{item.name}}</p>
                                <p class="guanzis">分馆：{{item.title}}</p>
                                <p class="guanzis">预约：{{item.make_time}}({{item.stage}})</p>
                                <el-button v-if="!item.state" style="width:120px;margin-top:25px;color:#999999;border-color:#d9d9d9;background-color:#d9d9d9" round>{{item.status}}</el-button>
                                <el-button @click="offOrder(item.id)" v-else style="width:120px;margin-top:25px;color:#999999;border-color:#d9d9d9;background-color:#d9d9d9" round>取消预约</el-button>
                            </div>
                        </div>
                        <div v-else>
                            <noresouce></noresouce>
                        </div>
                    </div>
                    <div style="background-color:#ffffff;padding:50px 40px 0 40px" >
                        <p style="margin-bottom:40px">设备预约</p>
                        <div v-if="list3.length" class="allList">
                             <div v-for="(item,index) in list3" :key="index" class="contentssL">
                                <div class="contentss">
                                    <img style='width:244px;height:240px' :src="imgUrl+item.img" alt="">
                                </div>
                                <p class="mystatus" v-if="item.status=='审核中'">{{item.status}}</p>
                                <p class="mystatusR" v-else-if="item.status=='已通过'">{{item.status}}</p>
                                <p class="mystatusG" v-else>{{item.status}}</p>
                                <p class="guanzis">数量：{{item.number}}</p>
                                <p class="guanzis">设备：{{item.name}}</p>
                                <p class="guanzis">分馆：{{item.title}}</p>
                                <p class="guanzis">预约：{{item.make_time}}({{item.stage}})</p>
                                <el-button v-if="!item.state" style="width:120px;margin-top:25px;color:#999999;border-color:#d9d9d9;background-color:#d9d9d9" round>{{item.status}}</el-button>
                                <el-button @click="offOrder(item.id)" v-else style="width:120px;margin-top:25px;color:#999999;border-color:#d9d9d9;background-color:#d9d9d9" round>取消预约</el-button>
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
              list3:[],
          }
        },
        created(){
            this.imgUrl = url.imgUrl;
            this.getPage();
        },
        methods:{
            getPage(){
                this.axios.get(url.myOrder,{
                    params:{
                        token:this.$store.state.user.token
                    }
                })
                .then(res=>{
                    console.log(res)
                    if(res.data.code==200){
                        this.list1 = res.data.data.teacher;
                        this.list2 = res.data.data.classroom;
                        this.list3 = res.data.data.equipment;
                    }else{
                        this.$message.error(res.data.msg)
                    }
                })
                .catch(err=>{
                    console.log(err)
                })
            },
            offOrder(id){
                this.$confirm('是否确定取消预约?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    var params = new URLSearchParams();
                    params.append('token',this.$store.state.user.token)
                    params.append('id',id)
                    this.axios.post(url.offmyOrder,params)
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
.allList>div{
    display: inline-block;
    width: 30%;
    margin-right:5% ;
    margin-bottom: 40px;
}
.allList>div:nth-child(3n){
    
    margin-right:0 ;
}
.allLists>div{
    display: inline-block;
    width: 45%;
    margin-right:5% ;
    margin-bottom: 40px;
}
.allLists>div:nth-child(2n){
    margin-right:0 ;
}
.allDiv>div{
    margin-bottom: 60px;
}
.mystatus{
    font-size:14px;
    font-family:SourceHanSansCN-Regular;
    font-weight:400;
    color:#25B2F6;
    margin-top: 13px;
}
.mystatusG{
    font-size:14px;
    font-family:SourceHanSansCN-Regular;
    font-weight:400;
    color:#999999;
    margin-top: 13px;
}
.mystatusR{
    font-size:14px;
    font-family:SourceHanSansCN-Regular;
    font-weight:400;
    color:red;
    margin-top: 13px;
}
</style>