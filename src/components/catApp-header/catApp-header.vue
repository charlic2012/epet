<template>
  <div class="header-wrapper">
    <div class="header">
      <div class="header-top">
        <a href="javascript:;">
          <span class="header-top-left">猫站|重庆
            <a href="./index_icon_comment_sanjiao.png"></a>
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
            <li class="bscroll_li" >
              <a href="javascript:;" class="active">
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
</template>
<script type="text/javascript">
  import BScroll from 'better-scroll'
  export default {
    props: {
      wrapper: {
        type: String
      }
    },
    data() {
      return{
        goods: []
      }
    },
    created(){
      this._initScroll()
    },
    methods: {
      _initScroll(){
        this.scroll = new BScroll(this.refs.scroll,{

        })
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .header-wrapper
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
            .bscroll_li
              font-size 14px
              width 16.66%
              text-align center
              .active
                color #e73f85
                border-bottom solid 3px #e73f85
                margin-bottom 10px
    .search
      position relative
      width 64%
      img
        position absolute
        top 5px
        right 5px
        width 13px
        height 13px
      input[type="text"]::-webkit-input-placeholder
        color #666
        font-size 13px
        padding-left 9px
      input
        height 24px
        background-color: #f6f6f6
        outline none
        width 64%
    .header
      .header-top
        width 100%
        a
          width 16%
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
      position relative
      font-size 15px
      margin 15px 0 0 0
      box-sizing border-box
      width 100%
      .header-top-left
        position relative
        margin auto 15px auto 10px
        display inline-block
        color #333
        font-size 14px
        a
          position absolute
          width 8px
          height 8px
          top -1px
          left 62px
</style>
