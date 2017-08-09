<template>
  <div class="IndexBox">
    <div class="catBox">
      <div class="allModules">
        <div class="clearfix">
          <div class="module module42">
            <div class="swiper-container">
              <div class="swiper-wrapper">
                <div class="swiper-slide">
                  <a href="javascript:;">
                    <img src="./a87ef931a96884b958d859952d3e40ad.png" alt="">
                  </a>
                </div>
                <div class="swiper-slide">
                  <a href="javascript:;">
                    <img src="./b6e5b275043c42d354fbdb32dd7aa919.png" alt="">
                  </a>
                </div>
                <div class="swiper-slide">
                  <a href="javascript:;">
                    <img src="./8a02414a1cd663dadc6e67c3ff9d6573.png" alt="">
                  </a>
                </div>
                <div class="swiper-slide">
                  <a href="javascript:;">
                    <img src="./b951926e38a8ba2664b7ff11a850f19d.png" alt="">
                  </a>
                </div>
                <div class="swiper-slide">
                  <a href="javascript:;">
                    <img src="./097de2a4fdf1e197c9304d9dba9a9876.png" alt="">
                  </a>
                </div>
              </div>
              <!-- 如果需要分页器 -->
              <div class="swiper-pagination"></div>

              <!-- 如果需要导航按钮 -->
              <!--<div class="swiper-button-prev"></div>-->
              <!--<div class="swiper-button-next"></div>-->

              <!-- 如果需要滚动条 -->
              <!--<div class="swiper-scrollbar"></div>-->
            </div>
          </div>
          <div class="module module43">
              <div class="module2-con">
                <div class="swiper-container-new">
                  <div class="swiper-wrapper-new">
                    <div class="swiper-slide-new">
                      <a href="javascript:;">
                        <img src="./986dc2be74b6528cea780c2efbd51988.gif" alt="">
                      </a>
                    </div>
                  </div>
                </div>
                <ul class="clearfix">
                  <li>
                    <a href="javascript:;">
                      <img src="./27e9bbcf34c51c1077d4dd8b835d0a2f.png" alt="">
                    </a>
                  </li>
                  <li>
                    <a href="javascript:;">
                      <img src="./7afb8e7f8be2b0dc2f91eec9a073cde8.png" alt="">
                    </a>
                  </li>
                  <li>
                    <a href="javascript:;">
                      <img src="./e5aac3f233b17be1e7c245a598f812e0.png" alt="">
                    </a>
                  </li>
                  <li>
                    <a href="javascript:;">
                      <img src="./75feae28f5876aaa615478b0b68992c3.png" alt="">
                    </a>
                  </li>
                  <li>
                    <a href="javascript:;">
                      <img src="./9c429ba6358ee54f4c6bdd8e4aa6831f.png" alt="">
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          <div class="module module44">
            <div class="page-line"></div>
          </div>
          <div class="module module45">
            <div class="surprise-wrap">
              <div class="surprise">
                <div class="grap">
                  <img src="./suprice.png" alt="">
                </div>
                <div class="endTime">
                  距本场结束
                </div>
                <span class="timeLast">
                  <span>00</span>
                  <span>:</span>
                  <span>00</span>
                  <span>:</span>
                  <span>00</span>
                </span>
                <div class="more">
                  <div class="more_wrapper">
                    <a href="javascript:;">
                      <img src="./8e1b9b24894c1d32c809e2a387d4e425.png" alt="more">
                    </a>
                  </div>
                </div>
              </div>
              <div class="hor_scroll_wrap">
                <div class="hor_scroll">
                  <!--<img src="." alt="">-->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
  import BScroll from 'better-scroll'
  export default {
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .IndexBox
    font-size 0
    .catBox
      .allModules
        .clearfix
          .module42
            .swiper-container
              .swiper-wrapper
                a
                  img
                    width 100%
                    height 160px
          &>.module43
            .module2-con
              .swiper-container-new
                .swiper-wrapper-new
                  .swiper-slide-new
                    a
                      img
                        width 100%
              &>.clearfix
                li
                  display inline-block
                  width 20%
                  a
                    img
                      width 100%
          &>.module44
            .page-line
              width 100%
              height 10px
              background-color #f3f4f5
          &>.module45
            .surprise-wrap
              .surprise
                font-size 13px
                .grap
                  display inline-block
                  vertical-align middle
                  width 28%
                  img
                    display inline-block
                    width 100%
                    margin 10px 0 0 -10px
                &>.endTime
                  display inline-block
                  width 18%
                  font-size 13px
                  margin-top 1px
                  vertical-align middle
                &>.timeLast
                  vertical-align middle
                  width 22%
                  span:nth-child(odd)
                    border 1px solid #7e8c8d
                &>.more
                  float right
                  margin-top -10px
                  width 19%
                  .more_wrapper
                    display inline-block
                    a
                      display inline-block
                      width
                      img
                        display inline-block
                        width 100%
</style>
