<template>
    <div v-cloak>
         <!-- 顶部logo -->
        <!-- <hearderDom></hearderDom> -->
        <div class="allContent">
            <div style="width:80%;margin:0 auto;">
                <div v-if="list.length" class="allDiv" style="padding:45px 10%;" > 
                    <!-- <div class="contentsR">
                        <el-button>全部删除</el-button>
                    </div> -->
                    <div>
                        <div @click="details(item.id)" v-for="(item,index) in list" :key="index" class="myinfors contentssL">
                            <p class="message">【{{item.type}}】{{item.intro}}</p>
                            <span class="timess">{{item.create_time}}</span>
                        </div>
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
                list:[],
                page:1,
                allPage:1,
          }
        },
        created(){
            this.getInfo();
        },
        methods:{
            getInfo(){
                this.axios.get(url.systemlist,{
                    params:{
                        token:this.$store.state.user.token,
                        page:this.page
                    }
                })
                .then(res=>{
                    console.log(res)
                    if(res.data.code==200){
                        this.allPage = res.data.data.total;
                        this.list = res.data.data.sys;
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
                this.getInfo();
            },
            details(id){
                this.$confirm('是否删除该记录?',{
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                }).then(() => {
                    var params = new URLSearchParams();
                    params.append('system_id',id);
                    this.axios.post(url.sysdetail,params)
                    .then(res=>{
                        if(res.data.code==200){
                            this.$message.success(res.data.msg)
                            this.getInfo();
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
        },
    }
</script>

<style scoped>
.allContent{
    background-color: #ffffff;
    padding-top: 40px;
}
.allDiv>div{
    margin-bottom: 60px;
    background-color: #fff;
}
.headurl{
    width: 60px;
    height: 60px;
    border-radius:50%;
    background-color: red; 
}
.myinfors{
    margin: 30px 0;
    cursor: pointer;
}
.message{
    font-size:16px;
    font-family:MicrosoftYaHei;
    font-weight:400;
    color:rgba(51,51,51,1);
}
.timess{
    font-size:14px;
    font-family:MicrosoftYaHei;
    font-weight:400;
    color:rgba(153,153,153,1);
    margin-top: 10px;
}
</style>