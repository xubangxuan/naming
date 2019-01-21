<template>
  <div v-title data-title="南明区图书馆" v-cloak :style="{'height':'100vh','overflow-y':'hidden'}">
        <div class="section">
            <div class="container" :style="{'transform': 'translate3d(0px,-'+ fullPage*offsetheight +'px, 0px)'}">
                <div class="onepage" v-for="(i,index) in bannerList" :key="index" :class="i.class" :style="{'height':'100%'}">
                    <div class="centerInfo" v-if="index==0">
                        <div class="infoOnes">
                            <div class="contents">
                                <img width="33%" height="auto" :src="logo" alt="">
                            </div>
                            <div class="oneInput contentss">
                                <div style="width:80%" class="contents">
                                    <label for="">书目检索</label>
                                    <el-input
                                        style="flex:1;margin-right:4%"
                                        placeholder="请输入关键字检索"
                                        v-model="searchValue">
                                        <i slot="suffix" class="el-input__icon el-icon-search"></i>
                                    </el-input>
                                </div>
                                <div class="contents index_radio" style="margin-top:15px">
                                    <el-radio v-model="radio" label="1">全部</el-radio>
                                    <el-radio v-model="radio" label="2">作者</el-radio>
                                    <el-radio v-model="radio" label="3">书名</el-radio>
                                    <el-radio v-model="radio" label="4">ISBN</el-radio>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="areas" v-if="index==1">
                        <div class="info_area">
                            <div class="new_top contentsStep">
                                <div class="contentsL">
                                    <div style="padding-right:20px;border-right:1px solid #E6E6E6">
                                        <h3>最新资讯</h3>
                                        <small>Information</small>
                                    </div>
                                    <div style="padding-left:20px;">
                                        <p>随时更新资讯</p>
                                        <p>关注南明一起阅读！</p>
                                    </div>
                                </div>
                                <div class="more_news">
                                    <span>更多新闻内容>></span>
                                </div>
                            </div>
                            <div class="new_bottom contentssLR_no">
                                <div class="banners">
                                    <div>
                                        <el-carousel @change="banner_change" height="26vh" arrow='never' indicator-position='none' ref="carousel">
                                            <el-carousel-item v-for="(item,index) in banner_length" :key="index" name='index'>
                                                <img width="100%" height="100%"  :src="banners" alt="">
                                            </el-carousel-item>
                                        </el-carousel>
                                    </div>
                                    <div class="new_one">
                                        <span class="blaack_line"></span>
                                        <div class="contentssLR_no">
                                            <div class="contentssL">
                                                <h3>标题</h3>
                                                <small>新闻类型</small>
                                            </div>
                                            <div class="contentssLR_no">
                                                <i @click="setActiveItem(banner_index,'reduce')" class="el-icon-arrow-left"></i>
                                                <span style="margin:0 5px">
                                                    {{banner_index+1}}/{{banner_length}}
                                                </span>
                                                <i @click="setActiveItem(banner_index,'add')" class="el-icon-arrow-right"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="newList">
                                    <div class="new_item" v-for="(item,index) in 3" :key="index">
                                        <div class="new_txt contentsStep">
                                            <div class="contentsL">
                                                <small>新闻公告</small>
                                                <span style="margin:0 5px">/</span>
                                                <h3 class="projece">新新闻标题新闻标题新闻标题新闻标题新闻标题闻标题</h3>
                                            </div>
                                            <div>
                                                <span>10-10</span>
                                            </div>
                                        </div>
                                        <div class="new_detail contentsStep">
                                            <div class="projece2">
                                                读书是一种幸福，让人增长知识，使人明白道理，
                                                令人憧憬未来，叫人品味生活，给人益处多多，
                                                这种幸福别无取代。书，读书幸福...
                                            </div>
                                            <div>
                                                <i class="el-icon-ump-arrow-right"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="areas" v-if="index==2">
                        <div class="info_area">
                            <div class="new_top contentsStep">
                                <div class="contentsL">
                                    <div style="padding-right:20px;border-right:1px solid #E6E6E6">
                                        <h3>新书推荐</h3>
                                        <small>Recommended</small>
                                    </div>
                                    <div style="padding-left:20px;">
                                        <p>定时推荐新书</p>
                                        <p>关注南明一起阅读！</p>
                                    </div>
                                </div>
                                <div class="more_news">
                                    <span>更多推荐内容>></span>
                                </div>
                            </div>
                            <div class="book_bottom contentssLR_no" style="margin-top:0px">
                                <div class="contentsNav">
                                    <div class="onebook contentssL" style="width:15%" v-for="(item,index) in 5" :key="index">
                                        <img width='100%' height="auto" :src="bookimg" alt="">
                                        <span>书名:《跟任何都...》</span>
                                        <span>作者:张三</span>
                                        <span>索书号:G12342222</span>
                                    </div>
                                </div>
                            </div>
                            <div class="contentss">
                                <span style="margin-bottom:5px">贵阳市南明区图书馆</span>
                                <span>Guiyang Guandu District Library</span>
                            </div>
                        </div>
                    </div>
                    <div class="areas" v-if="index==3">
                        <div class="info_area">
                            <div class="new_top contentsStep">
                                <div class="contentsL">
                                    <div style="padding-right:20px;border-right:1px solid #E6E6E6">
                                        <h3>精彩活动</h3>
                                        <small>Activity</small>
                                    </div>
                                    <div style="padding-left:20px;">
                                        <p>精彩不断</p>
                                        <p>让我们快乐参与！</p>
                                    </div>
                                </div>
                                <div class="more_news">
                                    <span>更多精彩活动>></span>
                                </div>
                            </div>
                            <div class="book_bottom contentssLR_no" style="margin-top:30px">
                                <div class="contentsNav">
                                    <div class="oneactivess contentssL" style="width:28%" v-for="(item,index) in 3" :key="index">
                                        <img width='100%' height="auto" :src="activeimg" alt="">
                                        <h3>活动标题</h3>
                                        <p class="projece4">
                                             读书是一种幸福，让人增长知识，使人明白道理，
                                             令人憧憬未来，叫人品味生活，给人益处多多，
                                             这种幸福别无取代。世界读书日祝愿朋友幸福读书，
                                             这种幸福别无取代。世界读书日祝愿朋友幸福读书，
                                             这种幸福别无取代。世界读书日祝愿朋友幸福读书，
                                             读书幸福...
                                        </p>
                                        <div @mouseenter="showimg=false;onindexShowPic=index" @mouseleave="showimg=true;onindexShowPic=-1" class="contentsL">
                                            <span>进一步了解</span>
                                            <img v-show="showimg||index!=onindexShowPic" width="16%" height="16px" :src="rightimg" alt="">
                                            <img v-show="!showimg&&index==onindexShowPic" width="16%" height="16px" :src="rightimgon" alt="">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="number" v-if="index==4">
                        <div class="number_area">
                            <div class="contentss">
                                <p>数字资源</p>
                                <p>南明区图书馆目前可为读者提供馆内藏书3万余册、</p>
                                <p>数字资源10余万种设有儿童阅读、文学长廊、休闲阅览等多个区域、</p>
                                <p>并打造非遗文化墙、多个主题图书推荐区。</p>
                                <div class="more_news" style="margin-top:12px">
                                    <span>更多精彩活动>></span>
                                </div>
                            </div>
                            <div class="contentssLR_no" style="margin-top:30px;height:50%">
                                <div class="numberlist">
                                    <div class="onenumber" v-for="(item,index) in 10" :key="index">
                                        <div class="contentss" style="height:100%">
                                            <img height="90%" width='auto'  :src="activeimg" alt="">
                                            <h3>活动标题</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="fixed-list">
                <div class="clearfix" v-for="(i,index) in bannerList" :key="index"  :class="fullPage==index?'onspan':''"  @click="pageInfo(index)">
                    <span>{{i.txt}}</span>
                    <span></span>
                </div>
            </div>
            <div class="fixedOutlink">
                <div class="contents" v-for="(i,index) in linkList" :key="index">
                    <img :src="i.src" alt="">
                </div>
            </div>
            <div v-show="fullPage==4" class="footer">
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
  </div>
