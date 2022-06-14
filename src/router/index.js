import { createRouter, createWebHistory } from 'vue-router'
import  TheDashboard from '../views/TheDashboard.vue'
import AgentPortal from '../views/AgentPort.vue'
 const routes=[
  {
    path:'/',
    name:'AgentPortal',
    component:AgentPortal,
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
    ]
   },   
   
  {
    path: '/login',
    name: 'TheLogin',
    component: () => import(/* webpackChunkName: "login" */ '../views/TheLogin.vue')
  },
 ]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
