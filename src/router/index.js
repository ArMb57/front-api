import { createRouter, createWebHistory } from 'vue-router'
import PostsList from '@/views/PostList.vue';
import PostDetail from '@/views/PostDetail.vue'
import CreatePost from '@/views/CreatePost.vue'
import UpdatePost from '@/views/UpdatePost.vue'
import Register from '@/views/RegisterUser.vue'
import Login from '@/views/LoginUser.vue'
import store from '../store'


const routes = [
  {
    path: '/',
    name: 'postsList',
    component: PostsList
  },
  {
    path: '/posts/:id',
    name: 'postsDetail',
    component: PostDetail,
    props: true
  },
  {
    path: '/create',
    name: 'createPost',
    component: CreatePost,
    beforeEnter: (to, from, next) => {
      if(store.getters.isLoggedIn){
        next();
      }else{
        next('/login')
      }
    }
  },
  {
    path: '/update/:id',
    name: 'updatePost',
    component: UpdatePost, 
    props: true,
    beforeEnter: (to, from, next) => {
      if(store.getters.isLoggedIn){
        next();
      }else{
        next('/login')
      }
    }
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
