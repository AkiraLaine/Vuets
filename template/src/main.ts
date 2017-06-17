import Vue from 'vue'
import App from './App'
{{#plugins.vue-router}}
import router from './router'
{{/plugins.vue-router}}

/* eslint-disable no-new */
new Vue({
  {{#plugins.vue-router}}
  router,
  {{/plugins.vue-router}}
  render: h => h(App)
}).$mount('#app')
