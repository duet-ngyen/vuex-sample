import Vue from 'vue'
import Router from 'vue-router'
import TodoHome from '@/components/Todos/TodoHome.vue'
import HomeEntity from '@/components/Entities/HomeEntity.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/todoapp',
      name: 'TodoHome',
      component: TodoHome
    },
    {
      path: '/entities',
      name: 'HomeEntity',
      component: HomeEntity
    }
  ]
})
