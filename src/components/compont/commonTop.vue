<template>
    <div>
        <div class="indexTop contentsL">
            <div class="contents">
                <img height="100%" :src="indexlogo" alt="">
            </div>
            <ul class="contentsNav">
                <li @click="links(index,item.path)" v-for="(item,index) in lists" :key="index" :class="onindex==index?'onstatus':''">
                    <div class="contents">
                        {{item.text}}
                    </div>
                </li>
            </ul>
            <div class="contents readerCenter">
                <span>读者中心</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                onindex:0,
                onStutas:'',
                lists:[
                    {
                        text:'首页',
                        path:'/'
                    },{
                        text:'本馆资讯',
                        path:'/aboutMessage'
                    },{
                        text:'服务指南',
                        path:'/serverTips'
                    },{
                        text:'活动报名',
                        path:'/'
                    },{
                        text:'新书推荐',
                        path:'/'
                    },{
                        text:'关于南图',
                        path:'/'
                    },{
                        text:'数字资源',
                        path:'/'
                    },{
                        text:'文化地图',
                        path:'/'
                    },{
                        text:'服务数据',
                        path:'/'
                    }
                ],
                indexlogo:require('../../assets/images/indexlogo.png'),
            }
        },
        created(){

        },
        watch:{
            $route(to,from){
                this.onStutas = to.name
            }
        },
        methods:{
            links(index,path){
                this.onindex = index;
                this.$router.push({
                    path:path,
                })
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