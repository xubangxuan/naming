// const BASEURL = 'http://192.168.6.98/cg_cultural/public/';
// const imgUrl = 'http://192.168.6.98/cg_cultural/public/uploads/'


const BASEURL = 'http://game.huilanyun.com/cg_cultural/public/';
const imgUrl = 'http://game.huilanyun.com/cg_cultural/public/uploads/';


const URL = {
    imgUrl: imgUrl,
    logins:BASEURL+'api/login/login',//登录
    sendEmail:BASEURL+'api/login/send',//发送验证码
    sureRegister:BASEURL+'api/login/register',//注册
    yanzYzm:BASEURL+'api/login/code',//验证找回密码验证码是否正确
    findmyMima:BASEURL+'api/login/find',//找回密码
    changemyMima:BASEURL+'api/login/change',//修改密码

    systemlist:BASEURL+'api/system/list',//系统消息
    sysdetail:BASEURL+'api/system/del',//删除系统消息


    getIndex:BASEURL+'api/index',//获取首页数据
    getIndexBanner:BASEURL+'api/coll/banner',//获取首页banner数据
    getlive:BASEURL+'api/coll/getlive',//获取点赞
    branch:BASEURL+'api/coll/branch',//图书馆总分管名称
    getNew:BASEURL+'api/new/index',//获取新闻列表
    getNewdetailt:BASEURL+'api/new/detail',//新闻详情数据
    getAlltotal:BASEURL+'api/branch/total',//获取本馆概况
    getProalike:BASEURL+'api/branch/alike',//获取分馆概况
    hlists:BASEURL+'api/herit/hlists',//非遗传承列表
    hetail:BASEURL+'api/herit/hetail',//获取传承详情
    plists:BASEURL+'api/herit/plists',//非遗传承者列表
    petail:BASEURL+'api/herit/petail',//获取传承者详情
    databaseStyle:BASEURL+'api/herit/types',//获取传承数据库类型
    databaselists:BASEURL+'api/herit/culture',//非遗传承数据库列表
    databasedetail:BASEURL+'api/herit/detail',//获取传承数据库详情
    activitylists:BASEURL+'api/activity/lists',//活动列表
    activitydetail:BASEURL+'api/activity/detail',//获取活动详情
    activityReport:BASEURL+'api/activity/apply',//活动报名
    activityCancel:BASEURL+'api/activity/cancels',//取消报名
    voluntype:BASEURL+'api/volun/types',//文化志愿者分类
    volunlist:BASEURL+'api/volun/lists',//文化志愿者列表
    volunDetail:BASEURL+'api/volun/detail',//文化志愿者详情
    volunReport:BASEURL+'api/volun/apply',//志愿者报名
    volunCancel:BASEURL+'api/volun/cancel',//志愿者取消报名
    volunvolun:BASEURL+'api/volun/volun',//成为志愿者
    orderguan:BASEURL+'api/cl/lists',//场馆列表
    orderguanDetail:BASEURL+'api/cl/details',//场馆详情
    orderguanPost:BASEURL+'api/cl/makes',//预约场馆
    orderteacher:BASEURL+'api/teacher/lists',//老师列表
    orderteacherDetail:BASEURL+'api/teacher/details',//老师详情
    orderteacherPost:BASEURL+'api/teacher/makes',//预约老师
    orderequimt:BASEURL+'api/fa/lists',//设备列表
    orderdialog:BASEURL+'api/fa/arr',//设备弹窗
    orderdialogDate:BASEURL+'api/fa/apm',//设备弹窗联动上下午
    orderdialogNumber:BASEURL+'api/fa/number',//设备弹窗上下午联动库存
    orderdialogYuyue:BASEURL+'api/fa/makes',//设备点击预约
    changeImage:BASEURL+'api/per/img',//修改头像
    getMyInfo:BASEURL+'api/per/datas',//获取个人资料信息
    perList:BASEURL+'api/per/slist',//兑换列表
    perExchange:BASEURL+'api/per/exchange',//立即兑换
    perExchangeHistory:BASEURL+'api/per/integral',//兑换记录
    scorebillList:BASEURL+'api/bill/score',//积分账单
    actbillList:BASEURL+'api/bill/act',//文化活动账单
    culturebillList:BASEURL+'api/bill/site',//教师，场地，设备账单
    volunbillList:BASEURL+'api/bill/volun',//志愿者账单
    mytDetail:BASEURL+'api/bill/tdateil',//教师详情
    mycDetail:BASEURL+'api/bill/cdateil',//场馆详情
    myfDetail:BASEURL+'api/bill/fdateil',//设备详情
    myOrder:BASEURL+'api/bill/myreser',//我的预约
    offmyOrder:BASEURL+'api/bill/canll',//取消预约
    myAct:BASEURL+'api/bill/alist',//我的活动
    offmyAct:BASEURL+'api/bill/canact',//取消我的活动

    createMyteam:BASEURL+'api/group/create',//创建团队
    addteam:BASEURL+'api/group/apply',//加入团队
    getPeople:BASEURL+'api/group/lists',//获取团队成员
    changeInfos:BASEURL+'api/group/update',//修改团队信息
    jiesanTeam:BASEURL+'api/group/dels',//解散团队
    teamInfos:BASEURL+'api/group/detail',//团队信息列表
    teamActList:BASEURL+'api/group/activity',//团队活动列表
    cancelTeam:BASEURL+'api/group/act_cancel',//团队活动取消
}
module.exports = URL;