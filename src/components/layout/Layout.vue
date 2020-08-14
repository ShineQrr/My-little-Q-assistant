<template>
  <div class="layout-wrapper">
    <nav-bar></nav-bar>
    <div class="content">
      <slot />
    </div>
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
  // background-color: #E1E1E0;
}
</style>
