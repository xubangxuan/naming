import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/page/index'
import TeacherList from '@/components/page/teacherList'
import TeacherListDetail from '@/components/page/teacherListDetail'
import SiteList from '@/components/page/siteList'
import SiteDetail from '@/components/page/siteDetail'
import Equipment from '@/components/page/equipment'
import Culture from '@/components/page/culture'
import CultureDetail from '@/components/page/cultureDetail'
import CultureEr from '@/components/page/cultureEr'
import CultureErDetail from '@/components/page/cultureErDetail'
import HistoryCulture from '@/components/page/historyCulture'
import HistoryCultureDetail from '@/components/page/historyCultureDetail'
import NewsList from '@/components/page/newsList'
import NewsDetail from '@/components/page/newsDetail'
import CultureActList from '@/components/page/cultureActList'
import CultureActDetail from '@/components/page/cultureActDetail'
import Volunteer from '@/components/page/volunteer'
import VolunteerDetail from '@/components/page/volunteerDetail'
import AboutUs from '@/components/page/aboutUs'
import OtherAbout from '@/components/page/otherAbout'

import ScoreChange from '@/components/person/scoreChange'
import CultureBill from '@/components/person/cultureBill'
import MyOrder from '@/components/person/myOrder'
import MyAct from '@/components/person/myAct'
import MyTeam from '@/components/person/myTeam'
import TeamManger from '@/components/person/teamManger'
import CreateTeam from '@/components/person/createTeam'
import MyInfo from '@/components/person/myInfo'
import Mysitedetail from '@/components/person/mysitedetail'
import Myteacher from '@/components/person/myteacher'
import Myequitdetail from '@/components/person/myequitdetail'
import SeePeople from '@/components/person/seePeople'
import ScoreChangeHistory from '@/components/person/scoreChangeHistory'
import Systemlist from '@/components/person/systemlist'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },{
      path: '/teacherList',
      name: 'TeacherList',
      component: TeacherList
    },{
      path: '/teacherListDetail',
      name: 'TeacherListDetail',
      component: TeacherListDetail
    },{
      path: '/siteList',
      name: 'SiteList',
      component: SiteList
    },{
      path: '/siteDetail',
      name: 'SiteDetail',
      component: SiteDetail
    },{
      path: '/equipment',
      name: 'Equipment',
      component: Equipment
    },{
      path: '/culture',
      name: 'Culture',
      component: Culture
    },{
      path: '/cultureDetail',
      name: 'CultureDetail',
      component: CultureDetail
    },{
      path:'/cultureEr',
      name:'CultureEr',
      component:CultureEr
    },{
      path:'/cultureErDetail',
      name:'CultureErDetail',
      component:CultureErDetail
    },{
      path:'/historyCulture',
      name:'HistoryCulture',
      component:HistoryCulture
    },{
      path:'/historyCultureDetail',
      name:'HistoryCultureDetail',
      component:HistoryCultureDetail
    },{
      path:'/newsList',
      name:'NewsList',
      component:NewsList
    },{
      path:'/newsDetail',
      name:'NewsDetail',
      component:NewsDetail
    },{
      path:'/cultureActList',
      name:'CultureActList',
      component:CultureActList
    },{
      path:'/cultureActDetail',
      name:'CultureActDetail',
      component:CultureActDetail
    },{
      path:'/volunteer',
      name:'Volunteer',
      component:Volunteer
    },{
      path:"/volunteerDetail",
      name:'VolunteerDetail',
      component:VolunteerDetail
    },{
      path:'/aboutUs',
      name:'AboutUs',
      component:AboutUs
    },{
      path:'/otherAbout',
      name:'OtherAbout',
      component:OtherAbout
    },{
      path:'/scoreChange',
      name:'ScoreChange',
      component:ScoreChange
    },{
      path:'/cultureBill',
      name:'CultureBill',
      component:CultureBill
    },{
      path:'/myOrder',
      name:'MyOrder',
      component:MyOrder
    },{
      path:'/myAct',
      name:'MyAct',
      component:MyAct
    },{
      path:'/myTeam',
      name:'MyTeam',
      component:MyTeam
    },{
      path:'/teamManger',
      name:'TeamManger',
      component:TeamManger
    },{
      path:'/createTeam',
      name:'CreateTeam',
      component:CreateTeam
    },{
      path:'/myInfo',
      name:'MyInfo',
      component:MyInfo
    },{
      path:'/mysitedetail',
      name:'Mysitedetail',
      component:Mysitedetail
    },{
      path:'/myteacher',
      name:'Myteacher',
      component:Myteacher
    },{
      path:'/myequitdetail',
      name:'Myequitdetail',
      component:Myequitdetail
    },{
      path:'/seePeople',
      name:'SeePeople',
      component:SeePeople
    },{
      path:'/scoreChangeHistory',
      name:'ScoreChangeHistory',
      component:ScoreChangeHistory
    },{
      path:'/systemlist',
      name:'Systemlist',
      component:Systemlist
    }
  ]
})
