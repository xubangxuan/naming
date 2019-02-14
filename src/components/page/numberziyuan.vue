<template>
    <div v-title data-title="数字资源" v-cloak>
        <div class="all">
            <div class="top">
                <img width="100%" height="100%" :src="topimg" alt="">
            </div>
            <div class="mains">
                <div class="lists">
                    <p>数字资源</p>
                    <div class="smallpro">
                        <p>南明区图书馆目前可为读者提供馆内藏书3万余册南明区图书馆目前可为读者提供馆内藏书3万余册南明区图书馆目前可为读者提供馆内藏书3万余册</p>
                    </div>
                    <div class="contentssLR_no" style="margin-top:30px;height:50%">
                        <div class="numberlist">
                            <div class="onenumber" v-for="(item,index) in 10" :key="index">
                                <div class="contentss" style="height:100%">
                                    <img  :src="activeimg" alt="">
                                    <h3>活动标题</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <commonFooter></commonFooter>
        </div>
    </div>
</template>

<script>
    import commonFooter from '../compont/commonFooter.vue'
    export default {
        components:{
            commonFooter
        },
        data() {
            return {
                topimg:require('../../assets/images/banner.png'),
                activeimg:require('../../assets/images/active.png'),
            }
        },
        methods:{
            
        }
    }
</script>

<style scoped>
.all{
    margin-top: 80px;
    min-height: calc(100vh - 80px);
}
.top{
    width: 100%;
    height: 13.7vw;
}
.allStatus{
    width: 70vw;
    margin: 30px auto;
}
.mains{
    width: 70vw;
    margin: 0 auto;
    margin-bottom: 150px;
}
.lists{
    background-color: #fff;
}
.lists>p{
    font-size:20px;
    font-family:MicrosoftYaHei;
    font-weight:400;
    color:rgba(3,3,3,1);
    line-height:20px;
    padding-left: 10px;
    border-left: 4px solid #3399FF;
    margin-top: 60px;
}
.lists>div{
    font-size:16px;
    font-family:MicrosoftYaHei;
    font-weight:400;
    color:rgba(3,3,3,1);
    margin-top: 20px;
}
.lists>div>p{
    margin-bottom: 8px;
}
.numberlist{
    width: 100%;
    height: 100%;
}
.numberlist>div{
    width: 15%;
    margin-right: 5%;
}
.numberlist>div:nth-child(5n){
    margin-right: 0;
}
.onenumber{
    display: inline-block;
    height: 120px;
    box-shadow:0px 0px 8px 0px rgba(0, 0, 0, 0.1);
    border-radius:8px;
    margin-bottom: 50px;
}
.onenumber img{
    max-width: 160px;
    max-height: 60px;
}
.onenumber>span{
    font-size:14px;
    font-family:MicrosoftYaHei;
    font-weight:400;
    color:rgba(3,3,3,1);
    line-height: 24px;
}
.onenumber h3{
    font-size:14px;
    font-family:MicrosoftYaHei;
    font-weight:400;
    color:rgba(3,3,3,1);
    line-height:18px;
    margin-top: 15px;
}
.smallpro{
    width: 50%;
    font-size:16px;
    font-family:MicrosoftYaHei;
    font-weight:400;
    color:rgba(3,3,3,1);
    line-height: 24px;
}
</style>