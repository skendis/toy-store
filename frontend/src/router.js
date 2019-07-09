import Vue from 'vue'
import Router from 'vue-router'
import ToyApp from './views/ToyApp'
import ToyDetails from './views/ToyDetails'
import ToyEdit from './views/ToyEdit'
import ToyAdd from './views/ToyAdd'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: ToyApp
    },
    {
      path: '/toy/new',
      name: 'ToyAdd',
      component: ToyAdd
    },
    {
      path: '/toy/:id?',
      name: 'toyDetails',
      component: ToyDetails
    },
    {
      path: '/toy/edit/:id?',
      name: 'toyEdit',
      component: ToyEdit
    },
    
  ]
})
