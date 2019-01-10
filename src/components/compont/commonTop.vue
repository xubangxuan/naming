<template>
  <div v-title data-title="呈贡区文化馆数字平台" v-cloak>
        <!-- 顶部logo -->
        <div class="top">
            <div style="width:80%;margin:0 auto">
                <el-row >
                    <el-col :span="12">
                        <div class="grid-content" style="height:108px">
                            <div class="contents">
                                <img width="100%" :src="logoImg" alt="">
                            </div>
                        </div>
                    </el-col>
                    <el-col :span="12">
                        <div class="grid-content">
                            <div class="contentsR" style="height:108px">
                                <div v-if="logins" @mouseenter="mouseEnter('loginInfo')" @mouseleave='mouseLeave("loginInfo")' style="position:relative">
                                    <div class="contents">
                                        <img style="width:38px;height:38px;border-radius:50%;" :src="headImg" alt="">
                                    </div>
                                    <div v-if="loginInfo" class="personInfo">
                                        <div @click="$router.push('/myTeam')">我的团队</div>
                                        <div @click="$router.push('/myInfo')">资料修改</div>
                                        <div @click="personChaneg">密码修改</div>
                                        <div @click="$router.push('/cultureBill')">个人文化账单</div>
                                        <div @click="$router.push('/scoreChange')">积分兑换</div>
                                        <div @click="$router.push('/scoreChangeHistory')">积分兑换记录</div>
                                        <div @click="$router.push('/myOrder')">我的预约</div>
                                        <div @click="$router.push('/myAct')">我的活动</div>
                                        <div @click="$router.push('/systemlist')">系统消息</div>
                                        <div @click="loginout">退出登录</div>
                                    </div>
                                </div>
                                <div v-else>
                                    <span @click="userLogin" class="loginsAndRegister">登录/注册</span>
                                </div>
                                <!-- <div class="indexInput">
                                    <el-input
                                        style="width:250px;margin-right: 20px;border:1px solid #DCDCDC;border-radius:25px;padding:0 20px"
                                        placeholder="请输入内容"
                                        suffix-icon="el-icon-search"
                                        v-model="searchVal">
                                    </el-input>
                                </div> -->
                            </div>
                        </div>
                    </el-col>
                </el-row>
            </div>
            <!-- 登录 -->
            <el-dialog id="indexlogin" width='450px' :visible.sync="haslogins">
                <div style="height:50px;background:rgba(255,255,255,1);border-top-left-radius: 10px;border-top-right-radius: 10px;">
                    <span @click="showLogin" :style="{'color':phoneLogin?'#333333':'#999999'}" v-text="'账号登录'" style="cursor:pointer;line-height:50px;font-family:MicrosoftYaHei;padding-left:30px;font-size:16px"></span>
                    <span @click="showLogin" :style="{'color':!phoneLogin?'#333333':'#999999'}" v-text="'微信登录'" style="cursor:pointer;line-height:50px;font-family:MicrosoftYaHei;padding-left:30px;font-size:16px"></span>
                </div>
                <div>
                    <div v-show="phoneLogin" style="min-height:400px;background-color:#ffffff;padding:30px;border-bottom-left-radius: 10px;border-bottom-right-radius: 10px;">
                        <el-input
                            placeholder="请输入邮箱账号"
                            v-model="loginemail">
                            <i slot="prefix" class="el-input__icon el-icon-mobile-phone"></i>
                        </el-input>
                        <div style="width:100%;margin-top:40px">
                            <el-row :gutter="20">
                                <el-col :span="24">
                                    <div class="grid-content">
                                        <el-input
                                            placeholder="请输入密码"
                                            type="password"
                                            v-model="loginmima">
                                            <i slot="prefix" class="el-input__icon el-icon-ump-yanzhengma"></i>
                                        </el-input>
                                    </div>
                                </el-col>
                            </el-row>
                        </div>
                        <div class="contentsBut">
                            <el-button @click="postInfo(loginemail,loginmima)" style="margin-top:60px;width:100%" type="primary" round>提交</el-button>
                        </div>
                        <div  class="contentssBut" style="margin-top:45px;">
                            <div class="contents">
                                <span @click="forgetmima" style="color:#B6BABD;cursor:pointer;">忘记密码</span>
                                <span style="margin:0 3px;color:#B6BABD">/</span>
                                <span @click="haslogins = false;startResigis = true" style="color:#00A0E9;cursor:pointer;">注册新账号</span>
                            </div>
                        </div>
                    </div>
                    <div v-show="!phoneLogin"  class="contentssBut" style="min-height:400px;background-color:#ffffff;padding:30px">
                        <div style="width:300px" id="login_container"></div>
                    </div>
                </div>
                    
            </el-dialog>
            <!-- 信息补录 -->
            <el-dialog id="indexlogin" width='450px' :visible.sync="addInfo">
                <div style="height:50px;background:rgba(255,255,255,1);border-top-left-radius: 10px;border-top-right-radius: 10px;">
                    <span style="line-height:50px;color:#333333;font-family:MicrosoftYaHei;padding-left:30px;font-size:16px">补录信息</span>
                </div>
                <div>
                    <div class="allInput" style="background-color:#ffffff;padding:30px;border-bottom-left-radius: 10px;border-bottom-right-radius: 10px;">
                        <el-input
                            placeholder="请输入邮箱地址"
                            v-model="address">
                            <i slot="prefix" class="el-input__icon el-icon-message"></i>
                        </el-input>
                        <div>邮箱可做账号登录</div>
                        <el-input
                            placeholder="请输入姓名"
                            v-model="name">
                            <i slot="prefix" class="el-input__icon el-icon-ump-ren"></i>
                        </el-input>
                        <div>填写真实姓名</div>
                        <el-input
                            placeholder="请输入手机号"
                            v-model="accountNumber">
                            <i slot="prefix" class="el-input__icon el-icon-mobile-phone"></i>
                        </el-input>
                        <div>填写常用联系电话</div>
                        <el-input
                            placeholder="请输入身份证号"
                            v-model="idcard">
                            <i slot="prefix" class="el-input__icon el-icon-ump-credentials_icon"></i>
                        </el-input>
                        <div>填写匹配的身份证号码</div>
                        <div class="contentsBut" style="margin-top:30px">
                            <el-button @click="wanshanInfo=true;addInfo=false" style="width:100%" type="primary" round>下一步</el-button>
                        </div>
                    </div>
                </div>
                    
            </el-dialog>
            <!-- 完善信息 -->
            <el-dialog id="wanshanlogin" width='450px' :visible.sync="wanshanInfo">
                <div style="height:50px;background:rgba(255,255,255,1);border-top-left-radius: 10px;border-top-right-radius: 10px;">
                    <span style="line-height:50px;color:#333333;font-family:MicrosoftYaHei;padding-left:30px;font-size:16px">完善信息</span>
                </div>
                <div>
                    <div style="height:400px;background-color:#ffffff;padding:30px;border-bottom-left-radius: 10px;border-bottom-right-radius: 10px;">
                        
                        <div style="width:100%;">
                            <div class="contentss">
                                <img style="width:100px;height:100px" :src="emailimg" alt="">
                                <p style="color:#333333;font-size:14px;margin:14px 0">邮箱验证后，即可完成邮箱绑定！</p>
                                <p style="color:#B6BABD;font-size:12px">只需登录邮箱{{'12345678911@qq.com'}}，获取验证码输入即可！</p>
                            </div>
                            <el-row :gutter="20" style="margin:30px 0">
                                <el-col :span="14">
                                    <div class="grid-content">
                                        <el-input
                                            placeholder="请输入验证码"
                                            v-model="yzmNumber">
                                            <i slot="prefix" class="el-input__icon el-icon-ump-yanzhengma"></i>
                                        </el-input>
                                    </div>
                                </el-col>
                                <el-col :span="10">
                                    <div class="grid-content">
                                        <div class="contents">
                                            <el-button  type="primary" style="border-radius:20px">立即获取</el-button>
                                        </div>
                                    </div>
                                </el-col>
                            </el-row>
                        </div>
                        <div class="contentsBut">
                            <el-button style="width:100%" type="primary" round>立即绑定邮箱</el-button>
                        </div>
                        <div  class="contentssBut" style="margin-top:25px;">
                            <!-- <img @click="phoneLogin=false" style="cursor:pointer" width="38px" height="38px" :src="weixin" alt="">
                            <span @click="phoneLogin=false"  class="wxFont">微信扫码登录</span> -->
                            <div class="contents">
                                <span style="color:#333333">没有收到验证码邮件？</span>
                                <span style="color:#00A0E9;cursor:pointer">点击重新发送</span>
                            </div>
                        </div>
                    </div>
                </div>
                    
            </el-dialog>
            <!-- 注册-->
            <el-dialog id="indexlogin" width='450px' :visible.sync="startResigis">
                <div style="height:50px;background:rgba(255,255,255,1);border-top-left-radius: 10px;border-top-right-radius: 10px;">
                    <span style="line-height:50px;color:#333333;font-family:MicrosoftYaHei;padding-left:30px;font-size:16px">账号注册</span>
                </div>
                <div>
                    <div class="allInput" style="background-color:#ffffff;padding:30px;border-bottom-left-radius: 10px;border-bottom-right-radius: 10px;">
                        <el-input
                            placeholder="请输入账号"
                            v-model="registerEmail">
                            <i slot="prefix" class="el-input__icon el-icon-message"></i>
                        </el-input>
                        <div>账号为邮箱格式</div>
                        <el-input
                            placeholder="请输入密码"
                            type="password"
                            v-model="registerMima">
                            <i slot="prefix" class="el-input__icon el-icon-ump-yanzhengma"></i>
                        </el-input>
                        <div>密码为6-11位，区分大小写</div>
                        <el-input
                            placeholder="请再次确认密码"
                            type="password"
                            v-model="registerErMima">
                            <i slot="prefix" class="el-input__icon el-icon-ump-yanzhengma"></i>
                        </el-input>
                        <div>再次确认密码需要一致</div>
                        <el-input
                            placeholder="请输入姓名"
                            v-model="registername">
                            <i slot="prefix" class="el-input__icon el-icon-ump-ren"></i>
                        </el-input>
                        <div>填写真实姓名</div>
                        <el-input
                            placeholder="请输入身份证号"
                            v-model="registeridcard">
                            <i slot="prefix" class="el-input__icon el-icon-ump-credentials_icon"></i>
                        </el-input>
                        <div>填写匹配的身份证号码</div>
                        <el-input
                            placeholder="请输入手机号"
                            v-model="registerphone">
                            <i slot="prefix" class="el-input__icon el-icon-mobile-phone"></i>
                        </el-input>
                        <div>填写常用联系电话</div>
                        
                        <div class="contentsBut" style="margin-top:30px">
                            <el-button @click="registerAccount(registerEmail,registerMima,registerErMima,registername,registeridcard,registerphone)" style="width:100%" type="primary" round>下一步</el-button>
                        </div>
                        <!-- <div class="contentssBut" style="margin-top:15px">
                            <span v-if="!phoneLogin" class="redFont">注：录入的手机号可以作为账号登录</span>
                        </div> -->
                    </div>
                </div>
                    
            </el-dialog>
            <!-- 账号注册邮箱验证 -->
            <el-dialog id="wanshanlogin" width='450px' :visible.sync="startResigisyanzhen">
                <div style="height:50px;background:rgba(255,255,255,1);border-top-left-radius: 10px;border-top-right-radius: 10px;">
                    <span style="line-height:50px;color:#333333;font-family:MicrosoftYaHei;padding-left:30px;font-size:16px">完善信息</span>
                </div>
                <div>
                    <div style="height:400px;background-color:#ffffff;padding:30px;border-bottom-left-radius: 10px;border-bottom-right-radius: 10px;">
                        
                        <div style="width:100%;">
                            <div class="contentss">
                                <img style="width:100px;height:100px" :src="emailimg" alt="">
                                <p style="color:#333333;font-size:14px;margin:14px 0">邮箱验证后，即可完成注册！</p>
                                <p style="color:#B6BABD;font-size:12px">只需登录邮箱{{registerEmail}}，获取验证码输入即可！</p>
                            </div>
                            <el-row :gutter="20" style="margin:30px 0">
                                <el-col :span="14">
                                    <div class="grid-content">
                                        <el-input
                                            placeholder="请输入验证码"
                                            v-model="registeryzm">
                                            <i slot="prefix" class="el-input__icon el-icon-ump-yanzhengma"></i>
                                        </el-input>
                                    </div>
                                </el-col>
                                <el-col :span="10">
                                    <div class="grid-content">
                                        <div class="contents">
                                            <el-button @click="sureRegister(registeryzm)"  type="primary" style="border-radius:20px">立即注册</el-button>
                                        </div>
                                    </div>
                                </el-col>
                            </el-row>
                        </div>
                        <!-- <div class="contentsBut">
                            <el-button @click="startResigisyanzhen = false;dialogFormVisible = true" style="width:100%" type="primary" round>立即注册</el-button>
                        </div> -->
                        <div  class="contentssBut" style="margin-top:25px;">
                            <!-- <img @click="phoneLogin=false" style="cursor:pointer" width="38px" height="38px" :src="weixin" alt="">
                            <span @click="phoneLogin=false"  class="wxFont">微信扫码登录</span> -->
                            <div class="contents">
                                <span style="color:#333333">没有收到验证码邮件？</span>
                                <span @click="twoRegisterEmail" style="color:#00A0E9;cursor:pointer">点击重新发送</span>
                            </div>
                        </div>
                    </div>
                </div>
                    
            </el-dialog>
            <!-- 账号注册成功 -->
            <el-dialog width='450px' :visible.sync="dialogFormVisible">
                <div style="height:50px;background:rgba(255,255,255,1);border-top-left-radius: 10px;border-top-right-radius: 10px;">
                    <span style="line-height:50px;color:#333333;font-family:MicrosoftYaHei;padding-left:30px;font-size:16px">账号注册</span>
                </div>
                <div class="contentss" style="background-color:#ffffff;padding:30px;border-bottom-left-radius: 10px;border-bottom-right-radius: 10px;">
                    <div class="contentss">
                        <img style="width:140px;height:140px" :src="successImg" alt="">
                        <p  style="width:140px;margin-top:15px;text-align:center">账号注册成功!</p>
                        <p @click="haslogins = true;dialogFormVisible=false" style="width:140px;margin-top:15px;text-align:center;font-size:12px;color:#25B2F6;cursor:pointer">立即登陆</p>
                    </div>
                </div>
                    
            </el-dialog>
            <!-- 密码找回 -->
            <el-dialog id="wanshanlogin" width='450px' :visible.sync="startMima">
                <div style="height:50px;background:rgba(255,255,255,1);border-top-left-radius: 10px;border-top-right-radius: 10px;">
                    <span style="line-height:50px;color:#333333;font-family:MicrosoftYaHei;padding-left:30px;font-size:16px">密码找回</span>
                </div>
                <div>
                    <div style="height:400px;background-color:#ffffff;padding:30px;border-bottom-left-radius: 10px;border-bottom-right-radius: 10px;">
                        
                        <div style="width:100%;">
                            <div class="contentss">
                                <img style="width:100px;height:100px" :src="emailimg" alt="">
                                <p style="color:#333333;font-size:14px;margin:14px 0">邮箱验证后，即可完成密码找回！</p>
                                <p style="color:#B6BABD;font-size:12px">只需登录邮箱{{loginemail}}，获取验证码输入即可！</p>
                            </div>
                            <el-row :gutter="20" style="margin:30px 0">
                                <el-col :span="14">
                                    <div class="grid-content">
                                        <el-input
                                            placeholder="请输入验证码"
                                            v-model="findmimaYzm">
                                            <i slot="prefix" class="el-input__icon el-icon-ump-yanzhengma"></i>
                                        </el-input>
                                    </div>
                                </el-col>
                                <el-col :span="10">
                                    <div class="grid-content">
                                        <div class="contents">
                                            <el-button @click="findmima(findmimaYzm)" type="primary" style="border-radius:20px">立即找回</el-button>
                                        </div>
                                    </div>
                                </el-col>
                            </el-row>
                        </div>
                        <!-- <div class="contentsBut">
                            <el-button @click="startMima = false;mimaChange = true" style="width:100%" type="primary" round>立即找到</el-button>
                        </div> -->
                        <div  class="contentssBut" style="margin-top:25px;">
                            <!-- <img @click="phoneLogin=false" style="cursor:pointer" width="38px" height="38px" :src="weixin" alt="">
                            <span @click="phoneLogin=false"  class="wxFont">微信扫码登录</span> -->
                            <div class="contents">
                                <span style="color:#333333">没有收到验证码邮件？</span>
                                <span @click="sendAgain" style="color:#00A0E9;cursor:pointer">点击重新发送</span>
                            </div>
                        </div>
                    </div>
                </div>
                    
            </el-dialog>
            <!-- 密码找回-->
            <el-dialog id="indexlogin" width='450px' :visible.sync="mimaChange">
                <div style="height:50px;background:rgba(255,255,255,1);border-top-left-radius: 10px;border-top-right-radius: 10px;">
                    <span style="line-height:50px;color:#333333;font-family:MicrosoftYaHei;padding-left:30px;font-size:16px">密码找回</span>
                </div>
                <div>
                    <div class="allInput" style="background-color:#ffffff;padding:30px;border-bottom-left-radius: 10px;border-bottom-right-radius: 10px;">
                        <el-input
                            placeholder="请输入密码"
                            type="password"
                            v-model="changeMima">
                            <i slot="prefix" class="el-input__icon el-icon-ump-yanzhengma"></i>
                        </el-input>
                        <div>密码为6-11位，区分大小写</div>
                        <el-input
                            placeholder="请再次确认密码"
                            type="password"
                            v-model="changeTwoMima">
                            <i slot="prefix" class="el-input__icon el-icon-ump-yanzhengma"></i>
                        </el-input>
                        <div>再次确认密码需要一致</div>
                        <div class="contentsBut" style="margin-top:30px">
                            <el-button @click="sureChangeMima(changeMima,changeTwoMima)" style="width:100%" type="primary" round>下一步</el-button>
                        </div>
                        <!-- <div class="contentssBut" style="margin-top:15px">
                            <span v-if="!phoneLogin" class="redFont">注：录入的手机号可以作为账号登录</span>
                        </div> -->
                    </div>
                </div>
                    
            </el-dialog>
            <!-- 密码修改成功 -->
            <el-dialog width='450px' :visible.sync="mimasuccess">
                <div style="height:50px;background:rgba(255,255,255,1);border-top-left-radius: 10px;border-top-right-radius: 10px;">
                    <span style="line-height:50px;color:#333333;font-family:MicrosoftYaHei;padding-left:30px;font-size:16px">密码找回</span>
                </div>
                <div class="contentss" style="background-color:#ffffff;padding:30px;border-bottom-left-radius: 10px;border-bottom-right-radius: 10px;">
                    <div class="contentss">
                        <img style="width:140px;height:140px" :src="successImg" alt="">
                        <p  style="width:140px;margin-top:15px;text-align:center">密码找回成功!</p>
                        <p @click="haslogins = true;mimasuccess=false" style="width:140px;margin-top:15px;text-align:center;font-size:12px;color:#25B2F6;cursor:pointer">立即登陆</p>
                    </div>
                </div>
                    
            </el-dialog>
            <!-- 密码修改-->
            <el-dialog id="indexlogin" width='450px' :visible.sync="personChanegBlur">
                <div style="height:50px;background:rgba(255,255,255,1);border-top-left-radius: 10px;border-top-right-radius: 10px;">
                    <span style="line-height:50px;color:#333333;font-family:MicrosoftYaHei;padding-left:30px;font-size:16px">修改密码</span>
                </div>
                <div>
                    <div class="allInput" style="background-color:#ffffff;padding:30px;border-bottom-left-radius: 10px;border-bottom-right-radius: 10px;">
                        <el-input
                            placeholder="请输入旧密码"
                            type="password"
                            v-model="oldpersonChaneg">
                            <i slot="prefix" class="el-input__icon el-icon-ump-yanzhengma"></i>
                        </el-input>
                        <div>请输入旧密码</div>
                        <el-input
                            placeholder="请输入新密码"
                            type="password"
                            v-model="newpersonChaneg">
                            <i slot="prefix" class="el-input__icon el-icon-ump-yanzhengma"></i>
                        </el-input>
                        <div>密码为6-11位，区分大小写</div>
                        <el-input
                            placeholder="请再次确认密码"
                            type="password"
                            v-model="newErpersonChaneg">
                            <i slot="prefix" class="el-input__icon el-icon-ump-yanzhengma"></i>
                        </el-input>
                        <div>再次确认密码需要一致</div>
                        <div class="contentsBut" style="margin-top:30px">
                            <el-button @click="sureChangePersonMima(oldpersonChaneg,newpersonChaneg,newErpersonChaneg)" style="width:100%" type="primary" round>确认修改</el-button>
                        </div>
                        <!-- <div class="contentssBut" style="margin-top:15px">
                            <span v-if="!phoneLogin" class="redFont">注：录入的手机号可以作为账号登录</span>
                        </div> -->
                    </div>
                </div>
                    
            </el-dialog>
        </div>
        <!-- nav导航 -->
        <div class="nav">
            <div style="width:80%;margin:0 auto;height:80px;color:#ffffff">
                <div class="contentsNav">
                    <div @click="$router.push('/')" class="contentss navs" :class="onStutas=='Index'?'navOnstatus':''" style="width:100px;">
                        <span>首页</span>
                        <span>HOME</span>
                    </div>
                    <div @click="$router.push('/aboutUs')" class="contentss navs" :class="onStutas=='AboutUs'?'navOnstatus':''" style="width:100px;">
                        <span>本馆概况</span>
                        <span>ABOUT US</span>
                    </div>
                    <div @click="$router.push('/otherAbout')" class="contentss navs" :class="onStutas=='OtherAbout'?'navOnstatus':''" style="width:100px;">
                        <span>分馆风采</span>
                        <span>ABOUT US</span>
                    </div>
                    <div  :class="onStutas==''?'navOnstatus':''" style="width:100px;height:100%;position:relative" @mouseenter="mouseEnter('online')" @mouseleave='mouseLeave("online")'>
                        <div class="contentss navs" >
                            <span>在线观看</span>
                            <span>WATCH</span>
                        </div>
                        <div v-if="onlineBlur" class="hoverShow">
                            <div>直播</div>
                            <div>直播回看</div>
                            <div>地方特色文化</div>
                        </div>
                    </div>
                    <div :class="onStutas=='NewsList'||onStutas=='NewsDetail'?'navOnstatus':''" style="width:100px;height:100%;position:relative" @mouseenter="mouseEnter('news')" @mouseleave='mouseLeave("news")'>
                        <div class="contentss navs">
                            <span>新闻公告</span>
                            <span>NEWS</span>
                        </div>
                        <div v-if="newsBlur" class="hoverShow">
                            <div @click="$router.push({path:'/newsList',query:{type:'1'}})">文化新闻动态</div>
                            <div @click="$router.push({path:'/newsList',query:{type:'3'}})">公告公示</div>
                            <div @click="$router.push({path:'/newsList',query:{type:'2'}})">活动预告</div>
                        </div>
                    </div>
                    <div @click="$router.push('/cultureActList')" :class="onStutas=='CultureActList'||onStutas=='CultureActDetail'?'navOnstatus':''" class="contentss navs" style="width:100px;">
                        <span>文化活动</span>
                        <span>ACTIVITY</span>
                    </div>
                    <div :class="onStutas=='TeacherList'||onStutas=='TeacherListDetail'||onStutas=='SiteList'||onStutas=='SiteDetail'||onStutas=='Equipment'?'navOnstatus':''" style="width:100px;height:100%;position:relative" @mouseenter="mouseEnter('yuyue')" @mouseleave='mouseLeave("yuyue")'>
                        <div class="contentss navs">
                            <span>在线预约</span>
                            <span>RESERVATION</span>
                        </div>
                        <div v-if="yuyueBlur" class="hoverShow">
                            <div @click="$router.push('/siteList')">场馆预定</div>
                            <div @click="$router.push('/equipment')">设备预定</div>
                            <div @click="$router.push('/teacherList')">师资预约</div>
                        </div>
                    </div>
                    <div :class="onStutas=='Culture'||onStutas=='CultureDetail'||onStutas=='CultureEr'||onStutas=='CultureErDetail'||onStutas=='HistoryCulture'||onStutas=='HistoryCultureDetail'?'navOnstatus':''" style="width:100px;height:100%;position:relative" @mouseenter="mouseEnter('wenhua')" @mouseleave='mouseLeave("wenhua")'>
                        <div class="contentss navs">
                            <span>非遗文化</span>
                            <span>INTANGIBLE</span>
                        </div>
                        <div v-if="wenhuaBlur" class="hoverShow">
                            <div @click="$router.push('/culture')">文化传承</div>
                            <div @click="$router.push('/cultureEr')">传承者</div>
                            <div @click="$router.push('/historyCulture')">文化艺术数据库</div>
                        </div>
                    </div>
                    <div @click="$router.push('/volunteer')" :class="onStutas=='Volunteer'||onStutas=='VolunteerDetail'?'navOnstatus':''" class="contentss navs" style="width:100px;">
                        <span>文化志愿者</span>
                        <span>VOLUNTEERS</span>
                    </div>
                </div>
            </div>
        </div>
  </div>
