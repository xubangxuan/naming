<template>
    <div v-title data-title="新书推荐" v-cloak>
        <div class="all">
            <div class="top">
                <img width="100%" height="100%" :src="topimg" alt="">
            </div>
            <div class="mains">
                <div class="lists">
                    <div class="book_bottom contentssLR_no" style="margin-top:0px">
                        <div class="booklist" style="width:100%">
                            <div @click="godetail(item.id)" class="onebook contentssL" v-for="(item,index) in 10" :key="index">
                                <img width='100%' height="auto" :src="bookimg" alt="">
                                <span>书名:《跟任何都...》</span>
                                <span>作者:张三</span>
                                <span>索书号:G12342222</span>
                            </div>
                        </div>
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
                topimg:require('../../assets/images/banner.png'),
                bookimg:require('../../assets/images/book.png'),
            }
        },
        methods:{
            godetail(id){
                this.$router.push({
                    path:'/newBookDetail',
                    query:{
                        id:id
                    }
                })
            }
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
.booklist>div{
    display: inline-block;
    width: 15%;
    margin-right: 5%;
    margin-top: 80px;
}
.booklist>div:nth-child(5n){
    margin-right: 0;
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
</style>