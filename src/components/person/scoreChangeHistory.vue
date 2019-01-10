<template>
    <div v-cloak>
         <!-- 顶部logo -->
        <!-- <hearderDom></hearderDom> -->
        <div class="allContent">
            <div style="width:80%;margin:0 auto;">
                <!-- 物品列表 -->
                <div v-if="list" class="personChoose">
                    <div v-for="(item,index) in list" :key="index" >
                        <div class="contentss">
                            <div class="contentss" style="width:100%;height:206px;overflow:hidden">
                                <img style='width:80%;height:70%' :src="imgurl + item.img" alt="">
                            </div>
                            <div class="contentssL minfo">
                                <p>名称：{{item.name}}</p>
                                <p>消耗积分：{{item.need_score}}</p>
                                <p>兑换数量：{{item.exchange_num}}</p>
                                <p>兑换时间：{{item.create_time}}</p>
                            </div>
                        </div>
                    </div>
                    <p class="contents mypages">
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
            imgurl:'',
            list:[],
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
                this.axios.get(url.perExchangeHistory,{
                    params:{
                        token:this.$store.state.user.token,
                        page:this.page
                    }
                })
                .then(res=>{
                    console.log(res)
                    if(res.data.code==200){
                        this.list = res.data.data.res;
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
        },
    }
</script>

<style scoped>
.allContent{
    background-color: #f5f5f5;
    padding-top: 80px;
}
.personChoose{
    padding-bottom: 20px;
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
.minfo{
    padding-bottom: 10px;
}
.minfo>p{
    font-size:14px;
    font-family:MicrosoftYaHei;
    font-weight:400;
    color:rgba(51,51,51,1);
    line-height: 20px;
}
</style>