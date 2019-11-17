<template>
  <div id="app">
    <JGNavBar/>
    <JGSubNavBar/>
    <router-view/>
  </div>
</template>

<script>
import JGNavBar from '@/components/JG/JGNavBar'
import JGSubNavBar from '@/components/JG/JGSubNavBar'

export default {
  name: 'App',
  components: {
    JGNavBar,
    JGSubNavBar
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
