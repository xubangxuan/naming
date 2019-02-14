<template>
    <div v-title data-title="登录" v-cloak>
        <div class="all onepagebg1 contentssTCB">
            <div class="centerInfo">
                <div class="infoOnes">
                    <div class="contents">
                        <img width="33%" height="auto" :src="logo" alt="">
                    </div>
                </div>
                <div class="logins">
                    <div class="inputs">
                        <div class="contentsL oneinput" style="width:80%;margin:0 auto;background-color:#ffffff;margin-bottom:50px">
                            <label for="">姓名</label>
                            <input style="flex:1" type="text" v-model="name" placeholder="请输入读者证号/身份证号">
                        </div>
                        <div class="contentsL oneinput" style="width:80%;margin:0 auto;background-color:#ffffff;margin-bottom:50px">
                            <label for="">密码</label>
                            <input style="flex:1" type="text" v-model="mima" placeholder="请输入账号密码">
                        </div>
                        <el-button style="width:80%;margin-left:10%;margin-top:0px;background-color:#EE7729;color:#ffffff;border-color:#EE7729" round>立即登陆</el-button>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                logo:require('../../assets/images/logo.png'),
                name:'',
                mima:'',
            }
        },
    }
</script>

<style scoped>
.all{
    width: 100vw;
    height: 100vh;
}
.centerInfo{
    width: 33%;
    margin: 0 auto;
}
.logins{
    width:30vw;
    height: 350px;
    margin: 0 auto;
    background:rgba(14,110,184,0.3);
    border-radius:20px;
    margin-top: 35px;
}
.inputs{
    padding-top: 50px;
}
.onepagebg1{
    background:url(../../assets/images/bg1.png) no-repeat center center;
    background-size: 100% 100%;
}
.oneinput{
    padding: 15px 15px;
    border: 1px solid rgba(230,230,230,1);
    border-radius: 30px
}
.oneinput>label{
    font-size:15px;
    font-family:MicrosoftYaHei;
    font-weight:400;
    color:rgba(0,0,0,1);
    line-height:16px;
    padding-right: 10px;
    margin-right: 10px;
    border-right: 1px solid #000000;
}
</style>