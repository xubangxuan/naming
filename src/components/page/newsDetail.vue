<template>
    <div v-cloak>
         <!-- 顶部logo -->
        <!-- <hearderDom></hearderDom> -->
        <div class="allContents">
            <div style="width:80%;margin:0 auto">
                <div style="padding:45px 10% 0 10%">
                    <p>
                        <span class="names">{{newsObj.title}}</span>
                    </p>
                    <p style="padding-bottom:45px;border-bottom:1px solid #eeeeee">
                         <span class="guan">发布时间：{{newsObj.create_time | getAllDataTime}}</span>
                    </p>
                    <!-- <p class="personDetail">
                        <span>相亲相爱</span>
                    </p> -->
                </div>
            </div>
            <div style="min-height:50vh">
                <div style="width:80%;margin:0 auto">
                    <p class="wenzi serverwindows" style="padding:45px 10%" v-html="newsObj.content">
                    </p>
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
              newsObj:{}

          }
        },
        created(){
            this.getDetail();

        },
        methods:{
            getDetail(){
                this.axios.get(url.getNewdetailt+'?id='+this.$route.query.id)
                .then(res=>{
                    console.log(res)
                    if(res.data.code==200){
                        this.newsObj = res.data.data;
                    }
                })
                .catch(err=>{
                    console.log(err)
                })
            }
        },
        filters:{
            getAllDataTime(times){
                var d = new Date(times);
                var year = d.getFullYear();
                var month = d.getMonth() + 1;
                var day = d.getDate() < 10 ? '0' + d.getDate() : '' + d.getDate();
                return year + '-' + month+ '-' + day;
            },
        }
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
.titles{
    font-size:20px;
    font-family:MicrosoftYaHei;
    font-weight:400;
    color:rgba(51,51,51,1);
    line-height:32px;
    text-align: center;
    margin-bottom: 32px;
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
.anniu{
    background:rgba(255,209,0,1);
    border-radius:22px;
    padding: 4px 33px ;
    color: #ffffff;
    cursor: pointer;
}
.onlyAnniu{
    background:rgba(153,153,153,1);
    border-radius:22px;
    padding: 4px 33px ;
    color: #ffffff;
    cursor: pointer;
}
.wenzi{
    font-size:16px;
    font-family:MicrosoftYaHei;
    font-weight:400;
    color:rgba(51,51,51,1);
    line-height:28px;
}
</style>