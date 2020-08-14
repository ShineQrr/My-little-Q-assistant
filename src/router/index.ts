import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/home/Home.vue';
import Money from '@/views/money/Money.vue';
import TodoList from '@/views/todolist/TodoList.vue';
import DaysMatter from '@/views/daysmatter/DaysMatter.vue';
import NotFound from '@/views/NotFound.vue';


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/money',
    component: Money
  },
  {
    path: '/todolist',
    component: TodoList
  },
  {
    path: '/daysmatter',
    component: DaysMatter
  },
  {
    path: '*',
    component: NotFound
  }
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router
