import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Contact from './views/Contact.vue'
import Portfolio from './views/Portfolio.vue'
import Blog from './views/Blog.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Eissaweb',
      component: Home,
      icon: 'fa-home'
    },
    {
      path: '/contact',
      name: 'Contact me',
      component: Contact,
      icon: 'fa-phone-square'
    },
    {
      path: '/portfolio',
      name: 'Portfolio',
      component: Portfolio,
      icon: 'fa-briefcase'
    },
    {
      path: '/blog',
      name: 'Blog',
      component: Blog,
      icon: 'fa-rss'
    },
    {
      path: '/about',
      name: 'About',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: About,//() => import(/* webpackChunkName: "about" */ './views/About.vue')
      icon: 'fa-info-circle'
    }
  ]
})
