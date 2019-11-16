<template>
  <div id="app">
    <JGNavBar/>
    <router-view/>
  </div>
</template>

<script>
import JGNavBar from '@/components/JG/JGNavBar'

export default {
  name: 'App',
  components: {
    JGNavBar
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
