import Vue from 'vue'
import Router from 'vue-router'
import aboutUs from '@/components/aboutUs'
import contact from '@/components/contact'
import shop from '@/components/shop'
import home from '@/components/home'
import blogarticle from '@/components/blogarticle'
import ingredients from '@/components/ingredients'
import product from '@/components/product'
import blogList from '@/components/blogList'
import oderConformation from '@/components/oderConformation'
import news from '@/components/news'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/news',
      name: 'news',
      component: news
    },
    {
      path: '/about',
      name: 'AboutUs',
      component: aboutUs
    },
    {
      path: '/contact',
      name: 'contact',
      component: contact
    },
    {
      path: '/shop',
      name: 'shop',
      component: shop
    },
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/blogarticle/:id',
      name: 'blogarticle',
      component: blogarticle
    },
    {
      path: '/ingredients',
      name: 'ingredients',
      component: ingredients
    },
    {
      path: '/product/:id/:name',
      name: 'product',
      component: product      
    },
    {
      path: '/blogList',
      name: 'blogList',
      component: blogList      
    },
    {
      path: '/oderConformation',
      name: 'oderConformation',
      component: oderConformation      
    },
    { path: '*', redirect: '/' }

    
  ],

})
