<template>
  <div id="app">
    <router-view></router-view>
    <index></index>
  </div>
</template>

<script>
import index from './views/layout/index.vue'

export default {
  name: 'App',
  components: {
    index
  },
}
</script>

<style>

</style>
