<template>
  <div id='app'>
    <home></home>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue'
import Component from 'vue-class-component'
import Home from './components/Home'

@Component({
  components: {
    Intro
  }
})
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
