<template>
  <div class="mz-tabbar">
    <ul class="mz-tabbar__ul">
      <li class="mz-tabbar__li" v-for="(tab,index) in tabs"
      :key="index">
        <router-link :to="tab.to" active-class="active">
          <i class="iconfont" :class="tab.icon"></i>
          <span>{{tab.name}}</span>
        </router-link>
      </li>
     
    </ul>
  </div>
</template>

<script>
export default {
  name: "Tabbar",
  props:{
      tabs:{
          type:Array,
          default(){
              return[];
          }
      }
  }
};
</script>
<style lang = "scss">
@import "../../assets/styles/common/px2rem.scss";
@import "../../assets/styles/common/mixins.scss";
.mz-tabbar {
  @include border-top;
   @include border-bottom;
  height: px2rem(50);
  background: #fff;
  &__ul {
    display: flex;
    height: 100%;
  }
  &__li {
    flex: 1;
    a {
      display: flex;
      flex-direction: column;
      align-items: center;
      font-size: 12px;
      height: 100%;
      justify-content: center;
      text-decoration: none;
      .iconfont {
        font-size: 24px;
        margin-bottom: 4px;
      }
      &.active {
        color: #ff5f16;
      }
    }
  }
}
</style>
