<template>
    <div v-cloak>
         <!-- 顶部logo -->
        <!-- <hearderDom></hearderDom> -->
        <div class="allContent">
            <div style="width:80%;margin:0 auto;">
                <div class="allDiv" style="padding:45px 10%;" > 
                    <div>
                        <div class="myinfors">
                            <div id="showPic">
                                <div v-show="fenmian==1">
                                    <div class="contentss" style="width:60px;min-height:60px">
                                        <img style="width:60px;height:60px;border-radius:50%" :src="resouceUpload" alt="">
                                    </div>
                                </div>
                                <div v-show="fenmian!=1">
                                    <img style="width:60px;height:60px;border-radius:50%" src=""   id="filesfenmian" alt="">
                                </div>
                                <form>
                                    <input ref="filefenmian" @change="seePicfenmian" style="width:60px;height:60px;" type="file">
                                </form>
                            </div>
                            <div class="contentss" style="margin-bottom:30px">
                                <span class="mname">{{userinfo.tel}}</span>
                            </div>
                            <div class="contentsStep one">
                                <span>微信</span>
                                <span v-if="!userinfo.wx_id" style="color:red">未绑定</span>
                                <span v-else>已绑定</span>
                            </div>
                            <div class="contentsStep one">
                                <span>邮箱</span>
                                <span>{{userinfo.account}}</span>
                            </div>
                            <div class="contentsStep one">
                                <span>姓名</span>
                                <span>{{userinfo.username}}</span>
                            </div>
                            <div class="contentsStep one">
                                <span>身份证</span>
                                <span>{{userinfo.id_card}}</span>
                            </div>
                            <div class="contentss" style="margin-top:30px">
                                <el-button @click="changeImg" type="primary" round>保存修改</el-button>
                            </div>
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
            footersDom,
        },
        data () {
          return {
              imgUrl:'',
              userinfo:{},
              resouceUpload:'',
              fengmianUrl:{},//封面文件
              fenmian:1,//控制上传图片的显示与否
          }
        },
        created(){
            this.imgUrl = url.imgUrl;
            this.getInfo();
        },
        methods:{
            seePicfenmian(){
                //console.log(this.$refs.filefenmian)
                //console.log(this.$refs.filefenmian.files[0])
                var imgurl = this.$refs.filefenmian.files[0];
                
                var reader = new FileReader();
                reader.onloadend = function(e){
                    document.getElementById('filesfenmian').src = e.target.result;
                }
                reader.readAsDataURL(imgurl);
                this.fenmian = 2;
                this.fengmianUrl = imgurl;
            },
            getInfo(){
                this.axios.get(url.getMyInfo,{
                    params:{
                        token:this.$store.state.user.token
                    }
                })
                .then(res=>{
                    console.log(res)
                    if(res.data.code==200){
                        this.userinfo = res.data.data;
                        this.resouceUpload = res.data.data.head_img;
                    }else{
                        this.$message.error(res.data.msg)
                    }
                })
                .catch(err=>{
                    console.log(err)
                })
            },
            // 修改头像
            changeImg(){
                var forms = new FormData();
                forms.append('head_img',this.fengmianUrl)
                forms.append('token',this.$store.state.user.token)
                this.axios.post(url.changeImage,forms)
                .then(res=>{
                    console.log(res)
                    if(res.data.code==200){
                        this.$message.success('保存成功')
                        this.getInfo();
                    }else{
                        this.$message.error(res.data.msg)
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
.allContent{
    background-color: #f5f5f5;
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
    padding: 30px 15%;
}
.mname{
    font-size:16px;
    font-family:MicrosoftYaHei;
    font-weight:400;
    color:rgba(51,51,51,1);
    line-height:20px;
    margin-top:10px
}
.one{
    font-size:14px;
    font-family:MicrosoftYaHei;
    font-weight:400;
    color:rgba(51,51,51,1);
    line-height:28px;
}
#showPic{
    position: relative;
    display: flex;
    justify-content: center;
}

#showPic>form{
    position: absolute;
    top:-20px;
    width:60px;
    padding:20px 0;
    opacity: 0 ;
}
#showPic>div{
    display: inline-block;
    width:60px;
    height:60px;
    text-align: center;
}
</style>