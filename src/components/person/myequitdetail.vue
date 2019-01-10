<template>
    <div v-cloak>
         <!-- 顶部logo -->
        <!-- <hearderDom></hearderDom> -->
        <div class="allContents">
            <div style="width:80%;margin:0 auto">
                <div style="padding:45px 10%;background-color: #ffffff">
                    <p>
                        <span class="names">{{detailObj.name}}</span>
                        <span class="guan">{{detailObj.bname}}</span>
                    </p>
                    <div class="siteDetails">
                        <p>
                            <span>审核状态：</span>
                            <span>
                                {{detailObj.status}}
                            </span>
                        </p>
                        <p>
                            <span>预约数量：</span>
                            <span>
                                {{detailObj.number}}
                            </span>
                        </p>
                        <p>
                            <span>提交时间：</span>
                            <span>{{detailObj.create_time}}</span>
                        </p>
                        <p>
                            <span>预约时间：</span>
                            <span>{{detailObj.make_time}}</span>
                        </p>
                        <p>
                            <span>备注信息：</span>
                            <span>{{detailObj.remark}}</span>
                        </p>
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
              detailObj:{},//分馆详情
          }
        },
        created(){
            this.getDetail();
        },
        methods:{
            // 获取详情
            getDetail(){
                var params = new URLSearchParams();
                params.append('token',this.$store.state.user.token)
                params.append('id',this.$route.query.id)
                this.axios.post(url.myfDetail,params)
                .then(res=>{
                    console.log(res)
                    if(res.data.code==200){
                        this.detailObj = res.data.data;
                    }
                })
                .catch(error=>{
                    this.$message.error()
                    
                    console.log(error.response.status)
                })
            },
        },
    }
</script>

<style scoped>
.allContents{
    background-color: #f5f5f5;
    padding-bottom: 30px;
}
.names{
    height:20px;
    font-size:20px;
    font-family:MicrosoftYaHei;
    font-weight:400;
    color:rgba(51,51,51,1);
    line-height:32px;
}
.guan{
    height:14px;
    font-size:14px;
    font-family:MicrosoftYaHei;
    font-weight:400;
    color:rgba(102,102,102,1);
    line-height:32px;
}
.siteDetails{
    margin-top: 23px;
    font-size:14px;
    font-family:MicrosoftYaHei;
    font-weight:400;
    color:rgba(51,51,51,1);
    line-height:32px;
}
.siteDetails span{
    display:inline;
}
</style>