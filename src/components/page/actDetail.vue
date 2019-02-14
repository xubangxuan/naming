<template>
    <div v-title data-title="活动详情" v-cloak>
        <div class="all">
            <div class="top">
                <img width="100%" height="100%" :src="topimg" alt="">
            </div>
            <div class="bghui"></div>
            <div class="mains">
                <div class="lists">
                    <div class="infotop">
                        <p class="title">活动标题</p>
                        <p class="times">
                            <span>活动报名中</span>
                            <span>2018-10-10</span>
                        </p>
                    </div>
                    <p class="htmlmsg serverwindows" v-html="'详情'"></p>
                    <div class="moreinfo">
                        <p>
                            <span>活动名称：</span>
                            <span>7277275275</span>
                        </p>
                        <p>
                            <span>报名时间：</span>
                            <span></span>
                        </p>
                        <p>
                            <span>活动时间：</span>
                            <span></span>
                        </p>
                        <p>
                            <span>活动地址：</span>
                            <span></span>
                        </p>
                    </div>
                    <div style="margin-top:60px" class="contents">
                        <el-button @click="showReport=true" type="primary" round>我要报名</el-button>
                    </div>
                </div>
            </div>
            <commonFooter></commonFooter>
            <el-dialog
                title="报名资料单"
                :visible.sync="showReport"
                width="30%"
                >
                <div class="contentss writeInfo">
                    <div class="contentsL oneinput" style="width:80%">
                        <label for="">姓　名</label>
                        <input style="flex:1" type="text" v-model="name" placeholder="请输入姓名">
                    </div>
                    <div class="contentsL oneinput" style="width:80%">
                        <label for="">读者证</label>
                        <input style="flex:1" type="text" v-model="readcard" placeholder="请输入读者证号">
                    </div>
                    <div class="contentsL oneinput" style="width:80%">
                        <label for="">身份证</label>
                        <input style="flex:1" type="text" v-model="idcard" placeholder="请输入身份证号">
                    </div>
                    <div class="contentsL oneinput" style="width:80%">
                        <label for="">电　话</label>
                        <input style="flex:1" type="number" v-model="phone" placeholder="请输入联系电话">
                    </div>
                </div>
                <!-- 单图片上传区域 -->
                <div>

                </div>
                <div class="contentss">
                    <el-button style="width:80%" type="primary" round>立即报名</el-button>
                </div>
            </el-dialog>
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
                showReport:false,
                name:'',
                readcard:'',
                idcard:'',
                phone:'',
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
.title{
    font-size:20px;
    font-family:MicrosoftYaHei;
    font-weight:400;
    color:rgba(3,3,3,1);
    line-height:40px;
}
.times{
    font-size:14px;
    font-family:MicrosoftYaHei;
    font-weight:400;
    color:rgba(102,102,102,1);
    line-height:14px;
}
.times>span:first-child{
    background:rgba(241,14,14,1);
    border-radius:2px;
    color:rgba(255,255,255,1);
    padding: 2px 4px;
}
.infotop{
    padding: 20px 0;
    border-bottom: 1px solid #e6e6e6;
    margin-bottom: 20px;
}
.htmlmsg{
    margin-bottom: 20px;
}
.moreinfo>p>span:first-child{
    font-size:16px;
    font-family:MicrosoftYaHei;
    font-weight:400;
    color:#030303;
    line-height:32px;
}
.moreinfo>p>span:last-child{
    font-size:16px;
    font-family:MicrosoftYaHei;
    font-weight:400;
    color:#666666;
    line-height:32px;
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
.writeInfo>div{
    margin-bottom: 30px;
}
</style>