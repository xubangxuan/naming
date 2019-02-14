<template>
    <div v-title data-title="关于南图" v-cloak>
        <div class="all">
            <div class="top">
                <img width="100%" height="100%" :src="topimg" alt="">
            </div>
            <div class="mains">
                <div class="lists">
                    <div style="margin-top:80px;margin-bottom:80px" class="contentsL">
                        <div class="coontentss">
                            <img width='556px' height="290px" :src="bookimg" alt="">
                        </div>
                        <div class="contentssLR_no" style="flex:1;height:290px;margin-left:20px">
                            <div style="width:100%;height:100%">
                                <div class="contentssTB" style="width:100%;height:100%">
                                    <div class="titles">
                                        <span>南明简介</span>
                                        <span>About us</span>
                                        <p>
                                            阿三v查收v裁剪啊v查收v静安寺
                                        </p>
                                    </div>
                                    <div class="contentsNav moreAbout" style="height:50px">
                                        <p @click="luxian=true;gaikuang=false;gongnue=false;" class="contents">
                                            <img width="20px" height="auto" :src="uspath" alt="">
                                            <span>入馆线路</span>
                                        </p>
                                        <p @click="luxian=false;gaikuang=true;gongnue=false;" class="contents">
                                            <img width="20px" height="auto" :src="ushouse" alt="">
                                            <span>馆里概况</span>
                                        </p>
                                        <p @click="luxian=false;gaikuang=false;gongnue=true;" class="contents">
                                            <img width="20px" height="auto" :src="usbook" alt="">
                                            <span>借阅攻略</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div v-show="luxian" class="contents">
                        <img max-width="100%" height="auto" :src="topimg" alt="">
                    </div>
                    <div v-show="gaikuang" class="contents">
                        <img max-width="100%" height="auto" :src="topimg" alt="">
                    </div>
                    <div v-show="gongnue" class="contents">
                        <img max-width="100%" height="auto" :src="topimg" alt="">
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
                bookimg:require('../../assets/images/book.png'),
                uspath:require('../../assets/images/uspath.png'),
                ushouse:require('../../assets/images/ushouse.png'),
                usbook:require('../../assets/images/usbook.png'),
                luxian:true,
                gaikuang:false,
                gongnue:false,
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
.titles>span:first-child{
    font-size:30px;
    font-family:MicrosoftYaHei;
    font-weight:400;
    color:rgba(3,3,3,1);
    line-height:28px;
}
.titles>span:nth-child(2){
    font-size:24px;
    font-family:ArialMT;
    font-weight:400;
    color:rgba(3,3,3,1);
    line-height:28px;
    margin-bottom: 25px;
}
.moreAbout>p{
    width: 30%;
    height: 100%;
    border: 1px solid #666666;
    border-radius: 4px;
    cursor: pointer;
}
.moreAbout>p>span{
    font-size:14px;
    font-family:MicrosoftYaHei;
    font-weight:400;
    color:rgba(102,102,102,1);
    line-height:56px;
}
.moreAbout>p>img{
    margin-right: 10px;
}
</style>