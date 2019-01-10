<template>
    <div v-cloak>
         <!-- 顶部logo -->
        <!-- <hearderDom></hearderDom> -->
        <!-- banner -->
        <div class="indexBanner">
            <el-carousel arrow='never' trigger="click" height="500px">
                <el-carousel-item v-for="(item,index) in banners" :key="index">
                    <div class="contents">
                        <img @click="links(item.link)" style="height:500px" :src="imgUrl + item.img" alt="">
                    </div>
                </el-carousel-item>
            </el-carousel>
        </div>
        <div class="allContent">
            <div style="width:80%;margin:0 auto;">
                <!-- 上面的筛选条件区域 -->
                <div class="styleChoose">
                    <span @click="spanClick(index,item.id)" class="allStyles" :class="onIndex==index?'onAllStyles':''" v-for="(item,index) in stylelist" :key="index">
                        {{item.name}}
                    </span>
                </div>
                <!-- 师资力量 -->
                <div v-if="list" class="personChoose">
                    <div v-for="(item,index) in list" :key="index" >
                        <div class="contentss">
                            <img style='width:244px;height:240px' :src="imgUrl+item.img" alt="">
                            <span class="names">{{item.name}}</span>
                            <span class="guanzis">{{item.title}}</span>
                            <el-button  @click="goDetail(item.id)" style="margin-top:12px;background-color:red;color:#ffffff;width:160px" round>立即预约</el-button>
                        </div>
                    </div>
                    <p class="contents mypages" style="margin:20px auto;width:100%">
                        <el-pagination 
                            @current-change = 'onpage'
                            :current-page='page'
                            background
                            :page-size=15
                            layout="prev, pager, next"
                            :page-count="allPage">
                        </el-pagination>
                    </p>
                </div>
                <div v-else>
                   <noresouce></noresouce>
               </div>
            </div>
        </div>
        <el-dialog width='640px' :visible.sync="dialogFormVisible">
            <div style="height:50px;background:rgba(91,44,44,1);">
                <span style="line-height:50px;color:#ffffff;padding-left:30px;font-size:16px">预约信息</span>
            </div>
            <div class="contentss" style="height:450px;background-color:#ffffff;">
                <div style="margin:20px 0">
                    <el-select v-model="value" @change="getApm(value)" placeholder="请选择">
                        <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.date+'（'+item.week+'）'"
                        :value="item.date">
                        </el-option>
                    </el-select>
                    <el-select v-model="valueDate" value-key="noon" @change="getNumber(valueDate)"  placeholder="请选择">
                        <el-option
                        
                        v-for="item in optionsDate"
                        :key="item.noon"
                        :label="item.title"
                        :disabled="!item.effe"
                        :value="item">
                        </el-option>
                    </el-select>
                </div>
                <div>
                    <div style="width:420px">
                        <el-input
                            style="width:100%;"
                            type="textarea"
                            :rows="7"
                            placeholder="请填写信息备注"
                            resize="none"
                            v-model="textarea">
                        </el-input>
                    </div>
                    <div class="contentsStep" style="margin-top:30px">
                        <div>库存数量</div>
                        <div>
                            <span>{{kuncunNumber}}</span>
                        </div>
                    </div>
                    <div class="contentsStep" style="margin-top:30px">
                        <div>预约数量</div>
                        <div>
                            <el-input-number v-model="num1" :min="0" :max="kuncunNumber"  label=""></el-input-number>
                        </div>
                    </div>
                    <div class="contents" style="width:420px">
                        <el-button @click="startYuyue" :disabled="kuncunNumber==0?true:false" style="margin-top:20px" type="primary" round>提交</el-button>
                    </div>
                </div>
            </div>
                
        </el-dialog>
        <!-- 尾部 -->
        <footersDom></footersDom>
    </div>
</template>

