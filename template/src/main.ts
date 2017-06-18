import Vue from 'vue'
import App from './App'
{{#plugins.vue-router}}
import router from './router'
{{/plugins.vue-router}}
{{#plugins.vuex}}
import store from './store'
{{/plugins.vuex}}

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
