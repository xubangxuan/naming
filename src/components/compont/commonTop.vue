<template>
    <div>
        <div v-show="showTop" class="indexTop contentsL">
            <div class="contents">
                <img height="100%" :src="indexlogo" alt="">
            </div>
            <ul class="contentsNav">
                <li @click="links('/')"  :class="onStutas=='Index'||onStutas=='SearchList'||onStutas=='SearchDetail'?'onstatus':''">
                    <div class="contents">
                        首页
                    </div>
                </li>
                <li @click="links('/aboutMessage')"  :class="onStutas=='AboutMessage'||onStutas=='AboutMessageDetail'?'onstatus':''">
                    <div class="contents">
                        本馆资讯
                    </div>
                </li>
                <li @click="links('/serverTips')"  :class="onStutas=='ServerTips'?'onstatus':''">
                    <div class="contents">
                        服务指南
                    </div>
                </li>
                <li @click="links('/actList')"  :class="onStutas=='ActList'||onStutas=='ActDetail'?'onstatus':''">
                    <div class="contents">
                        活动报名
                    </div>
                </li>
                <li @click="links('/newBookList')"  :class="onStutas=='NewBookList'||onStutas=='NewBookDetail'?'onstatus':''">
                    <div class="contents">
                        新书推荐
                    </div>
                </li>
                <li @click="links('/aboutUs')"  :class="onStutas=='AboutUs'?'onstatus':''">
                    <div class="contents">
                        关于南图
                    </div>
                </li>
                <li @click="links('/numberziyuan')"  :class="onStutas=='Numberziyuan'?'onstatus':''">
                    <div class="contents">
                        数字资源
                    </div>
                </li>
                <li @click="links('')"  :class="onStutas==''?'onstatus':''">
                    <div class="contents">
                        文化地图
                    </div>
                </li>
                <li @click="links('/serverData')" :class="onStutas=='ServerData'?'onstatus':''">
                    <div class="contents">
                        服务数据
                    </div>
                </li>
            </ul>
            <div class="contents readerCenter">
                <span @click="login">读者中心</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                onStutas:'Index',
                indexlogo:require('../../assets/images/indexlogo.png'),
                showTop:true,//是否显示nav的导航
            }
        },
        mounted(){
            this.onStutas = this.$route.name;
            if(this.$route.name=='Login'){
                this.showTop = false;
            }else{
                this.showTop = true;
            }
        },
        watch:{
            $route(to,from){
                this.showTop = true;
                this.onStutas = to.name;
            }
        },
        methods:{
            links(path){
                this.$router.push({
                    path:path,
                })
            },
            login(){
                let routeData = this.$router.resolve({ path: '/login'});
                window.open(routeData.href, '_blank');
            }
        }
    }
</script>

<style scoped>
.indexTop{
    position: fixed;
    top: 0;right: 0px;
    width: 100%;
    height: 80px;
    padding: 0 5%;
    background-color: #3399FF;
    z-index: 1000;
}
.indexTop>ul{
    margin-left: 2%;
    flex: 1;
    height: 100%;
}
.indexTop>ul>li{
    min-width: 80px;
    height: 100%;
    padding: 8px 0;
    font-size:18px;
    font-family:MicrosoftYaHei;
    font-weight:400;
    color:rgba(255,255,255,1);
    line-height:14px;
    cursor: pointer;
}
.indexTop>ul>li>div{
    height:100%
}
.onstatus{
    background-color: rgba(0,0,0,.1);
    border-bottom: 1.5px solid #ffffff;
}
.readerCenter{
    width: 10%;
    margin: 0 4%;
}
.readerCenter>span{
    display: inline-block;
    width:60%;
    text-align: center;
    border:1px solid rgba(254,251,251,1);
    border-radius:9px;
    font-size:14px;
    font-family:MicrosoftYaHei;
    font-weight:400;
    color:rgba(255,255,255,1);
    line-height:20px;
}
</style>