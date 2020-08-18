<template>
  <div>
    <Layout>
      <!-- 顶部导航栏 -->
      <template #navbar>
        <nav-bar>
          <template #left>
            <Icon name="menu" />
          </template>
          <template #center>小Q同学</template>
        </nav-bar>
      </template>

      <!-- 中间内容区 -->
      <div class="home-content">
        <!-- 头像区域 -->
        <div class="head-field">
          <span class="head-field-pic">
            <span class="img-hover">
              <!-- <img :src="userinfo.headUrl" v-autofix="name"/> -->
              <img src="../../assets/avatar.jpg" />
            </span>
          </span>
          <div class="username-field">{{ username }}</div>
        </div>

        <!-- 图形菜单区域 -->
        <div class="grid-nav-wrapper">
          <div class="grid-item" @click="gotoMoney">
            <svg class="icon grid-item-icon">
              <use xlink:href="#GULULU-money" />
            </svg>
            <span class="grid-item-text">记账本</span>
          </div>

          <div class="grid-item" @click="gotoRecord">
            <svg class="icon grid-item-icon">
              <use xlink:href="#GULULU-todolist" />
            </svg>

            <span class="grid-item-text">记事本</span>
          </div>
          <div class="grid-item" @click="showColorPanel">
            <svg class="icon grid-item-icon">
              <use xlink:href="#change-color2" />
            </svg>

            <span class="grid-item-text">换肤</span>
          </div>
        </div>
      </div>
    </Layout>
    <color-panel :isColorPanelShow="isColorPanelShow" @close-panel="closeColorPanel()"></color-panel>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import Layout from "@/components/layout/Layout.vue";
import ColorPanel from "@/components/colorpanel/ColorPanel.vue";

@Component({
  components: { Layout, ColorPanel },
})
export default class Home extends Vue {
  isColorPanelShow = false;
  username = "清儿阿";
  name = "Qrr";
  userAvatarUrl = "src/assets/avatar.jpg";
  gotoMoney() {
    this.$router.push("/money");
  }
  gotoRecord() {
    this.$router.push("/todolist");
  }
  showColorPanel() {
    this.isColorPanelShow = true;
  }
  closeColorPanel() {
    this.isColorPanelShow = false;
  }

  created() {
    if (localStorage.getItem("themeColor")) {
      const localTheme = JSON.parse(localStorage.getItem("themeColor") || "");
      window.document.documentElement.setAttribute("data-theme", localTheme);
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/var.scss";
@import "~@/assets/style/mixin.scss";
.head-field {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: $background-color;
  .head-field-pic {
    width: 100%;
    .img-hover {
      // css 宽高等比例
      display: inline-block;
      width: 30%;
      height: 0;
      padding-bottom: 30%;
      border-radius: 50%;
      overflow: hidden;
      img {
        width: 120px;
        height: 120px;
      }
    }
  }
  .username-field {
    padding-top: 8px;
  }
}

.home-content {
  height: 100%;
  display: flex;
  flex-direction: column;
  .grid-nav-wrapper {
    height: 220px;
  }
}

.grid-nav-wrapper {
  display: flex;
  justify-content: space-around;
  // align-items: start;
  background-color: $background-color;
}
.grid-item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 27%;
  height: 50%;
  background-color: #f2f1ef;
  border-radius: 10px;
  .icon {
    width: 1.1em;
    height: 1.1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
    margin-top: 10px;
  }
  .grid-item-icon {
    font-size: 2.8rem;
  }
  .grid-item-text {
    padding-top: 6px;
    font-weight: bold;
    font-size: 0.875rem;
  }
}
</style>