</template>

<script>
import url from '@/serverApi.js'
import { Message } from 'element-ui'
function regEmail(email){
    var myreg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
    if(!myreg.test(email)){
        return false;
    }else{
        return true
    }  
}
export default {
        data () {
          return {
            imgUrl:'',
            headImg:'',
            ewm_02:require('../../assets/images/ewm.png'),
            logoImg:require('../../assets/images/logo.png'),
            banners:require('../../assets/images/banner.png'),
            weixin:require('../../assets/images/banner.png'),
            emailimg:require('../../assets/images/email.png'),
            successImg:require('../../assets/images/success.png'),
            onStutas:'Index',
            loginemail:'',//登陆用邮箱地址
            loginmima:'',//登陆用密码
            logins:false,//是否登录
            haslogins:false,//显示登陆框
            addInfo:false,//显示补录框
            searchVal:'',//搜索框的值
            onlineBlur:false,//在线观看的隐藏框
            newsBlur:false,
            wenhuaBlur:false,
            yuyueBlur:false,
            loginInfo:false,
            wanshanInfo:false,//完善信息弹框
            startResigis:false,//注册弹框
            registerEmail:"",//注册邮箱
            registerMima:"",//注册密码
            registerErMima:"",//注册二次密码
            registername:"",//注册姓名
            registeridcard:"",//注册身份证
            registerphone:"",//注册手机号
            startResigisyanzhen:false,//验证注册弹框
            registeryzm:"",//验证注册邮件嘛
            dialogFormVisible:false,//验证注册成功弹框
            startMima:false,//密码找回弹框
            findmimaYzm:'',//密码找回验证码
            mimaChange:false,//密码修改弹框
            changeMima:'',//密码找回密码
            changeTwoMima:'',//密码修找回二次密码
            mimasuccess:false,//密码找回成功弹框
            personChanegBlur:false,//修改密码弹框
            oldpersonChaneg:'',//旧密码
            newpersonChaneg:'',//新密码
            newErpersonChaneg:'',//新二次密码
            accountNumber:'',//邮箱账号
            yzmNumber:'',//验证码
            time:10,
            m:false,
            disabled:false,
            phoneLogin:true,//手机号登录(还是微信登录)
            name:'',
            idcard:'',
            address:'',
          }
        },
        created(){

            this.imgUrl = url.imgUrl;
            if(this.$store.state.user.token){
                this.headImg = this.$store.state.user.headUrl
                this.logins = true;
            }else{
                this.logins = false;
            }
            this.onStutas = this.$route.name;
           
        },
        mounted(){
            
        },
        watch:{
            $route(to,from){
                this.onStutas = to.name
            }
        },
        methods:{
            // 鼠标移入
            mouseEnter(x){
              if(x=='online'){
                  this.onlineBlur =true;
              }else if(x=='news'){
                  this.newsBlur =true;
              }else if(x=='yuyue'){
                  this.yuyueBlur =true;
              }else if(x=='wenhua'){
                  this.wenhuaBlur =true;
              }else if(x=='loginInfo'){
                  this.loginInfo =true;
              }
            },
           // 鼠标移出
            mouseLeave(x){
                if(x=='online'){
                    this.onlineBlur =false;
                }else if(x=='news'){
                    this.newsBlur =false;
                }else if(x=='yuyue'){
                    this.yuyueBlur =false;
                }else if(x=='wenhua'){
                    this.wenhuaBlur =false;
                }else if(x=='loginInfo'){
                    this.loginInfo =false;
                }
            },
            //点击登录 显示登录框
            userLogin(){
                this.haslogins = true;
                this.phoneLogin = true;//重新获取二维码
            },
            // 显示登陆框
            showLogin(){
                if(this.phoneLogin){
                    this.phoneLogin=false;
                    this.$nextTick(()=>{
                        var obj = new WxLogin({
                            self_redirect:true,
                            id:"login_container", 
                            appid: "wxbdc5610cc59c1631", 
                            scope: "snsapi_login", 
                            // redirect_uri:'https%3A%2F%2Fpassport.yhd.com%2Fwechat%2Fcallback.do', 
                            redirect_uri:'http%3a%2f%2fgame.huilanyun.com%2fcg_cultural%2fpublic%2fport%2fAuth%2findex_info',
                            state: Math.ceil(Math.random()*1000), 
                            style: "black",
                            href: "data:text/css;base64,LmltcG93ZXJCb3ggLnFyY29kZSB7d2lkdGg6IDEwMCU7fQ0KLmltcG93ZXJCb3ggLnRpdGxlIHtkaXNwbGF5OiBub25lO30NCi5pbXBvd2VyQm94IC5pbmZvIHt3aWR0aDogMTAwJTt9DQouc3RhdHVzX2ljb24ge2Rpc3BsYXk6IG5vbmV9DQouaW1wb3dlckJveCAuc3RhdHVzIHt0ZXh0LWFsaWduOiBjZW50ZXI7fQ=="
                        });
                    })
                }else{
                    this.phoneLogin=true
                }
            },
            //登录
            postInfo(email,mima){
                // this.haslogins = false;
                // this.addInfo = true;
                if(!regEmail(email)){
                    this.$message.error('邮箱地址格式错误');
                }else if(!mima||mima.length<6){
                    this.$message.error('请输入长度不小于6的密码');
                }else{
                    var params = new URLSearchParams();
                    params.append('email',email)   
                    params.append('password',mima)                                
                    this.axios.post(url.logins,params)
                    .then(res=>{
                        console.log(res)
                        if(res.data.code==200){
                            this.haslogins = false;
                            this.logins = true;
                            this.headImg = res.data.data.head_img;
                            localStorage.setItem('token',res.data.data.token)
                            localStorage.setItem('headUrl',res.data.data.head_img);
                            location.reload();
                        }else if(res.data.code==204){
                            // 补全信息
                            this.addInfo = true;
                        }else{
                            this.$message.error(res.data.msg);
                        }
                    })
                    .catch(err=>{
                        console.log(err)
                    })
                }
            },
            // 退出
            loginout(){
                localStorage.clear('token');
                this.logins  = false;
                this.$router.push('/')
            },
            //注册发送邮件
            registerAccount(email,mima,ermima,name,idcard,phone){
                if(!regEmail(email)){
                    this.$message.error('邮箱地址格式错误');
                }else if(!mima||mima.length<6){
                    this.$message.error('请输入长度不小于6的密码');
                }else if(mima!=ermima){
                    this.$message.error('2次密码输入不一致');
                }else if(!name){
                    this.$message.error('请填写姓名');
                }else if(!name){
                    this.$message.error('请填写身份证');
                }else if(phone.length!=11||!phone){
                    this.$message.error('请填写正确的电话号码');
                }else{
                    var params = new URLSearchParams();
                    params.append('email',email)   
                    params.append('type',1)
                    params.append('id_card',idcard)   
                    params.append('tel',phone)                                     
                    this.axios.post(url.sendEmail,params)
                    .then(res=>{
                        console.log(res)
                        if(res.data.code==200){
                            this.startResigisyanzhen=true;
                            this.startResigis=false;
                        }else{
                            this.$message.error(res.data.msg);
                        }
                    })
                    .catch(err=>{
                        console.log(err)
                    })
                }
                
            },
            //二次注册发送邮件
            twoRegisterEmail(){
                if(this.disabled){
                    this.$message.error('您已经发送了邮件，请稍等');
                }else{
                    var params = new URLSearchParams();
                    params.append('email',this.registerEmail)   
                    params.append('type',1)
                    params.append('id_card',this.registeridcard)   
                    params.append('tel',this.registerphone)                                     
                    this.axios.post(url.sendEmail,params)
                    .then(res=>{
                        console.log(res)
                        if(res.data.code==200){
                            this.$message.success('发送成功')
                            var timerover = setInterval(()=>{
                                if(this.time>1){
                                    this.time--;
                                    this.disabled = true;
                                }else{
                                    this.time = 60;
                                    this.disabled = false;
                                    window.clearInterval(timerover)
                                }
                            },1000)
                        }else{
                            this.$message.error(res.data.msg);
                        }
                    })
                    .catch(err=>{
                        console.log(err)
                    })
                }
            },
            sureRegister(verify){
                if(verify!=''){
                    var params = new URLSearchParams();
                    params.append('email',this.registerEmail)   
                    params.append('password',this.registerMima)
                    params.append('username',this.registername)   
                    params.append('id_card',this.registeridcard)        
                    params.append('tel',this.registerphone)   
                    params.append('verify',verify)        
                    this.axios.post(url.sureRegister,params)
                    .then(res=>{
                        console.log(res)
                        if(res.data.code==200){
                            this.startResigisyanzhen = false;
                            this.dialogFormVisible = true;
                            this.loginemail = this.registerEmail;
                        }else{
                            this.$message.error(res.data.msg);
                        }
                    })
                    .catch(err=>{
                        console.log(err)
                    })
                }else{
                    this.$message.error('请先输入邮箱验证码');
                }
                
            },
            // 忘记密码
            forgetmima(){
                if(!regEmail(this.loginemail)){
                    this.$message.error('请先输入正确的邮箱地址');
                }else{
                    this.$message('正在发送邮件');
                    var params = new URLSearchParams();
                    params.append('email',this.loginemail)   
                    params.append('type',3)                                   
                    this.axios.post(url.sendEmail,params)
                    .then(res=>{
                        console.log(res)
                        if(res.data.code==200){
                            this.haslogins = false;
                            this.startMima = true;
                        }else{
                            this.loginemail = ''
                            this.$message.error(res.data.msg);
                        }
                    })
                    .catch(err=>{
                        this.loginemail = ''
                        console.log(err)
                    })
                    
                }
                
            },
            // 验证验证码是否正确
            findmima(yzm){
                if(yzm!=''){
                    var params = new URLSearchParams();
                    params.append('email',this.loginemail)   
                    params.append('verify',yzm)         
                    this.axios.post(url.yanzYzm,params)
                    .then(res=>{
                        console.log(res)
                        if(res.data.code==200){
                            this.startMima = false;
                            this.mimaChange = true;
                        }else{
                            this.$message.error(res.data.msg);
                        }
                    })
                    .catch(err=>{
                        console.log(err)
                    })
                    
                }else{
                    this.$message.error('请先输入邮箱验证码');
                }
            },
            // 重新发送
            sendAgain(){
                if(this.disabled){
                    this.$message.error('您已经发送了邮件，请稍等');
                }else{
                    var params = new URLSearchParams();
                    params.append('email',this.loginemail)   
                    params.append('type',3)                                   
                    this.axios.post(url.sendEmail,params)
                    .then(res=>{
                        console.log(res)
                        if(res.data.code==200){
                            this.$message.success('发送成功')
                            var timerover = setInterval(()=>{
                                if(this.time>1){
                                    this.time--;
                                    this.disabled = true;
                                }else{
                                    this.time = 60;
                                    this.disabled = false;
                                    window.clearInterval(timerover)
                                }
                            },1000)
                        }else{
                            this.$message.error(res.data.msg);
                        }
                    })
                    .catch(err=>{
                        console.log(err)
                    })
                }
            },
            // 确认找回密码
            sureChangeMima(mima,ermima){
                if(!mima||mima.length<6){
                    this.$message.error('请输入长度不小于6的密码');
                }else if(mima!=ermima){
                    this.$message.error('2次密码输入不一致');
                }else{
                    var params = new URLSearchParams();
                    params.append('email',this.loginemail)   
                    params.append('password',mima)              
                    this.axios.post(url.findmyMima,params)
                    .then(res=>{
                        console.log(res)
                        if(res.data.code==200){
                            this.mimasuccess=true;
                            this.mimaChange=false;
                        }else{
                            this.$message.error(res.data.msg);
                        }
                    })
                    .catch(err=>{
                        console.log(err)
                    })
                }
            },
            // 修改密码
            personChaneg(){
                this.personChanegBlur = true;
            },
            sureChangePersonMima(oldmima,mima,ermima){
                if(!mima||mima.length<6){
                    this.$message.error('请输入长度不小于6的密码');
                }else if(mima!=ermima){
                    this.$message.error('2次密码输入不一致');
                }else if(!oldmima||oldmima.length<6){
                    this.$message.error('请输入旧密码');
                }else{
                    var params = new URLSearchParams();
                    params.append('token',this.$store.state.user.token)   
                    params.append('password',mima) 
                    params.append('oldpassword',oldmima)              
                    this.axios.post(url.changemyMima,params)
                    .then(res=>{
                        console.log(res)
                        if(res.data.code==200){
                            localStorage.removeItem('token');
                            location.reload();
                            this.$message.toast(res.data.msg);
                        }else{
                            this.$message.error(res.data.msg);
                        }
                    })
                    .catch(err=>{
                        console.log(err)
                    })
                }
            }
        },
}
</script>

