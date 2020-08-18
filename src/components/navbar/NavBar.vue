<template>
  <!-- 顶部标题栏 -->
  <div class="nav-bar text-white">
    <div class="nav-left">
      <slot name="left"></slot>
    </div>
    <div class="nav-center">
      <slot name="center">标题</slot>
    </div>
    <div class="nav-right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "NavBar",
};
</script>

<style lang="scss" scoped>
@import "~@/assets/style/var.scss";
@import "~@/assets/style/mixin.scss";

.nav-bar {
  z-index: $nav-bar-z-index;
  display: flex;
  align-items: center;
  height: $nav-bar-height;
  line-height: 1.5;
  text-align: center;
  font-weight: bold;
  @include bg_color(#86aea6);
  // @include bg_color(green);
  // background-color: $theme-color;
  .nav-left {
    width: 3.75rem;
  }

  .nav-center {
    flex: 1;
  }

  .nav-right {
    width: 3.75rem;
  }
}
</style>