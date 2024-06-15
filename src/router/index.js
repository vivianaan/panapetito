import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
 history: createWebHistory(import.meta.env.BASE_URL),
 routes: [
  {
    path:'/',
    redirect: '/pan'
  },
  {
    path:'/:categoria',
    name:'productos',
    component: () => import('@/views/productosview.vue'),
    props:true
  }
]
})

export default router



  

