import { createRouter, createWebHistory } from "vue-router"
// import { auth } from "../firebase"
import Home from '../views/home/HomeView.vue'
import Auth from '../views/log/auth.vue'



const routes = [
  {
    path: '/auth',
    name: 'auth',
    component: Auth
  },
  

  {
    path: "/home",
    
    name: "home",
    component: Home,
    children: [
      {
        path: '1-childone',
        component: () => import('../views/home/VidChildOne.vue')
      },
      {
        path: '1-childtwo',
        component: () => import('../views/home/VidChildTwo.vue')
      },
      {
        path: '1-childthree',
        component: () => import('../views/home/VidChildThree.vue')
      },
      

    ],
    meta: { requiresAuth: true }
  },


  {
    path: "/index",
    alias: '/',
    name: "index",
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/index/NavTransplant.vue'),
    children:[
      {
        path: 'todolist',
        component: ()=> import('../views/index/TodoList.vue')
      },
      {
        path: 'githubsearch',
        component: ()=> import('../views/index/GithubSearch.vue')
      },
      {
        path: 'imap',
        component: () => import('../views/index/IMap.vue')
      },
      {
        path: 'photos',
        component: () => import('../views/index/Photos.vue')
      },
    ],
    meta: { requiresAuth: true }
  }

]

// const store = useStore()

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});
//Router Guards

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth)
  if (requiresAuth && !localStorage.getItem('user')) {
    next('/auth')
    return
  }
  next()
})
router.afterEach((to) => {
  localStorage.setItem('route', to.fullPath)
})



export default router;
