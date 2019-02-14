import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/page/index'
import SearchList from '@/components/page/searchList'
import SearchDetail from '@/components/page/searchDetail'
import AboutMessage from '@/components/page/aboutMessage'
import AboutMessageDetail from '@/components/page/aboutMessageDetail'
import ServerTips from '@/components/page/serverTips'
import ActList from '@/components/page/actList'
import ActDetail from '@/components/page/actDetail'
import NewBookList from '@/components/page/newBookList'
import NewBookDetail from '@/components/page/newBookDetail'
import AboutUs from '@/components/page/aboutUs'
import Numberziyuan from '@/components/page/numberziyuan'
import ServerData from '@/components/page/serverData'
import Login from '@/components/page/login'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },{
      path: '/searchList',
      name: 'SearchList',
      component: SearchList
    },{
      path: '/searchDetail',
      name: 'SearchDetail',
      component: SearchDetail
    },{
      path: '/aboutMessage',
      name: 'AboutMessage',
      component: AboutMessage
    },{
      path: '/aboutMessageDetail',
      name: 'AboutMessageDetail',
      component: AboutMessageDetail
    },{
      path: '/serverTips',
      name: 'ServerTips',
      component: ServerTips
    },{
      path: '/actList',
      name: 'ActList',
      component: ActList
    },{
      path:'/actDetail',
      name: 'ActDetail',
      component: ActDetail
    },{
      path:'/newBookList',
      name: 'NewBookList',
      component: NewBookList
    },{
      path:'/newBookDetail',
      name: 'NewBookDetail',
      component: NewBookDetail
    },{
      path:'/aboutUs',
      name: 'AboutUs',
      component: AboutUs
    },{
      path:'/numberziyuan',
      name: 'Numberziyuan',
      component: Numberziyuan
    },{
      path:'/serverData',
      name: 'ServerData',
      component: ServerData
    },{
      path:'/login',
      name: 'Login',
      component: Login
    }
  ]
})
