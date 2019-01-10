<template>
    <div>
        <div class="footer">
            <div  class="contents footAllStyle" style="color:#ffffff;cursor:pointer;">
                <div style="margin-bottom:20px">  
                    <span>本馆概况</span>|
                    <span>在线观看</span>|
                    <span>新闻公告</span>|
                    <span>文化活动</span>|
                    <span>在线预约</span>|  
                    <span>非遗文化</span>|       
                    <span>文化志愿者</span>     
                </div>                                    
            </div>
            <div  class="contents" style="color:#ffffff;cursor:pointer;">
                <div class="footer-jiesao" style="text-align:center">
                    <p>开放时间：{{obj.dispark_time}}</p>
                    <p>详细地址：{{adre}}    联系方式： {{obj.tel}}</p>
                </div>
            </div>
            <div  class="contents" style="color:#ffffff;cursor:pointer;background-color:#1C1313">
                <div style="text-align:center;margin-top:8px;margin-bottom:8px;">
                    CopyRight©️成都贝图科技有限公司
                </div>
            </div>
            <div style="position:absolute;top:50%;margin-top:-63px;right:15%">
                <div class="contentss">
                    <div style="padding:5px;background-color:#ffffff;">
                        <div>
                        <img style="width:85px;height:85px;" :src="ewm_02" alt="">
                        </div>
                        <div style="width:85px;text-align:center;padding:5px 0;">
                        微信公众号
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import url from '@/serverApi.js'
    export default {
        data() {
            return {
                ewm_02:require('../../assets/images/ewm.png'),
                obj:{},
                adre:""
            }
        },
        created(){
            this.getJieShao();
        },
        methods:{
            // 获取本馆概况
            getJieShao(){
                this.axios.get(url.getAlltotal)
                .then(res=>{
                    // console.log(res)
                    if(res.data.code==200){
                        this.obj = res.data.data;
                        this.adre = res.data.data.address[0].address;
                    }
                })
                .catch(err=>{
                    console.log(err)
                })
            },
        }
    }
</script>

<style scoped>
.footer{
  background-color: #342323;
  margin:0 auto;
  font-size: 14px;
  position: relative;
}
.footAllStyle{
    padding-top: 58px;
}
.footAllStyle span{
  padding: 0 5px;
}
.footAllStyle span:hover{
  color: #ff0000
}
.footer-jiesao p{
  margin-bottom: 20px;
}
</style>