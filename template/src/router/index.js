import Vue from 'vue'{{#if_eq lintConfig "airbnb-base"}};{{/if_eq}}
import Router from 'vue-router'{{#if_eq lintConfig "airbnb-base"}};{{/if_eq}}

import Home from './components/Home'{{#if_eq lintConfig "airbnb-base"}};{{/if_eq}}

Vue.use(Router){{#if_eq lintConfig "airbnb-base"}};{{/if_eq}}

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    }
  ]
}){{#if_eq lintConfig "airbnb-base"}};{{/if_eq}}
