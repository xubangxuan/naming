<template>
  <div id="app">
    <hearderDom></hearderDom>
    <router-view/>
  </div>
</template>

<script>
import url from '@/serverApi.js'
import { Message } from 'element-ui'
import hearderDom from '@/components/compont/commonTop.vue'
export default {
    components:{
        hearderDom,
    },
    name: 'App',
}
</script>

<style>
html {
    font-family: "微软雅黑,arial, helvetica, sans-serif";
    /* background-color: #f5f5f5; */
}

html,
body,
header,
section,
footer,
div,
ul,
ol,
li,
img,
a,
span,
em,
del,
legend,
center,
strong,
var,
fieldset,
form,
label,
dl,
dt,
dd,
cite,
input,
hr,
time,
mark,
code,
figcaption,
figure,
textarea,
h1,
h2,
h3,
h4,
h5,
h6,
p {
    margin: 0;
    border: 0;
    padding: 0;
    font-style: normal;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}

body {
    line-height: 1;
}

html,
body {
    /* user-select:none; */
    -webkit-touch-callout: none;
    -webkit-text-size-adjust:none;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    /* -webkit-user-select:none; */
}

nav,
article,
aside,
details,
main,
header,
footer,
section,
fieldset,
figcaption,
figure {
    display: block;
}

img,
a,
button,
em,
del,
strong,
var,
label,
cite,
small,
time,
mark,
code,
textarea {
    display: inline-block;
}

a {
    text-decoration: none !important;
    color: #666666;
}

a {
    display: block;
}

header,
section,
footer {
    position: relative;
}

ol,
ul {
    list-style: none;
}

input,
button,
textarea {
    border: 0;
    margin: 0;
    padding: 0;
    font-size: 1em;
    line-height: 1em;
    /*-webkit-appearance:none;*/
    background-color: rgba(0, 0, 0, 0);
    outline: none;
}

span {
    display: inline-block;
}

a:active,
a:hover {
    outline: 0;
}

a,
a:visited {
    text-decoration: none;
}

img {
    vertical-align: top;
}

label,
.wordWrap {
    word-wrap: break-word;
    word-break: break-all;
}

table {
    border-collapse: collapse;
    border-spacing: 0;
}

