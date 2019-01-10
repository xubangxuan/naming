<template>
    <div v-cloak>
         <!-- 顶部logo -->
        <!-- <hearderDom></hearderDom> -->
        <div class="allContents">
            <div style="width:80%;margin:0 auto">
                <div style="padding:45px 10%">
                    <p>
                        <span class="names">{{obj.title}}</span>
                    </p>
                    <p>
                         <span class="guan">发布时间：{{obj.create_time | getAllDataTime}}</span>
                    </p>
                    <div class="personDetail">
                        <p>作者：{{obj.author}}</p>
                        <p v-html="'作品简介：'+obj.intro"></p>
                    </div>
                </div>
            </div>
            <div style="background-color:#f5f5f5">
                <div style="width:80%;margin:0 auto">
                    <div class="contents" style="padding:45px 10%">
                        <video controls autoplay style="width:100%;" :src="videoUrl"></video>
                    </div>
                    <div class="contents" style="padding:70px 0">
                        <div @click="dianzan(obj.like)" class="anniu contentss" :class="obj.like?'onlyAnniu':'anniu'">
                            <img style="width:22px;height:22px;margin-bottom:5px" :src="clickZan" alt="">
                            <span>{{obj.like_num}}</span>
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
            footersDom
        },
        data () {
          return {
              obj:{},
              clickZan:require('../../assets/images/clickZan.png'),
              videoUrl:'',
          }
        },
        created(){
            this.getDetail();
        },
        methods:{
            getDetail(){
                this.axios.get(url.databasedetail,{
                    params:{
                        id:this.$route.query.id,
                        token:this.$store.state.user.token||''
                    }
                })
                .then(res=>{
                    console.log(res)
                    if(res.data.code==200){
                        this.obj = res.data.data;
                        this.videoUrl = url.imgUrl + res.data.data.video;
                    }else{
                        this.$message.error(res.data.msg)
                    }
                })
                .catch(err=>{
                    console.log(err)
                })
            },
            dianzan(){
                if(this.$store.state.user.token){
                    var param = new URLSearchParams();
                    param.append('id',this.$route.query.id);
                    param.append('type',2);
                    param.append('token',this.$store.state.user.token);
                    this.axios.post(url.getlive,param)
                    .then(res=>{
                        console.log(res)
                        if(res.data.code==200){
                            this.getDetail();
                        }else{
                            this.$message.error(res.data.msg)
                        }
                    })
                    .catch(err=>{
                        console.log(err)
                    })
                }else{
                    this.$message.error('你还未登录，请登录再试')
                }
            },
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
</style>