import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
	mode:"history",
  routes: [
    {
      path: '/',
      component: ()=>import("../components/index.vue")
    },{
      path: '/anchor',
      component: ()=>import("../components/anchor.vue")
    },{
      path: '/newCD',
      component: ()=>import("../components/newCD.vue")
    },{
      path: '/Ranking',
      component: ()=>import("../components/Ranking.vue")
    },{
      path: '/singer',
      component: ()=>import("../components/singer.vue")
    },{
      path: '/songSheet',
      component: ()=>import("../components/songSheet.vue")
    },
  ]
})
