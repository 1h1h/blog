// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    caca: 10
  },
  mutations: {
    increment () {
      this.caca++
    }
  }
})

Vue.config.productionTip = false
/* 设置钩子，在页面加载前先关掉preloading */
router.beforeEach((to, from, next) => {
  // const lo = document.getElementsByClassName('load')[0]
  // lo.setAttribute('id', 'ab')
  // lo.childNodes[1].setAttribute('id', 'ab1')
  // setTimeout(() => {
  //   // lo.childNodes[1].setAttribute('id', '')
  //   lo.setAttribute('id', '')
  // }, 1000)
  next()
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
