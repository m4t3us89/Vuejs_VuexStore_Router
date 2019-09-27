import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About'
import Login from './views/Login'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about' /* './views/About.vue') */,
      component: About
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      /* component: () =>
        import(/* webpackChunkName: "about" */
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})

router.beforeEach((to, from, next) => {
  const credentials = localStorage.getItem('credentials')
  if (to.name !== 'login') {
    if (!credentials) {
      // rota diferente do login sem credencial direiona para tela de login
      next('/login')
    } else {
      // rota diferente do login com credencial sem o barco
      next()
    }
  } else {
    if (credentials) {
      // rota login com credencial direciona para o home
      next('/')
    } else {
      // 'rota login sem credencial' segue o barco
      next()
    }
  }
})

export default router
