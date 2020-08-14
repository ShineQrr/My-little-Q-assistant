<template>
  <div>
    <Layout></Layout>
  </div>
</template>

<script lang="ts">
// export default {
//   name: "Home",
// };
import Vue from "vue";
import { Component } from "vue-property-decorator";
import TabBar from "@/components/tabbar/TabBar.vue";
import Layout from "@/components/layout/Layout.vue";

@Component({
  components: { Layout, TabBar },
})
export default class Home extends Vue {}
</script>

<style lang="scss" scoped>
</style>