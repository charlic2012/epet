<template>
  <div id="app">
    <cat_app></cat_app>
    <cat_app_header></cat_app_header>
    <cat_acontainer></cat_acontainer>
  </div>
</template>

<script>
  import catAppHeader from './components/catApp-header/catApp-header.vue'
  import catContainer from './components/catApp-container/catApp-container.vue'
  import catApp from './components/catApp/catApp.vue'
  export default {
   components: {
     'cat_app_header': catAppHeader,
     'cat_acontainer': catContainer,
     'cat_app': catApp
   }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
</style>
