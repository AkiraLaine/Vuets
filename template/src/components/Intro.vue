<template>
  <div>
    <h3>Welcome to {{ properName }}</h3>
    This is the Home page
  </div>
</template>

<script lang='ts'>
import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class Home extends Vue {

}
</script>

<style scoped>

</style>
