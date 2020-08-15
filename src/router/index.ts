import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import(/* webpackChunkName: "home" */ '@/views/home/Home.vue')
const Money = () => import(/* webpackChunkName: "money" */ '@/views/money/Money.vue')
const TodoList = () => import(/* webpackChunkName: "todolist" */ '@/views/todolist/TodoList.vue')
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
    name: 'TodoList',
    component: TodoList
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
    path: '*',
    component: NotFound
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
