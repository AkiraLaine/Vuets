import Vue from 'vue'{{#if_eq lintConfig "airnbn"}};{{/if_eq}}
import App from './App'
{{#plugins.axios}}
import axios from 'axios'
{{/plugins.axios}}
{{#plugins.vue-router}}
import router from './router'
{{/plugins.vue-router}}
{{#plugins.vuex}}
import store from './store'
{{/plugins.vuex}}

{{#plugins.axios}}
Vue.prototype.$http = axios
{{/plugins.axios}}

/* eslint-disable no-new */
new Vue({
  {{#plugins.vue-router}}
  router,
  {{/plugins.vue-router}}
  {{#plugins.vuex}}
  store,
  {{/plugins.vuex}}
  render: h => h(App)
}).$mount('#app')
