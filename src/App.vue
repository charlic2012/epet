<template>
  <div id="app">
    <cat_app></cat_app>
    <cat_app_header></cat_app_header>
    <cat_acontainer></cat_acontainer>
    <cat_footer></cat_footer>
  </div>
</template>

<script>
  import catAppHeader from './components/catApp-header/catApp-header.vue'
  import catContainer from './components/catApp-container/catApp-container.vue'
  import catApp from './components/catApp/catApp.vue'
  import catFooter from './components/cat-footer/cat-footer.vue'
  export default {
   components: {
     'cat_app_header': catAppHeader,
     'cat_acontainer': catContainer,
     'cat_app': catApp,
     'cat_footer': catFooter
   }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #app
    font-size 0
</style>
