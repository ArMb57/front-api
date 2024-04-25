import { createRouter, createWebHistory } from 'vue-router'
import PostsList from '@/views/PostList.vue';


const routes = [
  {
    path: '/',
    name: 'postsList',
    component: PostsList
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
