import Vue from 'vue'
import App from './App'
{{#plugins.axios}}
import axios from 'axios'
{{/plugins.axios}}
{{#plugins.vue-router}}
import router from './router'
{{/plugins.vue-router}}

{{#plugins.axios}}
Vue.prototype.$http = axios
{{/plugins.axios}}

/* eslint-disable no-new */
new Vue({
  {{#plugins.vue-router}}
  router,
  {{/plugins.vue-router}}
  render: h => h(App)
}).$mount('#app')
