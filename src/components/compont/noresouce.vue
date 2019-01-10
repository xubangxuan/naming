<template>
    <div>
        <div class="contentss">
            <img width="370px" height="260px"  :src="noresouce" alt="">
            <p class="noresouce">抱歉，暂时没有数据......</p>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                noresouce:require('../../assets/images/noResouce.png'),
            }
        },
    }
</script>

<style scoped>
.noresouce{
    font-size:20px;
    text-align: center;
    font-family:MicrosoftYaHei;
    font-weight:400;
    color:rgba(102,102,102,1);
    margin-top: 56px;
    margin-bottom: 100px;
}
</style>