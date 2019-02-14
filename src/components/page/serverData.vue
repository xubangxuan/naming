<template>
    <div v-title data-title="服务数据" v-cloak>
        <div class="all">
            <div class="top">
                <img width="100%" height="100%" :src="topimg" alt="">
            </div>
            <div class="mains">
                <div class="lists contentsStep">
                    <div>
                        <div class="lefttop">
                            <div class="title">
                                借阅排行榜
                            </div>
                            <div class="theader contentsStep">
                                <span>排名</span>
                                <span>书名</span>
                                <span>借阅量</span>
                            </div>
                        </div>
                        <div v-for="(item,index) in 10" :key="index" class="ranklist contentsStep">
                            <span v-if="index==0" style="color:#F01313">NO.{{index + 1}}</span>
                            <span v-else-if="index==1" style="color:#ED772D">NO.{{index + 1}}</span>
                            <span v-else-if="index==2" style="color:#3399FF">NO.{{index + 1}}</span>
                            <span v-else>NO.{{index + 1}}</span>
                            <span style="margin:0 20px" class="projece">书借阅量书借阅量借阅量名书借阅量借阅量名书借阅量借阅量名借阅量名</span>
                            <span>22222222</span>
                        </div>
                    </div>
                    <div>
                        <div class="lefttop">
                            <div class="title">
                                读者排行榜
                            </div>
                            <div class="theader contentsStep">
                                
                                <span>排名</span>
                                <span>读者</span>
                                <span>阅读量</span>
                            </div>
                        </div>
                        <div v-for="(item,index) in 10" :key="index" class="ranklist contentsStep">
                            <span v-if="index==0" style="color:#F01313">NO.{{index + 1}}</span>
                            <span v-else-if="index==1" style="color:#ED772D">NO.{{index + 1}}</span>
                            <span v-else-if="index==2" style="color:#3399FF">NO.{{index + 1}}</span>
                            <span v-else>NO.{{index + 1}}</span>
                            <span style="margin:0 20px" class="projece">书借阅量书借阅量借阅量名书借阅量借阅量名书借阅量借阅量名借阅量名</span>
                            <span>22222222</span>
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
    margin-top: 80px;
}
.lists>div{
    width: 40%;
    background:rgba(255,255,255,1);
    box-shadow:0px 0px 8px 0px rgba(0, 0, 0, 0.26);
    border-radius:8px 8px 0px 0px;
    font-size:16px;
    font-family:MicrosoftYaHei;
    font-weight:400;
    color:rgba(255,255,255,1);
    line-height:28px;
}
.title{
    width: 55%;
    font-size: 20px;
    margin: 0 auto;
    text-align: center;
    padding: 10px 0;
    border-bottom: 1px solid #ffffff;
}
.lefttop{
    background:rgba(51,153,255,1);
    border-radius:8px 8px 0px 0px;
    padding: 0 8px;
}
.theader{
    padding: 10px;
}
.ranklist{
    font-size: 14px;
    color: #030303;
    padding: 10px;
    border-bottom: 1px solid #e6e6e6;
}
</style>