td,
th {
    padding: 0;
}
h4{
    font-size: 15px;
    font-weight: normal;
}
.projece{
    min-width: 0;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
}
.projece2{
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}
.serverwindows img{
    max-width: 100%;
    height: auto;
    margin: 10px 0;
}
.clearfix:after {
    content: ' ';
    display: block;
    clear: both;
    visibility: hidden;
    line-height: 0;
    height: 0;
}
[v-cloak] {
    display: none;
}
.contents{
  height: 100%;
  display: flex;
  display: -webkit-flex;
  flex-direction: row;
  justify-content: center;
  align-items:center;
  -webkit-flex-direction: row;
  -webkit-justify-content: center;
  -webkit-align-items:center;
}
.contentsBottom{
    height: 100%;
    display: flex;
    display: -webkit-flex;
    flex-direction: row;
    justify-content: center;
    align-items:flex-end;
    -webkit-flex-direction: row;
    -webkit-justify-content: center;
    -webkit-align-items:flex-end;
}
.contentsR{
  height: 100%;
  display: flex;
  display: -webkit-flex;
  flex-direction: row-reverse;
  /* justify-content: center; */
  align-items:center;
  -webkit-flex-direction: row-reverse;
  /* -webkit-justify-content: center; */
  -webkit-align-items:center;
}
.contentsL{
  height: 100%;
  display: flex;
  display: -webkit-flex;
  flex-direction: row;
  /* justify-content: center; */
  align-items:center;
  -webkit-flex-direction: row;
  /* -webkit-justify-content: center; */
  -webkit-align-items:center;
}
.contentsNav{
    height: 100%;
    display: flex;
    display: -webkit-flex;
    flex-direction: row;
    justify-content: space-between;
    align-items:center;
    -webkit-flex-direction: row;
    -webkit-justify-content: space-between;
}
.contentsNews{
    height: 100%;
    display: flex;
    display: -webkit-flex;
    flex-direction: column;
    justify-content: space-between;
    /* align-items:center; */
    -webkit-flex-direction: column;
    -webkit-justify-content: space-between;
}
.contentsTit{
    height: 100%;
    display: flex;
    display: -webkit-flex;
    flex-direction: row;
    align-items:center;
    -webkit-flex-direction: row;
    -webkit-align-items:center;
}
.contentsStep{
    display: flex;
    display: -webkit-flex;
    flex-direction: row;
    align-items:center;
    justify-content: space-between;
    -webkit-flex-direction: row;
    -webkit-align-items:center;
    -webkit-justify-content: space-between;
}
.contentsBut{
    display: flex;
    display: -webkit-flex;
    flex-direction: row;
    justify-content: center;
    align-items:center;
    -webkit-flex-direction: row;
    -webkit-justify-content: center;
    -webkit-align-items:center;
}
.contentss{
  height: 100%;
  display: flex;
  display: -webkit-flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
  -webkit-flex-direction: column;
  -webkit-justify-content: center;
  -webkit-align-items:center;
}
.contentssL{
  height: 100%;
  display: flex;
  display: -webkit-flex;
  flex-direction: column;
  justify-content: center;
  /* align-items:center; */
  -webkit-flex-direction: column;
  -webkit-justify-content: center;
  /* -webkit-align-items:center; */
}
.contentssBut{
    display: flex;
  display: -webkit-flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
  -webkit-flex-direction: column;
  -webkit-justify-content: center;
  -webkit-align-items:center;
}
.pad{
  margin: 1rem 0;
}
.bgF5{
    height: 10px;
    background-color: #F5F5F5;
}
.el-input__inner{
    border: none;
    padding-left: 0 !important;
    padding-right: 20px !important;
}
#wanshanlogin .el-input__inner{
    border: none;
    padding-left: 35px !important;
    padding-right: 5px !important;
}
.el-input__suffix{
    right: 15px;
}
.el-tabs__header{
    margin: 0 0 0 !important;
    
}
.el-tabs__nav-wrap::after{
    height: 0;
}
.el-tabs__item{
    color: #666666;
    font-size: 18px !important;
}
.el-tabs__item.is-active{
    color: #333333;
}
.el-tabs__active-bar{
    background-color: #1B1B1B;
}
.el-tabs__item:hover{
    color: #333333
}
.is-focus{
    border: none;
}

.el-dialog{
    width:100%;
    background-color: rgba(255,255,255,0)
}
.el-dialog__header{
    padding: 0;
    height: 0;
}
.el-dialog__body{
    padding: 0 0;
    
}
.el-carousel__indicators{
    bottom: 50px;
}
.indexBanner .el-carousel__indicators .is-active .el-carousel__button{
    width: 40px;
    height: 15px;
    border-radius: 7px;
    background-color: red;
}
.indexNews .el-carousel__indicators{
    bottom: 0;
    left: 80%;
    
}
.indexNews .el-carousel__indicator{
    padding: 15px 4px;
}
.el-carousel__button{
    width: 15px;
    height: 15px;
    border-radius: 50%;
}
.el-icon-close:before{
    color: #ffffff;
}
#indexlogin .el-icon-close:before{
    color: #B6BABD;
}
.el-input-number{
    width: 140px;
}
.appStep .el-input__inner{
    border: none;
    padding-left: 15px !important;
    padding-right: 15px !important;
    
} 
#indexlogin .el-input__inner{
    border:1px solid #e6e6e6;
    background-color: #e6e6e6 ;
    border-radius: 20px;
    padding-left: 50px !important;
    padding-right: 0 !important;
} 
.myteams  .el-input__inner{
    border:1px solid #d9d9d9;
    padding-left: 20px !important;
    padding-right: 0 !important;
} 
#indexlogin .el-input__prefix{
    left: 15px;
}
#addParert .el-input__inner{
    border:1px solid #d9d9d9;
    background-color: #F5F5F5;
    padding-left: 20px !important;
    padding-right: 0 !important;
} 
#myAdd .el-dialog{
    box-shadow: none;
    -webkit-box-shadow:none;
}
.el-pagination.is-background .el-pager li:not(.disabled).active{
    background-color: #000;
}
.textname span{
    display: inline;
}
.mypages li:hover{
    color: #ffffff !important;
    background-color: #000 !important;
}
.el-loading-spinner i{
    color: #ffffff;
}
.el-loading-spinner .el-loading-text{
    color: #ffffff;
}
</style>