</template>

<script>
import url from '@/serverApi.js'
import { Message } from 'element-ui'

export default {
        data () {
          return {
            imgUrl:'',
            banners:require('../../assets/images/banner.png'),
            indexlogo:require('../../assets/images/indexlogo.png'),
            logo:require('../../assets/images/logo.png'),
            bookimg:require('../../assets/images/book.png'),
            activeimg:require('../../assets/images/active.png'),
            rightimg:require('../../assets/images/right.png'),
            rightimgon:require('../../assets/images/rightOn.png'),
            linkList:[{
                src:require('../../assets/images/wx.png'),
            },{
                src:require('../../assets/images/weibo.png'),
            },{
                src:require('../../assets/images/douyin.png'),
            }],
            bannerList:[                 //盒子背景颜色
				{
                    bg:require('../../assets/images/bg1.png'),
                    txt:"书目检索",
                    class:'onepagebg1'
				},
				{
					bg:"#87d9e1",
                    txt:"最新资讯",
                    class:'onepagebg2'
				},
				{
					bg:"#8185d7",
                    txt:"新书推荐",
                    class:'onepagebg3'
				},
				{
					bg:"#e187cf",
                    txt:"精彩活动",
                    class:'onepagebg4'
                },
                {
					bg:"#e187cf",
                    txt:"数字资源",
                    class:'onepagebg5'
				}
			],
			offsetheight:document.documentElement.clientHeight,    //获取当前页面的高度
			fullPage:0,           //当前在第几页
            fullPageNum:false,        //是否在滑动
            searchValue:"",//第一页的输入的值
            radio: '1',//第一页的单选框默认值
            banner_index:0,//banner当前的下标
            banner_length:4,//banner总数
            showimg:true,//显示hover的箭头
            onindexShowPic:-1,//显示hover的箭头的下标
          }
        },
        created(){
            this.imgUrl = url.imgUrl; 
           
        },
        mounted(){
            //
            //在元素加载完毕的时候添加鼠标滑动事件
            //
            if(document.addEventListener){
                document.addEventListener('DOMMouseScroll',this.scroll,false);
            }
            window.onmousewheel=document.onmousewheel=this.scroll;
            window.onresize=this.resize;
        },

        methods:{
            resize(){
                this.offsetheight = document.documentElement.clientHeight;
            },
            //
            //点击左侧小点时跳转到相应的page
            //
            pageInfo(index){
                this.fullPage=index;
                console.log(this.fullPage)
            },
            //
            //鼠标事件
            //
            scroll(e){
                e=e || window.event;
                //
                //是否正在滑动
                //
                if(this.fullPageNum){
                    return false;
                }
                //
                //   e.wheelDelta为负数时向下滑动
                //
                if(e.wheelDelta<0){
                    if(this.fullPage>=4){
                        return false
                    }
                    this.fullPageNum=true;
                    this.pageInfo(this.fullPage+1);
                    //
                    //  css设置动画事件为1000，所以等到1000ms后滚动状态为false
                    //
                    setTimeout(()=>{
                        this.fullPageNum=false;
                    },1000)
                //
                //   否则就是向上划
                //
                }else{
                    if(this.fullPage<=0){
                        return false;
                    }
                    this.fullPageNum=true;
                    this.pageInfo(this.fullPage-1);
                    setTimeout(()=>{
                        this.fullPageNum=false;
                    },1000)
                }
            },
            banner_change(index){
                this.banner_index = index;
            },
            // 外部控制banner图
            setActiveItem(index,type){
                if(type=='reduce'){
                    index = index-1;
                    if(index<0){
                        index = this.banner_length-1
                    }else{
                        index = index
                    }
                    this.$refs.carousel[0].setActiveItem(index);
                }else{
                    index = index+1;
                    if(index==this.banner_length){
                        index = 0
                    }else{
                        index = index
                    }
                    this.$refs.carousel[0].setActiveItem(index);
                }
            }
        },
        filters:{
            getAllDataTime(times){
                var d = new Date(times);
                var year = d.getFullYear();
                var month = d.getMonth() + 1;
                var day = d.getDate() < 10 ? '0' + d.getDate() : '' + d.getDate();
                return year + '年' + month + '月' + day+'日';
            },
            getNoYearDataTime(times){
                var d = new Date(times);
                var year = d.getFullYear();
                var month = d.getMonth() + 1;
                var day = d.getDate() < 10 ? '0' + d.getDate() : '' + d.getDate();
                return  month + '月' + day+'日';
            },
            morestrings(string){
                if(string.length>400){
                    return string.substring(0,400)+'...'
                }else{
                    return string
                }
                
            },
        }
}
</script>

