<template>
    <div v-title data-title="本馆资讯" v-cloak>
        <div class="all">
            <div class="top">
                <img width="100%" height="150px" :src="topimg" alt="">
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
                                    <div class="con" style="background-color:#ffffff">
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
                                        <div>
                                            
                                        </div>
                                    </div>
                                </div>
                            </el-col>
                        </el-row>
                    </div>
                </div>
                
            </div>

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
            }
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
.mains{
    width: 70vw;
    margin: 0 auto;
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
    padding: 0 30px;
    min-height: 250px;
    font-size:14px;
    font-family:MicrosoftYaHei;
    font-weight:400;
    color:rgba(51,51,51,1);
    line-height:28px;
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
</style>