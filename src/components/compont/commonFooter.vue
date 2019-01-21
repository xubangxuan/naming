<template>
    <div>
        <div class="footer">
            <div class="contents">
                <div class="contentsNews footleft">
                    <p>电话：0817-2154521</p>
                    <p>邮箱：</p>
                    <p>馆址：地址123131313</p>
                    <p class="contentsNav">
                        <span>今日浏览：100</span>
                        <span>昨日浏览：100</span>
                        <span>本月浏览：1000</span>
                        <span>访问重量：10000</span>
                    </p>
                </div>
                <div class="contentsNav footleft" style="padding: 10px 10%">
                    <div class="contentss">
                        <img width="45px" height="45px" :src="activeimg" alt="">
                        <span style="margin-top:3px">关注公众号</span>
                    </div>
                    <div class="contentss">
                        <img width="45px" height="45px" :src="activeimg" alt="">
                        <span style="margin-top:3px">关注微博</span>
                    </div>
                    <div class="contentss">
                        <img width="45px" height="45px" :src="activeimg" alt="">
                        <span style="margin-top:3px">关注抖音</span>
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
                activeimg:require('../../assets/images/active.png'),
            }
        },
    }
</script>

<style scoped>
.footer{
    position: fixed;
    width: 100%;
    bottom: 0;
    background-color: #000000;
    color: #ffffff;
}
.footer>div{
    width: 70vw;
    margin: 0 auto;
    height: 80px;
}
.footer>div>div{
    width: 50%;
    padding: 10px 5%;
}
.footleft{
    font-size:14px;
    font-family:MicrosoftYaHei;
    font-weight:400;
    color:rgba(255,255,255,1);
    line-height:14px;
    padding: 8px 0;
}
</style>