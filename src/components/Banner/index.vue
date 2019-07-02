<template>
  <div class="mz-banner swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide"
      v-for="item in list"
      :key="item.bannerId"
      >
        <img :src="item.imgUrl" alt="" >
      </div>
      
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination" pagination></div>

    <!-- 如果需要导航按钮 -->
    <template v-if="navigation">
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
    </template>

    <!-- 如果需要滚动条 -->
    <div class="swiper-scrollbar" v-if="scrollbar"></div>
  </div>
</template>
<script>
import Swiper from "swiper";
export default {
  name: "Banner",
  props: {
    //轮播的项
    list:{
      type:Array,
      default(){
        return [];
      }
    },
    navigation: {
      type: Boolean,
      default: false
    },
    scrollbar: {
      type: Boolean,
      default: false
    },
    pagination: {
      type: Boolean,
      default: false
    },
    loop:{
      type:Boolean,
      default:false
    }
  },
  methods: {
    initSwiper() {
    this.mySwiper = new Swiper(".swiper-container", {
        loop : this.loop,
        pagination: this.pagination
          ? {
               el: '.swiper-pagination',
            }
          : {},
        navigation: this.navigation
          ? {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev"
            }
          : {},
          scrollbar: this.scrollbar
          ? {
              el: '.swiper-scrollbar',
            }
          : {}, 
      });
    }
  },

  updated (){
    //判断是否list有变化，如果时候初始化swiper
    if(this.list.length && !this.mySwiper){
      this.initSwiper();
    }
  },
 
};
</script>

<style lang="scss">
@import "~swiper/dist/css/swiper.css";
@import "~@/assets/styles/common/px2rem.scss";

.mz-banner {
  height: px2rem(210);
}
</style>


