<template>
  <div class="layout-wrapper">
    <!-- 顶部导航栏 -->
    <header>
      <slot name="navbar"></slot>
    </header>

    <!-- 中间内容区 -->
    <div class="content">
      <slot />
    </div>

    <!-- 底部标签栏 -->
    <tab-bar></tab-bar>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import TabBar from "../tabbar/TabBar.vue";
import NavBar from "../navbar/NavBar.vue";

@Component({
  components: { TabBar, NavBar },
})
export default class Layout extends Vue {}
</script>

<style scoped lang="scss">
.layout-wrapper {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.content {
  overflow: auto;
  flex-grow: 1;
}
</style>
