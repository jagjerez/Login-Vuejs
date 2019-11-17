<template>
    <nav class="navbar navbar-light bg-light">
        <a class="navbar-brand" href="#">{{title}}</a>
        <div class="btn-group float-right dropleft">
            <button type="button" class="btn btn-sm btn-secondary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <span class="sr-only">Haz Click</span>
            </button>
            <div class="dropdown-menu">
                <button class="dropdown-item" type="button">Login</button>
                <button class="dropdown-item" type="button">Register</button>
                <button class="dropdown-item" type="button">Github</button>
            </div>
        </div>
    </nav>
</template>

<script>
import {mapState} from 'vuex'

export default {
  name: 'JGNavBar',
  computed: {
    ...mapState(['title'])
  }
}
</script>

<style scoped>
  nav{
    box-shadow: 0ch 0.05ch 0.2ch rgb(199, 199, 199);
  }
</style>
