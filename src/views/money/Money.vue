<template>
  <Layout>
    <!-- 顶部导航栏 -->
    <template #navbar>
      <nav-bar>
        <template #left>
          <Icon name="menu" />
        </template>
        <template #center>小Q记账</template>
        <template #right>
          <Icon name="statistics3" />
        </template>
      </nav-bar>
    </template>

    <!-- 中间内容区 -->
    <div>记账内容区</div>
  </Layout>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import Layout from "@/components/layout/Layout.vue";

@Component({
  components: { Layout },
})
export default class Money extends Vue {}
</script>

<style lang="scss" scoped>
</style>