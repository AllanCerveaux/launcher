import Vue from 'vue'
import VueRouter from 'vue-router'

// Middleware
import { ifAuthenticated, ifNotAuthenticated } from './middleware'

// Views
import GameContainer from '../views/GameContainer.vue'
import ChatContainer from '../views/ChatContainer.vue'
import NewsContainer from '../views/NewsContainer.vue'

// Components
import Login from '../components/Auth/Login.vue'

Vue.use(VueRouter)

const routes = [
{
  path: '/',
  redirect: '/game/game-1',
  beforeEnter: ifAuthenticated
},
{
  path: '/game',
  redirect: '/game/game-1',
  beforeEnter: ifAuthenticated
},
{
  path:'/login',
  name: 'login',
  component: Login,
  beforeEnter: ifNotAuthenticated
},
{
  path: '/game/:name',
  name: 'game-container',
  component: GameContainer,
  props: (route) => ({name: route.params.name || 'game-1'}),
  beforeEnter: ifAuthenticated
},
{
  path: '/chat',
  name: 'chat-container',
  component: ChatContainer,
  beforeEnter: ifAuthenticated
},
{
  path: '/news',
  name: 'news-container',
  component: NewsContainer,
  beforeEnter: ifAuthenticated
},
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