<style scoped>
.loginsAndRegister{
    font-size:14px;
    font-family:MicrosoftYaHei;
    font-weight:bold;
    color:rgba(51,51,51,1);
    cursor: pointer;
}
.nav{
    background-color: #FF0000;
    font-size: 14px;
}
.navs>span:last-child{
    margin-top: 10px;
    font-size: 12px;
}
.personInfo{
    width: 150px;
    top: 40px;
    background-color:#5B2C2C;
    color: #ffffff;
    padding:10px 0px;
    position:absolute;
    z-index:10;
}
.personInfo>div{
    padding: 13px 15px;
    cursor: pointer;
}
.personInfo>div:hover{
    background-color: #000000;
}
.navs{
    cursor: pointer;
}
.navs:hover{
    background-color:#5B2C2C;
}
.navOnstatus{
    background-color:#5B2C2C;
}
.hoverShow{
    min-width:150%;
    /* padding:10px 5px; */
    position:absolute;
    bottom:-197px;
    z-index:10;
    background-color:rgba(51,51,51,.7)
}
.hoverShow>div{
    padding: 26px 0;
    padding-left: 5px;
    cursor: pointer;
}
.hoverShow>div:hover{
    background-color: #0f0f0f;
    color: #ffffff;
}
.wxFont{
    margin-top: 10px;
    font-size:14px;
    font-family:MicrosoftYaHei;
    font-weight:400;
    color:rgba(182,186,189,1);
    cursor: pointer;
}
.redFont{
    font-size:14px;
    font-family:MicrosoftYaHei;
    font-weight:400;
    color:rgba(253,1,1,1);
}
.allInput>div:nth-child(2n){
    margin: 10px 0 20px 20px;
    font-size:12px;
    font-family:MicrosoftYaHei;
    font-weight:400;
    color:rgba(182,186,189,1);
}
</style>
