<template>
  <!-- 底部导航栏 -->
  <div class="tabbar">
    <router-link class="tabbar-item" to="/home" active-class="selected">
      <Icon :name="home" class="icon" />
      <p>首页</p>
    </router-link>
    <router-link class="tabbar-item" to="/money" active-class="selected">
      <Icon :name="money" class="icon" />
      <p>记账</p>
    </router-link>
    <router-link class="tabbar-item" to="/todolist" active-class="selected">
      <Icon :name="todo" class="icon" />
      <p>记事</p>
    </router-link>
    <router-link class="tabbar-item" to="/daysmatter" active-class="selected">
      <Icon :name="days" class="icon" />
      <p>记日</p>
    </router-link>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default class TabBar extends Vue {
  get home() {
    return this.$route.path === "/home" ? "home_selected" : "home";
  }
  get money() {
    return this.$route.path === "/money" ? "money_selected" : "money";
  }
  get todo() {
    return this.$route.path === "/todolist" ? "label_selected" : "label";
  }
  get days() {
    return this.$route.path === "/daysmatter"
      ? "icon_calendar_fill"
      : "icon_calendar";
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/var.scss";
// 底部导航栏样式
.tabbar {
  // @extend %outerShadow;
  display: flex;
  // justify-content: space-around;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.25);
  font-size: 0.75rem;
  // router-link的样式
  > .tabbar-item {
    flex: 1;
    padding-bottom: 0.125rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: $gray-6;
    // 图标样式
    .icon {
      width: 1.5rem;
      height: 1.5rem;
      margin: 0.25rem 0 0.125rem;
    }
  }
  > .tabbar-item.selected {
    color: $theme-color;
    > .icon {
      animation: choose 0.5s ease;
    }
  }

  @keyframes choose {
    0% {
      transform: scale(0.7, 0.7);
    }

    100% {
      transform: scale(1, 1);
    }
  }
}
</style>