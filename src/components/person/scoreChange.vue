<template>
    <div v-cloak>
         <!-- 顶部logo -->
        <!-- <hearderDom></hearderDom> -->
        <div class="allContent">
            <div style="width:80%;margin:0 auto;">
                <!-- 物品列表 -->
                <div style="margin-bottom:30px">拥有积分：{{havescore}} / 已消耗积分：{{useScore}}</div>
                <div v-if="list" class="personChoose">
                    <div v-for="(item,index) in list" :key="index" >
                        <div class="contentss">
                            <div class="contentss" style="width:100%;height:206px;overflow:hidden">
                                <img style='width:80%;height:70%' :src="imgurl + item.img" alt="">
                            </div>
                            <span class="names">{{item.name}}</span>
                            <span style="font-size:14px">
                                <span style="color:#ff0000">{{item.score}}</span>积分
                            </span>
                            <span class="guanzis">库存：{{item.residue_number}}</span>
                            <el-button  @click="goDetail(item.id,item.residue_number)" round style="width:60%;margin:25px 0;background-color:red;border-color:red;color:#ffffff">点击兑换</el-button>
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
        <el-dialog width='640px' :visible.sync="dialogFormVisible">
            <div style="height:50px;background:rgba(91,44,44,1);">
                <span style="line-height:50px;color:#ffffff;padding-left:30px;font-size:16px">兑换信息</span>
            </div>
            <div class="contentss" style="height:450px;background-color:#ffffff;">
                <div style="margin:20px 0">
                    <p class="smallp">请到昆明市兴呈路4678号领取兑换!</p>
                </div>
                <div>
                    <div class="contentsStep" style="margin-top:30px">
                        <div>库存数量</div>
                        <div>
                            <span>{{kuncunNumber}}</span>
                        </div>
                    </div>
                    <div class="contentsStep" style="margin-top:30px">
                        <div>兑换数量</div>
                        <div>
                            <el-input-number v-model="num1" :min="0" :max="kuncunNumber"  label=""></el-input-number>
                        </div>
                    </div>
                    <div class="contents" style="width:420px">
                        <el-button @click="startYuyue" :disabled="kuncunNumber==0?true:false" style="margin-top:20px" type="primary" round>提交</el-button>
                    </div>
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
import noresouce from '../compont/noresouce.vue'
    export default {
        components:{
            hearderDom,
            footersDom,
            noresouce
        },
        data () {
          return {
            imgurl:'',
            list:[],
            havescore:0,
            useScore:0,
            page:1,
            allPage:1,
            dialogFormVisible:false,
            num1:1,
            kuncunNumber:0,
            onid:'',//当前的id
          }
        },
        created(){
            
            this.imgurl = url.imgUrl;
            this.getList();
        },
        methods:{   
            getList(){
                this.axios.get(url.perList,{
                    params:{
                        token:this.$store.state.user.token,
                        page:this.page
                    }
                })
                .then(res=>{
                    console.log(res)
                    if(res.data.code==200){
                        this.list = res.data.data.score;
                        this.havescore = res.data.data.dang;
                        this.useScore = res.data.data.expend;
                        this.allPage = res.data.data.total;
                    }else{
                        this.$message.error(res.data.msg)
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
            goDetail(id,number){
                this.kuncunNumber = number;
                this.onid = id;
                this.dialogFormVisible = true;
            },
            startYuyue(){
                var params = new URLSearchParams();
                params.append('token',this.$store.state.user.token);
                params.append('id',this.onid);
                params.append('number',this.num1);
                this.axios.post(url.perExchange,params)
                .then(res=>{
                    console.log(res)
                    if(res.data.code==200){
                        this.getList();
                        this.dialogFormVisible = false;
                        this.num1 = 1;
                        this.$message.success(res.data.msg)
                    }else{
                        this.$message.error(res.data.msg)
                    }
                })
                .catch(err=>{
                    console.log(err)
                })
            }
        },
    }
</script>

<style scoped>
.allContent{
    background-color: #f5f5f5;
    padding-top: 80px;
}

.personChoose>div{
    display: inline-block;
    width: 20%;
    margin-left: 6.5%;
    margin-bottom: 60px;
    background-color: #fff;
}
.personChoose>div:nth-child(4n+1){
    margin-left: 0;
}
.names{
    font-size:16px;
    font-family:MicrosoftYaHei;
    font-weight:400;
    color:rgba(51,51,51,1);
    line-height: 32px;
}
.guanzis{
    height:14px;
    font-size:14px;
    font-family:MicrosoftYaHei;
    font-weight:400;
    color:rgba(102,102,102,1);
    margin-top: 13px;
}
.smallp{
    font-size:14px;
    font-family:MicrosoftYaHei;
    font-weight:400;
    color:rgba(51,51,51,1);
    line-height:28px;
}
</style>