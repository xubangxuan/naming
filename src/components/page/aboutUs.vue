<template>
    <div v-cloak>
         <!-- 顶部logo -->
        <!-- <hearderDom></hearderDom> -->
        <!-- banner -->
        <div class="indexBanner">
            <el-carousel arrow='never' trigger="click" height="500px">
                <el-carousel-item v-for="(item,index) in banners" :key="index">
                    <div class="contents">
                        <img @click="links(item.link)" style="width:100%;height:500px" :src="imgUrl + item.img" alt="">
                    </div>
                </el-carousel-item>
            </el-carousel>
        </div>
        <div class="allContent">
            <div style="width:80%;margin:0 auto;">
                <div class="allp">
                    <p>本馆简介：</p>
                    <p>
                        {{obj.intro}}
                    </p>
                    <p style="margin-top:20px">
                        开放时间：{{obj.dispark_time}}
                    </p>
                    <p style="margin-top:20px">
                        联系电话：{{obj.tel}}
                    </p>
                </div>
                <div  class="allp">
                    <p>呈贡区文化分馆布局图</p>
                    <div>
                        <div id="container"  style="height:500px"></div> 
                    </div>
                </div>
            </div>
        </div>
        <!-- 尾部 -->
        <footersDom></footersDom>
    </div>
</template>
<script>
import url from '@/serverApi.js'
import { Message } from 'element-ui'
import hearderDom from '../compont/commonTop.vue'
import footersDom from '../compont/commonFooter.vue'

    export default {
        components:{
            hearderDom,
            footersDom
        },
        data () {
          return {
            imgUrl:'',
            banners:[],
            obj:{},
          }
        },
        created(){
            this.imgUrl = url.imgUrl; 
            
        },
        mounted(){
            this.getBanner();
            this.getJieShao();
        },
        methods:{
            // 获取banner
            getBanner(){
                this.axios.get(url.getIndexBanner)
                .then(res=>{
                    if(res.data.code==200){
                        // console.log(res)
                        this.banners = res.data.data;
                    }
                })
                .catch(err=>{
                    console.log(err)
                })
            },
            // 跳转页面
            links(url){
                location.href = url;
            },
            // 获取本馆概况
            getJieShao(){
                this.axios.get(url.getAlltotal)
                .then(res=>{
                    console.log(res)
                    if(res.data.code==200){
                        this.obj = res.data.data;

                        this.mymaps(res.data.data.address);
                    }
                })
                .catch(err=>{
                    console.log(err)
                })
            },
            mymaps(list){
                var map = new AMap.Map('container', {
                    zoom:12,//级别
                    center: [102.7989, 24.888838],//中心点坐标
                });
                AMapUI.loadUI(['overlay/SimpleInfoWindow'], function(SimpleInfoWindow) {
                    var infoWindow = new AMap.InfoWindow({
                        isCustom: true,  //使用自定义窗体
                        offset: new AMap.Pixel(-1, -35)
                    });
                    for(let i=0;i<list.length;i++){
                        var marker = new AMap.Marker({
                            map: map,
                            zIndex: 9999,
                            position: [list[i].lon,list[i].lat]
                        });
                        marker.on('click', markerClick);
                        marker.emit('click', {target: marker});
                        marker.content = 
                        `<div style='background-color: #ffffff;padding:10px 15px;border:1px solid #222222;'>
                                <p style='margin-top:10px;padding:5px 0;border-bottom:1px solid #cccccc;'>${list[i].name}</p>
                                <p style='margin:15px;color:#222222'>${list[i].address}</p>
                        </div>`
                    }
                    function markerClick(e) {
                        infoWindow.setContent(e.target.content);//必须要用setContent方法
                        infoWindow.open(map, e.target.getPosition());
                    }
                })
                map.on("complete", function(){
                    console.log("地图加载完成！");  
                });
            }
        },
    }
</script>

<style scoped>
.allp{
    margin: 60px 0;
    
}
.allp>p{
    font-size:14px;
    font-family:MicrosoftYaHei;
    font-weight:400;
    color:rgba(51,51,51,1);
    line-height:28px;
}
.allp>p:first-child{
    font-size:20px;
    font-family:MicrosoftYaHei;
    font-weight:400;
    color:rgba(51,51,51,1);
    line-height:28px;
    margin-bottom: 20px;
}
</style>