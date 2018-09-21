import Vue from 'vue'
import Router from 'vue-router'
import home from '@/home/home'
import blog from '@/blog/blog'
import message from '@/blog/message'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/blog',
      name: 'blog',
      component: blog
    },
    {
      path: '/message',
      name: 'message',
      component: message
    }
  ]
})
