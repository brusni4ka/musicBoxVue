import Vue from 'vue'
import Router from 'vue-router'
import SongsContainer from '@/components/songs/Songs.vue'
import Home from '@/components/home/Home.vue'
//The @ is just a nice alias for the /src
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', component: Home,
      children: [{
        path: 'songs/:genre',
        name: 'songs',
        component: SongsContainer
      }]
    },
    { path: '*', redirect: '/' }
  ]
})
