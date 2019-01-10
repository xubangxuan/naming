<template>
    <div v-cloak>
         <!-- 顶部logo -->
        <!-- <hearderDom></hearderDom> -->
        <div class="allContents">
            <div style="width:80%;margin:0 auto">
                <div style="padding:45px 10%;background-color: #ffffff">
                    <p>
                        <span class="names">{{detailObj.username}}</span>
                        <span class="guan">擅长：</span>
                        <span class="guan" v-for="(i,index) in detailObj.labei" :key="index">{{i}}</span>
                    </p>
                    <p class="personDetail">
                        {{detailObj.intro}}
                    </p>
                </div>
                <div style="margin-top:30px;padding: 45px 10%;background-color: #ffffff">
                    <div class="siteDetails">
                        <p>
                            <span>审核状态：</span>
                            <span>
                                {{detailObj.status}}
                            </span>
                        </p>
                        <p>
                            <span>所属分馆：</span>
                            <span>
                                {{detailObj.bname}}
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
                this.axios.post(url.mytDetail,params)
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
    font-size:20px;
    font-family:MicrosoftYaHei;
    font-weight:400;
    color:rgba(51,51,51,1);
    line-height:32px;
}
.guan{
    font-size:14px;
    font-family:MicrosoftYaHei;
    font-weight:400;
    color:rgba(102,102,102,1);
    line-height:32px;
    margin-left:2px;
}
.personDetail{
    margin-top: 23px;
    font-size:14px;
    font-family:MicrosoftYaHei;
    font-weight:400;
    color:rgba(51,51,51,1);
    line-height:32px;
}
.titles{
    font-size:20px;
    font-family:MicrosoftYaHei;
    font-weight:400;
    color:rgba(51,51,51,1);
    line-height:32px;
    text-align: center;
    margin-bottom: 32px;
}
.psamll{
    font-size:14px;
    font-family:MicrosoftYaHei;
    font-weight:400;
    color:rgba(102,102,102,1);
    line-height:16px;
    text-align: center;
    margin-bottom: 20px;
}
.oneDay>div{
    height: 50px;
    width: 115px;
}
.allBiao>div{
    border: 1px solid #FDBDBD;
    border-left: none;
    margin-bottom: 30px;
}
.allBiao>div:first-child{
    border-left: 1px solid #FDBDBD;
}
.week{
    font-size:14px;
    font-family:MicrosoftYaHei;
    font-weight:400;
    color:rgba(51,51,51,1);
    line-height:24px;
}
.weekTime{
    font-size:12px;
    font-family:MicrosoftYaHei;
    font-weight:400;
    color:rgba(102,102,102,1);
    line-height:20px;
}
.wenzi{
    font-size:14px;
    font-family:MicrosoftYaHei;
    font-weight:400;
    color:rgba(51,51,51,1);
    line-height:32px;
}
.onwenzi{
    color: #ff0000 !important;
}
.circleB{
    width:14px;
    height:14px;
    background:rgba(51,51,51,1);
    border-radius:7px;
    margin-right: 20px;
}
.circleR{
    width:14px;
    height:14px;
    background:rgba(255,0,0,1);
    border-radius:7px;
    margin-right: 20px;
}
.yuyues{
    font-size:14px;
    font-family:MicrosoftYaHei;
    font-weight:400;
    color:rgba(51,51,51,1);
    line-height:28px;
}
.yuyuess{
    font-size:14px;
    font-family:MicrosoftYaHei;
    font-weight:400;
    color:rgba(255,0,0,1);
    line-height:28px;
}
.postSuccess{
    font-size:24px;
    font-family:MicrosoftYaHei;
    font-weight:400;
    color:rgba(51,51,51,1);
    line-height:32px;
}
.conts::before{
    content:'';
    position: absolute;
    left: 0;
    top:0;
    width:115px;
    height:25px;
    box-sizing:border-box;
    border-bottom:1px solid #333333;
    transform-origin:bottom center;
    transform:rotateZ(20deg) scale(1);
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