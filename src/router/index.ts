import Vue from 'vue'
import VueRouter from 'vue-router'
import HelloWorld from '@/demo/demo.vue'

const Home = () => import(/* webpackChunkName: "home" */ '@/views/home/Home.vue')
const Money = () => import(/* webpackChunkName: "money" */ '@/views/money/Money.vue')
const TodoListPage = () => import(/* webpackChunkName: "todolist" */ '@/views/todolist/TodoListPage.vue')
const DaysMatter = () => import(/* webpackChunkName: "daysmatter" */ '@/views/daysmatter/DaysMatter.vue')
const NotFound = () => import(/* webpackChunkName: "notfound" */ '@/views/NotFound.vue')

const BookKeeping = () => import(/* webpackChunkName: "bookkeeping" */ '../views/bookkeeping/BookKeeping.vue')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/money',
    name: 'Money',
    component: Money
  },
  {
    path: '/todolist',
    name: 'TodoListPage',
    component: TodoListPage
  },
  {
    path: '/daysmatter',
    name: 'DaysMatter',
    component: DaysMatter
  },
  {
    path: '/bookkeeping',
    name: 'BookKeeping',
    component: BookKeeping
  },
  {
    path: '/calendar',
    name: 'HelloWorld',
    component: HelloWorld
  },

  {
    path: '*',
    component: NotFound
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
