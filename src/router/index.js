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
    }
  ]
})
