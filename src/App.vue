<template>
  <div id="app" class="text-center mt-10">
    <app-header></app-header>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from './components/Header.vue'

export default {
  name: 'App',
  components: {
    'app-header': Header,
  }
}
</script>

<style>

</style>
