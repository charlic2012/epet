<template>
  <div class="footer_wrapper">
    <div class="footer">
      <ul class="footer_icon">
        <li class="icon_list1">
          <a href="javascript:;"></a>
        </li>
        <li class="icon_list2">
          <a href="javascript:;"></a>
        </li>
        <li class="icon_list3">
          <a href="javascript:;"></a>
        </li>
        <li class="icon_list4">
          <a href="javascript:;"></a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script type="text/javascript">
  export default{

  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .footer_wrapper
    height 55px
    width 100%
    background-color #fff
    position absolute
    bottom 0
    left 0
    .footer
      height 100%
      .footer_icon
        height 100%
        .icon_list1
          float left
          height 55px
          width 25%
          background url("./main_tab_1_sel.png") no-repeat center
          background-size 50%
        &>.icon_list2
          background url("./main_tab_2.png") no-repeat center
          float left
          height 55px
          width 25%
          background-size 50%
        &>.icon_list3
          background url("./main_tab_3.png") no-repeat center
          float left
          height 55px
          width 25%
          background-size 50%
        &>.icon_list4
          background url("./main_tab_4.png") no-repeat center
          float left
          height 55px
          width 25%
          background-size 50%
</style>
