<template>
    <div v-title data-title="本馆资讯" v-cloak>
        <div class="all">
            <div class="top">
                <img width="100%" height="100%" :src="topimg" alt="">
            </div>
            <div class="mains">
                <div class="lists">
                    <div class="one_list">
                        <el-row :gutter="20">
                            <el-col :span="6">
                                <div class="grid-content">
                                    <div class="navlists" style="background-color:#ffffff">
                                        <div @click="chose(index)" :class="onindex==index?'onstatus':'status'" v-for="(item,index) in list" :key="index">25272</div>
                                    </div> 
                                </div>
                            </el-col>
                            <el-col :span="18">
                                <div class="grid-content">
                                    <div class="con">
                                        <div v-show="onindex==0" class="questAnswer">
                                            <div v-for="(item,index) in 3" :key="index">
                                                <p>{{index+1+'.'}}某某问题</p>
                                                <div>
                                                    决定你能站多高、走多远的，是你思想的高度与深度。
                                                    多些逆向思维，摆脱教条的束缚；多些批判思维，
                                                    突破桎梏的封锁；多些换位思维，避免自我为中心；
                                                    多些系统思维，消除片面误区；多些形象思维，凡事不要太枯燥；
                                                    多些逻辑思维，事物都有千丝万缕的联系；多些简单思维，
                                                    你简单世界才简单。
                                                </div>
                                            </div>
                                        </div>
                                        <div v-show="onindex==1">
                                            <div class="liuyan">
                                                <div>
                                                    <div class="contentss" style="margin-bottom:20px">
                                                        <p>我要留言</p>
                                                        <small>请认真填写各项信息</small>
                                                    </div>
                                                    <div class="contentsNav">
                                                        <el-input v-model="name" placeholder="姓名"></el-input>
                                                        <el-input style="margin-left:20px" v-model="phone" placeholder="电话"></el-input>
                                                    </div>
                                                    <div style="margin-top:20px">
                                                        <el-input
                                                            type="textarea"
                                                            :rows="8"
                                                            resize='none'
                                                            placeholder="请输入内容"
                                                            v-model="textarea">
                                                        </el-input>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="liuyanLists">
                                                <div v-for="(item,index) in 3" :key="index">
                                                    <div class="contentssLR_no">
                                                        <span>姓名:某某问题</span>
                                                        <span>2018-10-10</span>
                                                    </div>
                                                    <div>
                                                        <p>
                                                            决定你能站多高、走多远的，是你思想的高度与深度。
                                                            多些逆向思维，摆脱教条的束缚；多些批判思维，
                                                            突破桎梏的封锁；多些换位思维，避免自我为中心；
                                                            多些系统思维，消除片面误区；多些形象思维，凡事不要太枯燥；
                                                            多些逻辑思维，事物都有千丝万缕的联系；多些简单思维，
                                                            你简单世界才简单。
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="addressInfo" v-show="onindex==2">
                                            <p>南明区地址信息</p>
                                            <div style="margin-bottom:15px">
                                                <span icon="el-icon-search">馆址：某个地方</span>
                                            </div>
                                            <div>
                                                <div id="container"  style="height:300px"></div> 
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </el-col>
                        </el-row>
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
                onindex:0,
                list:5,
                topimg:require('../../assets/images/banner.png'),
                name:"",
                phone:'',
                textarea:'',
            }
        },
        mounted(){
            var map = new AMap.Map('container', {
                zoom:12,//级别
                center: [102.7989, 24.888838],//中心点坐标
            });
        },
        methods:{
            chose(index,id){
                this.onindex = index;
            },
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
.mains{
    width: 70vw;
    margin: 0 auto;
    margin-bottom: 150px;
}
.lists{
    background-color: #fff;
    padding: 0 20px 0 20px;
    margin-top: 30px;
}
.one_list{
    padding: 10px 5px;
}
.navlists>div{
    margin-bottom: 20px;
    line-height: 28px;
}
.status{
    color:#999999;
    text-align:center;
    cursor: pointer;
}
.onstatus{
    color:#00A0E9;
    text-align:center;
    cursor: pointer;
}
.con{
    min-height: 250px;
    font-size:14px;
    font-family:MicrosoftYaHei;
    font-weight:400;
    color:rgba(51,51,51,1);
    line-height:28px;
}
.questAnswer{
    padding: 0 30px;
}
.questAnswer>div{
    margin-bottom: 15px;
}
.questAnswer>div>p{
    font-size:16px;
    font-family:MicrosoftYaHei;
    font-weight:400;
    color:rgba(3,3,3,1);
    line-height:20px;
    margin-bottom: 10px;
}
.questAnswer>div>div{
    font-size:14px;
    font-family:MicrosoftYaHei;
    font-weight:400;
    color:rgba(102,102,102,1);
    line-height:20px;
}
.liuyan{
    padding: 30px;
    background-color: #E3F4FB;
}
.liuyanLists{
    margin-top: 10px;
}
.liuyanLists>div{
    margin-top: 30px;
}
.liuyanLists>div>div:first-child>span:first-child{
    font-size:14px;
    font-family:MicrosoftYaHei;
    font-weight:400;
    color:rgba(3,3,3,1);
    line-height:28px;
}
.liuyanLists>div>div:first-child>span:last-child{
    font-size:13px;
    font-family:MicrosoftYaHei;
    font-weight:400;
    color:rgba(102,102,102,1);
    line-height:28px;
}
.liuyanLists>div>div:last-child{
    background-color: #E3F4FB;
    padding: 14px;
    margin-top: 15px;
}
.liuyanLists>div>div:last-child>p{
    font-size:14px;
    font-family:MicrosoftYaHei;
    font-weight:400;
    color:rgba(102,102,102,1);
    line-height:28px;
}
.addressInfo>p{
    font-size:16px;
    font-family:MicrosoftYaHei;
    font-weight:400;
    color:rgba(3,3,3,1);
    line-height:32px;
}
.addressInfo>div>span{
    font-size:14px;
    font-family:MicrosoftYaHei;
    font-weight:400;
    color:rgba(3,3,3,1);
    line-height:28px;
}
</style>