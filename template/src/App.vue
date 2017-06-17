<template>
  <div id='app'>
    {{#plugins.vue-router}}
    <router-view></router-view>
    {{else}}
    <home></home>
    {{/plugins.vue-router}}
  </div>
</template>

<script lang='ts'>
import Vue from 'vue'
import Component from 'vue-class-component'
{{#plugins.vue-router}}
{{else}}
import Home from './components/Home'
{{/plugins.vue-router}}

{{#plugins.vue-router}}
@Component
{{else}}
@Component({
  components: {
    Home
  }
})
{{/plugins.vue-router}}
export default class App extends Vue {
  // data
  appName : string = 'vuets'

  // lifecycle hooks
  mounted () {
    this.printToConsole()
  }

  // methods
  printToConsole () {
    console.log('Welcome to Vuets')
  }

  // computed
  get properName () {
    return `${this.appName[0].toUpperCase()}${this.appName.slice(1)}`
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
</style>