<script>
import url from '@/serverApi.js'
import axios from 'axios'
import { Message } from 'element-ui'
import hearderDom from '../compont/commonTop.vue'
import footersDom from '../compont/commonFooter.vue'
import noresouce from '../compont/noresouce.vue'
    export default {
        components:{
            hearderDom,
            footersDom,
            noresouce
        },
        data () {
          return {
            imgUrl:'',
            page:1,
            allPage:1,
            onIndex:0,
            onid:'',//当前id
            stylelist:[],//所有分馆
            list:[],
            banners:[],
            options:[],//弹框的下拉框的数据列表
            value:'',//下拉框的默认值
            onequipmtId:'',//当前设备id
            optionsDate:[],//弹框的第二个下拉框的数据列表
            valueDate:'',//下拉框的默认值(上下午汉字)
            kuncunNumber:0,//库存数
            textarea:"",
            dialogFormVisible:false,
            num1:1,
          }
        },
        created(){
            this.imgUrl = url.imgUrl; 
            this.getBanner();
            this.getAllname();
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
            getAllname(){
                this.axios.get(url.branch)
                .then(res=>{
                    console.log(res)
                    if(res.data.code==200){
                        this.stylelist = res.data.data;
                        this.onid = res.data.data[0].id;
                        this.getJieShao();
                    }
                })
                .catch(err=>{
                    console.log(err)
                })
            },
            
            //选择类型
            spanClick(index,id){
                this.page = 1;
                this.onIndex = index;
                this.onid = id;
                this.getJieShao()
            },
            // 获取时间
            goDetail(id){
                if(this.$store.state.user.token){
                    this.onequipmtId = id;
                    var param = new URLSearchParams();
                    param.append('id',id)
                    this.axios.post(url.orderdialog,param)
                    .then(res=>{
                        console.log(res)
                        if(res.data.code==200){
                            this.dialogFormVisible = true;
                            this.options = res.data.data;
                            this.value = res.data.data[1];
                            this.getApm(res.data.data[1].date)
                        }else{
                            this.$message.error(res.data.msg)
                        }
                    })
                    .catch(err=>{
                        // loading.close();
                        console.log(err)
                    })
                }else{
                    this.$message.error('你还未登录，请登录后重试')
                }
            },
            // select值变化获取上下午时间
            getApm(value){
                var param = new URLSearchParams();
                param.append('id',this.onequipmtId);
                param.append('date',value);
                this.axios.post(url.orderdialogDate,param)
                .then(res=>{
                    console.log(res)
                    if(res.data.code==200){
                        this.optionsDate = res.data.data;
                        this.valueDate = res.data.data[0].title;
                        this.getNumber(res.data.data[0])
                    }
                })
                .catch(err=>{
                    console.log(err)
                })
            },
            // 获取库存
            getNumber(item){
                console.log(item)
                if(item.effe){
                    this.kuncunNumber = item.inventory;
                }else{
                    this.kuncunNumber = 0
                }
            },
            // 获取库存
            startYuyue(){
                var stage = '';
                if(this.valueDate =='上午'){
                    stage = 'am'
                }
                if(this.valueDate =='下午'){
                    stage = 'pm'
                }
                var param = new URLSearchParams();
                param.append('id',this.onequipmtId)
                param.append('token',this.$store.state.user.token)
                param.append('date',this.value.date)
                param.append('stage',stage)
                param.append('number',this.num1)
                param.append('remark',this.textarea)
                this.axios.post(url.orderdialogYuyue,param)
                .then(res=>{
                    console.log(res)
                    if(res.data.code==200){
                        this.dialogFormVisible = false;
                        this.textarea = '';
                        this.num1 = 0;
                        this.$message.success(res.data.msg)

                    }else{
                        this.$message.error(res.data.msg)
                    }
                })
                .catch(err=>{
                    console.log(err)
                })
            },
            getJieShao(){
                this.axios.get(url.orderequimt,{
                    params:{
                        stadium_id:this.onid,
                        page:this.page
                    }
                })
                .then(res=>{
                    console.log(res)
                    if(res.data.code==200){
                        this.allPage = res.data.data.total;
                        this.list = res.data.data.equip;
                    }
                })
                .catch(err=>{
                    console.log(err)
                })
            },
            onpage(page){
                // 当前页
                console.log(page)
                this.page = page;
                this.getJieShao();
            },
            // handleChange(value) {
            //     console.log(value);
            // }
        },
    }
</script>

<style scoped>
.styleChoose{
    margin-top: 26px;
    padding-top: 16px;
    padding-bottom: 26px;
    border-bottom: 1px solid #eeeeee;
}
.allStyles{
    /* width:105px; */
    height:30px;
    padding: 0 24px;
    color: #999999;
    background:rgba(238,238,238,1);
    border-radius:15px;
    line-height: 30px;
    text-align: center;
    cursor: pointer;
    margin-bottom: 28px;
    margin-right: 28px;
}
.onAllStyles{
    background:rgba(254,5,5,1);
    color: #ffffff;
}
.personChoose{
    margin-top: 80px;
}
.personChoose>div{
    display: inline-block;
    width: 22%;
    margin-left: 4%;
    margin-bottom: 60px;
}
.personChoose>div:nth-child(4n+1){
    margin-left: 0;
}
.names{
    font-size:18px;
    font-family:SourceHanSansCN-Regular;
    font-weight:400;
    color:rgba(51,51,51,1);
    margin-top:25px;
}
.guanzis{
    height:14px;
    font-size:14px;
    font-family:SourceHanSansCN-Regular;
    font-weight:400;
    color:rgba(102,102,102,1);
    margin-top: 13px;
}
</style>