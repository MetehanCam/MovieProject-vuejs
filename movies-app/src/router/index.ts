import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../pages/Home.vue';
import Series from '../pages/Series.vue';
import Movie from '../pages/Movie.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path:'/',
    component:Home
},{
    path:'/movies',
    component: Movie
},
{
    path:'/series',
    component:Series
}
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
