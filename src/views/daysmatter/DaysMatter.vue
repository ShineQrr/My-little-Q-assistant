<template>
  <div>
    <Layout>
      <!-- 顶部导航栏 -->
      <template #navbar>
        <nav-bar>
          <template #left>
            <Icon name="menu" />
          </template>
          <template #center>小Q记日</template>
        </nav-bar>
      </template>

      <!-- 中间内容区 -->
      <div>daysmatter内容区</div>
    </Layout>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import Layout from "@/components/layout/Layout.vue";

@Component({
  components: { Layout },
})
export default class DaysMatter extends Vue {}
</script>

<style lang="scss" scoped>
</style>