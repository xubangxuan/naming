<template>
    <div v-cloak>
         <!-- 顶部logo -->
        <!-- <hearderDom></hearderDom> -->
        <div class="allContents">
            
            <div style="background-color:#f5f5f5">
                <div style="width:80%;margin:0 auto">
                    <div style="padding:45px 10%">
                        <el-row :gutter="20">
                            <el-col :span="6">
                                <div class="grid-content">
                                    <div style="background-color:#ffffff">
                                        <div @click="chose(index,item.id)" :class="onindex==index?'onstatus':'status'" v-for="(item,index) in list" :key="index">{{item.name}}</div>
                                    </div> 
                                </div>
                            </el-col>
                            <el-col :span="18">
                                <div class="grid-content">
                                    <div class="con" style="background-color:#ffffff">
                                        <p style="text-align:center">{{obj.name}}</p>
                                        <p v-html="obj.intro"></p>
                                        <p>
                                            开关时间：{{obj.dispark_time}}
                                        </p>
                                        <p>
                                            联系电话：{{obj.tel}}
                                        </p>
                                        <!-- <div style="margin-top:50px">
                                            <div id="allmap" style="height:500px">

                                            </div>
                                        </div> -->
                                    </div>
                                    
                                </div>
                            </el-col>
                        </el-row>
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
            footersDom
        },
        data () {
          return {
              onindex:0,
              obj:[],
              list:[],
          }
        },
        created(){
            this.getAllname();
            this.getJieShao();
        },
        mounted(){

        },
        methods:{
            chose(index,id){
                this.onindex = index;
                this.getJieShao(id);
            },
            getAllname(){
                this.axios.get(url.branch)
                .then(res=>{
                    // console.log(res)
                    if(res.data.code==200){
                        this.list = res.data.data;
                        this.getJieShao(res.data.data[0].id);
                    }
                })
                .catch(err=>{
                    console.log(err)
                })
            },
            getJieShao(id){
                var param = new URLSearchParams();
                param.append('id',id)
                this.axios.post(url.getProalike,param)
                .then(res=>{
                    // console.log(res)
                    if(res.data.code==200){
                        this.obj = res.data.data;
                    }
                })
                .catch(err=>{
                    console.log(err)
                })
            },
        },
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
    padding: 43px 30px;
    min-height: 660px;
    font-size:14px;
    font-family:MicrosoftYaHei;
    font-weight:400;
    color:rgba(51,51,51,1);
    line-height:28px;
}
</style>