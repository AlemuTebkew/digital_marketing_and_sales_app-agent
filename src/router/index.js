import { createRouter, createWebHistory } from 'vue-router'
import  TheDashboard from '../views/TheDashboard.vue'
import AgentPortal from '../views/AgentPort.vue'
import store from '@/store'
 const routes=[
  {
    path:'/',
    name:'AgentPortal',
    component:AgentPortal,
    meta:{
      authRequired:true,
    },
    children:[
      {
    path:'/',
    name:'TheDashboard',
    component:TheDashboard
   },
   {
    path:'/myshop',
    name:"MyShop",
    component: () => import( '../views/TheMyShop.vue')
   },

   {
    path:'/orders',
    name:'TheOrder',
    component: () =>import ('../views/TheOrder.vue')
   },
   {
    path:'/reports',
    name:'TheReport',
    component: () => import(/* webpackChunkName: "setting" */ '../views/TheReport.vue')
   },
 
   {
    path: '/setting',
    name: 'TheSetting',
    component: () => import(/* webpackChunkName: "setting" */ '../views/TheSetting.vue')
  },

  {
    path: '/product-detail/:id',
    name: 'ProductDetail',
    component: () => import(/* webpackChunkName: "setting" */ '../views/ProductDetail.vue')
  },
  
    ],
   },   

  //  {
  //  //  path: "/:notFound(.*)*", redirect: "/" 
  //  },

  {
    path: '/login',
    name: 'TheLogin',
    component: () => import(/* webpackChunkName: "login" */ '../views/TheLogin.vue'),
    beforeEnter: (to, from, next) => {
     if(store.getters.isAuthenticated)
      return  next(from.path)
      next()
    
  },

  },
 ]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})


router.beforeEach((to, from,next)=>{
  if (to.matched.some(record => record.meta.authRequired) && !localStorage.getItem('token')) {
    return next({name:'TheLogin'})
}
     else
      next()
})
export default router
