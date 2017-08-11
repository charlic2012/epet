<template>
  <div class="indexBox">
    <div class="sup">
      <div class="close">
        <img src="./close2.png" alt="close">
      </div>
      <div class="discount">
        <img src="./211547bb51dd23758f74fb86e9d7aae5.png" alt="discount">
      </div>
      <div class="main">
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
  export default {
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .indexBox
    position relative
    z-index 99
    .sup
      .close
        position relative
        img
          position absolute
          top 18px
          left 10px
          width 15px
          height 15px
      &>.discount
          img
            width 100%
</style>