<style scoped>
.section{
    height: 100%;
    overflow: hidden;
}
.container{
    width: 100%;height: 100%;
    position: relative; transform: translate3d(0px, 0px, 0px); transition: all 1000ms ease;
}
.fixed-list{
    position: fixed;
    top: 40%;right: 20px;
}
.fixed-list>div{
    cursor: pointer;
    padding: 10px;
    margin: 5px 0;
    background-size: 100% 100%;
}
.onspan{
    background: url(../../assets/images/tipsbg.png) no-repeat;
    color: #ffffff;
}
.onspan>span:last-child{
    background-color: #ffffff !important;
}
.fixed-list>div>span{
    float: left;
}
.fixed-list>div>span:first-child{
    margin-right: 20px;;
}
.fixed-list>div>span:last-child{
    width: 15px;
    height: 15px;
    background:rgba(0,0,0,0.2);
    border-radius: 50%;
}
.onepage{
    position: relative;
}
.onepagebg1{
    background:url(../../assets/images/bg1.png) no-repeat center center;
    background-size: 100% 100%;
}
.onepagebg2{
    background:url(../../assets/images/bg1.png) no-repeat center center;
    background-size: 100% 100%;
}
.onepagebg3{
    background:url(../../assets/images/bg1.png) no-repeat center center;
    background-size: 100% 100%;
}
.onepagebg4{
    background:url(../../assets/images/bg1.png) no-repeat center center;
    background-size: 100% 100%;
}
.onepagebg5{
    background:url(../../assets/images/bg1.png) no-repeat center center;
    background-size: 100% 100%;
}
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
.color{
    background-color:#000 !important;
}
.fixedOutlink{
    position: fixed;
    top: 60%;
    left: 20px;
}
.fixedOutlink>div>img{
    margin: 10px 0;
}
.centerInfo{
    width: 33%;
    margin: 0 auto;
    padding-top: 20vh;
}
.oneInput{
    margin-top: 20px;
    padding: 20px 45px;
    background:rgba(51,153,255,0.3);
    border-radius:10px;
}
.oneInput>div:first-child{
    padding: 0 1%;
    background:rgba(255,255,255,1);
    border-radius:15px;
}
.oneInput>div:first-child>label{
    width:25%;
    color: #030303;
    margin-right:5%;
    text-align:center;
    border-right:1px solid #000000
}
.areas{
    width:70vw;
    margin: 0 auto;
    padding-top: 20vh;
}
.info_area{
    height: 65vh;
    padding: 3% 5%;
    background-color: #fff;
    border-radius: 10px;
}
.new_top h3{
    font-size:18px;
    font-family:MicrosoftYaHei;
    font-weight:400;
    color:rgba(3,3,3,1);
    line-height:30px;
}
.new_top small{
    font-size:14px;
    font-family:MicrosoftYaHei;
    font-weight:400;
    color:rgba(3,3,3,1);
    line-height:18px;
}
.new_top p{
    font-size:16px;
    font-family:MicrosoftYaHei;
    font-weight:400;
    color:rgba(102,102,102,1);
    line-height:24px;
}
.more_news{
    width: 20%;
    text-align: center;
}
.more_news span{
    width:100%;
    background-color: #000000;
    color: #ffffff;
    line-height: 36px;
    cursor: pointer;
}
.new_bottom{
    margin-top: 30px;
    height: 80%;
}
.new_bottom>div{
    width: 50%;
}
.book_bottom{
    margin-top: 30px;
    height: 80%;
}
.book_bottom>div{
    width:100%
}
.banners{
    padding-right: 10%;

}
.new_one{
    position: relative;
    margin-top: 20px;
    padding-left: 10%;
}
.new_one h3{
    font-size:17px;
    font-family:MicrosoftYaHei;
    font-weight:400;
    color:rgba(3,3,3,1);
    line-height:24px;
}
.new_one small{
    font-size:14px;
    font-family:MicrosoftYaHei;
    font-weight:400;
    color:rgba(102,102,102,1);
    line-height:18px;
}
.new_one span{
    font-size:14px;
    font-family:MicrosoftYaHei;
    font-weight:400;
    color:rgba(3,3,3,1);
    line-height:24px;
}
.new_one i{
    cursor: pointer;
    line-height:24px;
}
.blaack_line{
    width: 1px;
    height: calc(150% + 30px);
    position: absolute;
    top: -30px;
    left: 5%;
    background-color: #000000;
}
.new_txt{
    width: 100%;
    margin-bottom: 10px;
}
.new_txt>div:first-child{
    width:70%;
    margin-right: 5%;
}
.new_detail{
    width: 100%;
}
.new_detail>div:first-child{
    width:70%;
    margin-right: 5%;
}
.newList>div{
    padding: 15px 0;
    border-bottom: 1px solid #E6E6E6;
}
.newList>div:first-child{
    padding-top:0px;
}
.new_item h3{
    font-size:17px;
    font-family:MicrosoftYaHei;
    font-weight:400;
    color:rgba(3,3,3,1);
    line-height:24px;
}
.new_item small{
    font-size:14px;
    font-family:MicrosoftYaHei;
    font-weight:400;
    color:rgba(102,102,102,1);
    line-height:18px;
    white-space: nowrap;
}
.new_item span{
    font-size:14px;
    font-family:MicrosoftYaHei;
    font-weight:400;
    color:rgba(102,102,102,1);
    line-height:25px;
}
.new_detail{
    font-size:14px;
    font-family:MicrosoftYaHei;
    font-weight:400;
    color:rgba(102,102,102,1);
    line-height:18px;
}
.onebook>img{
    margin-bottom: 15px;
}
.onebook>span{
    font-size:14px;
    font-family:MicrosoftYaHei;
    font-weight:400;
    color:rgba(3,3,3,1);
    line-height: 24px;
}
.oneactivess>img{
    margin-bottom: 15px;
}
.oneactivess>h3{
    font-size: 16px;
    font-family:MicrosoftYaHei;
    font-weight:400;
    color:rgba(51,51,51,1);
    line-height:20px;
    margin-bottom: 10px;
}
.oneactivess>p{
    font-size: 12px;
    font-family:MicrosoftYaHei;
    font-weight:400;
    color:rgba(3,3,3,1);
    line-height:18px;
}
.oneactivess>div{
    font-size: 15px;
    font-family:MicrosoftYaHei;
    font-weight:400;
    color:rgba(3,3,3,1);
    line-height:18px;
    margin-top: 30px;
    cursor: pointer;
}
.oneactivess>div:hover{
    color: #00A0E9;
}
.number{
    width:70vw;
    margin: 0 auto;
    padding-top: 20vh;
}
.number_area{
    height: 65vh;
    padding: 3% 5%;
    background-color: #fff;
    border-radius: 10px;
}
.number_area p{
    font-size:14px;
    font-family:MicrosoftYaHei;
    font-weight:400;
    color:rgba(3,3,3,1);
    line-height: 28px;
}
.number_area p:first-child{
    font-size:18px;
    font-family:MicrosoftYaHei;
    font-weight:400;
    color:rgba(3,3,3,1);
    line-height:36px;
}
.numberlist{
    width: 100%;
    height: 100%;
}
.numberlist>div{
    width:20%;
    display: inline-block;
    height: 50%;
    padding: 2%;
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
}
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
    padding: 5px 5%;
}
.footleft{
    font-size:14px;
    font-family:MicrosoftYaHei;
    font-weight:400;
    color:rgba(255,255,255,1);
    line-height:14px;
}
</style>
