<template>
  <div class="header_wrapper">
    <div class="header_wrap">
      <div class="header">
        <div class="header-top">
          <a href="javascript:;">
          <span class="header-top-left">猫站|重庆
            <img src="./index_icon_comment_sanjiao.png" alt="">
          </span>
          </a>
          <a href="javascript:;" class="search">
            <input type="text" placeholder="搜索商品和品牌">
            <img src="./search.png" alt="search">
          </a>
          <div class="mydope">
            <a href="javascript:;" class="mydope-pic">
              <img src="./mydope.png" alt="">
            </a>
          </div>
        </div>
      </div>
      <div class="find_nav">
        <div class="find_nav_left">
          <div class="find_nav_item" ref="scroll">
            <ul class="bscroll_ul">
              <li class="bscroll_li active" >
                <a href="javascript:;">
                  <span>首页</span>
                  <i></i>
                </a>
              </li>
              <li class="bscroll_li">
                <a href="javascript:;">
                  <span>猫粮</span>
                  <i></i>
                </a>
              </li>
              <li class="bscroll_li">
                <a href="javascript:;">
                  <span>特卖</span>
                  <i></i>
                </a>
              </li>
              <li class="bscroll_li">
                <a href="javascript:;">
                  <span>罐头超市</span>
                  <i></i>
                </a>
              </li>
              <li class="bscroll_li">
                <a href="javascript:;">
                  <span>潮品视频</span>
                  <i></i>
                </a>
              </li>
              <li class="bscroll_li">
                <a href="javascript:;">
                  <span>新喵课堂</span>
                  <i></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
  export default{
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .header_wrapper
    height 91px
    overflow hidden
    position relative
    background-color #fff
    .header_wrap
      position absolute
      top 0
      left 0
      z-index 99
      background-color #fff
      .header
        position relative
        font-size 15px
        margin 15px 0 0 0
        box-sizing border-box
        width 100%
        .header-top
          width 100%
          a:nth-child(1)
            width 16%
            .header-top-left
              position relative
              margin auto 15px auto 10px
              display inline-block
              color #333
              font-size 14px
              img
                position: absolute;
                top: 0px;
                right: -13px;
                width: 10px
          &>.search
            position relative
            width 64%
            img
              position absolute
              top 5px
              right 10px
              width 13px
              height 13px
            &>input[type="text"]::-webkit-input-placeholder
              color #666
              font-size 13px
              padding-left 9px
            &>input
              height 24px
              background-color: #f6f6f6
              outline none
              width 52%
          &>.mydope
            display inline-block
            width 9%
            .mydope-pic
              display inline-block
              position relative
              img
                position absolute
                bottom -7px
                right -23px
                height 25px
                width 25px
      .find_nav
        width 100%
        font-size 0px
        color #666
        .find_nav_left
          width 100%
          .find_nav_item
            overflow hidden
            .bscroll_ul
              width 450px
              display flex
              line-height 36px
              margin-top 13px
              .bscroll_li
                font-size 14px
                width 16.66%
                text-align center
              &>.active
                color #e73f85
                border-bottom solid 3px #e73f85
</style>
