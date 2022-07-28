import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
//import ManufactureList from '../views/ManufactureList.vue'
//import DynamicRouteMatching from '../views/DynamicRouteMatching.vue'
/*import UserList from '../views/UserList.vue'
import SubPage from '../views/SubPage.vue'*/
import RouterPractice from '../views/RouterPractice.vue'
import ItemDetail from '../views/ItemDetail.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  /*{
    //path: '/manufacture-list',
    //name: 'ManufactureList',
    //component: ManufactureList
    path: '/dynamic-route-matching/:userId', //パラメータ名 userId
    name: 'DynamicRouteMatching',
    component: DynamicRouteMatching,
    //props: true //値を渡すことを許可
  }*/
  /*{
    path: '/sub-page',
    name: 'SubPage',
    component: SubPage
  },
  {
    path: '/user-list',
    name: 'UserList',
    component: UserList,
  }*/
  { //lesson 1
    path: '/router-practice',
    name: 'RouterPractice',
    component: RouterPractice
  },
  {
    path: '/item-detail/:params',
    name: 'ItemDetail',
    component: ItemDetail,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
