<template>
    <div v-title data-title="本馆资讯" v-cloak>
        <div class="all">
            <div class="top">
                <img width="100%" height="150px" :src="topimg" alt="">
            </div>
            <div class="mains">
                <div class="lists">
                    <div class="one_list">
                        <p>标题</p>
                        <small>发布时间：2018/10/10</small>
                    </div>
                    <div class="infos">
                        <p>
                            此文段为新闻内容占用文案，放弃失落带来的痛楚；
                            放弃屈辱留下的仇怨；放弃无休无止的争吵；放弃没完没了的辩解；放弃虚幻情感的奢望；
                            放弃财物金钱的渴求；放弃权贵势力的觊觎；放弃夸大虚伪的纠缠。
                            只有当机立断地放弃那些不切实际的东西，你的世界才能风和日丽，晴空万里，细水长流，
                            你才会豁然开朗地领悟“小舍小得，大舍大得，不舍不得，越舍越得”的锢中真谛。
                            当一切尘埃落定，当一切旧事回放，当一切归于平静，我们才会真真正正懂得放弃的深层意义，
                            其实那才是一种厚实无价的丰硕收获。人真的能不听流言蜚语，潮起潮落，
                            能笑看成败，人生豪迈吗？也许人前展现的是微笑，可人后呢？又有谁明白心中的泪水呢？
                            成败之后总是回首一望，摔破茶壶仍会回首，只是逗留的时间长短而已。发怒会使人远离真理。
                            常常因为愤怒把事情搞僵，搞糟。愤怒时，极而言之，极而行之，没了后路，没了回旋余地。
                            本来有理，反而变成了没理，本来小事，结果闹成了大事，甚至不可收拾，过后，悔之晚矣。
                            发怒会使人远离真理。常常因为愤怒把事情搞僵，搞糟。愤怒时，极而言之，极而行之，
                            没了后路，没了回旋余地。本来有理，反而变成了没理，本来小事，结果闹成了大事，
                            甚至不可收拾，过后，悔之晚矣。发怒会使人远离真理。常常因为愤怒把事情搞僵，搞糟。
                            愤怒时，极而言之，极而行之，没了后路，没了回旋余地。本来有理，反而变成了没理，
                            本来小事，结果闹成了大事，甚至不可收拾，过后，悔之晚矣。发怒会使人远离真理。
                            常常因为愤怒把事情搞僵，搞糟。愤怒时，极而言之，极而行之，没了后路，没了回旋余地。
                            本来有理，反而变成了没理，本来小事，结果闹成了大事，甚至不可收拾，过后，悔之晚矣。
                        </p>
                        <div class="contents">
                            <img width='80%' height="auto" :src="activeimg" alt="">
                        </div>
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
                activeimg:require('../../assets/images/active.png'),
                topimg:require('../../assets/images/banner.png'),
                rightimg:require('../../assets/images/right.png'),
            }
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
    border-bottom: 1px solid #999999;
}
.one_list p{
    font-size:18px;
    font-family:MicrosoftYaHei;
    font-weight:400;
    color:rgba(51,51,51,1);
    line-height:28px;
}
.one_list small{
    font-size:14px;
    font-family:MicrosoftYaHei;
    font-weight:400;
    color:rgba(102,102,102,1);
    line-height:28px;
}
.infos{
    padding: 20px 0;
}
.infos>p{
    font-size:14px;
    font-family:MicrosoftYaHei;
    font-weight:400;
    color:rgba(102,102,102,1);
    line-height:20px;
}
.infos img{
    margin: 20px 0;
}
</style>