<template>
  <transition name="slide-fade">
    <div class="color-panel-wrapper" v-show="isColorPanelShow">
      <div class="color-panel-icon">
        <Icon name="close2" @click="closeColorPanel" />
      </div>
      <div class="top-panel">
        <li @click="changeThemeColor('theme1')"></li>
        <li @click="changeThemeColor('theme2')"></li>
        <li @click="changeThemeColor('theme3')"></li>
        <li @click="changeThemeColor('theme4')"></li>
      </div>
      <div class="buttom-panel">
        <li @click="changeThemeColor('theme5')"></li>
        <li @click="changeThemeColor('theme6')"></li>
        <li @click="changeThemeColor('theme7')"></li>
        <li @click="changeThemeColor('theme8')"></li>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";

@Component({})
export default class ColorPanel extends Vue {
  @Prop() isColorPanelShow!: false;

  changeThemeColor(themeValue: string) {
    window.document.documentElement.setAttribute("data-theme", themeValue);
    localStorage.setItem("themeColor", JSON.stringify(themeValue));
  }

  closeColorPanel() {
    this.$emit("close-panel");
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/var.scss";
@import "~@/assets/style/mixin.scss";

.color-panel-wrapper {
  border-radius: 8px;
  box-shadow: 0 8px 12px #ebedf0;
  bottom: 10%;
  position: absolute;
  left: 3%;
  height: 190px;
  width: 94%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-align: center;
  padding-bottom: 20px;
  background: $white;
  li {
    width: 46px;
    height: 46px;
    border-radius: 23px;
  }
  .top-panel {
    display: flex;
    justify-content: space-around;
    width: 100%;
    li:nth-child(1) {
      background-color: $background-color-theme1;
    }
    li:nth-child(2) {
      background-color: $background-color-theme2;
    }
    li:nth-child(3) {
      background-color: $background-color-theme3;
    }
    li:nth-child(4) {
      background-color: $background-color-theme4;
    }
  }

  .buttom-panel {
    display: flex;
    justify-content: space-around;
    width: 100%;
    li:nth-child(1) {
      background-color: $background-color-theme5;
    }
    li:nth-child(2) {
      background-color: $background-color-theme6;
    }
    li:nth-child(3) {
      background-color: $background-color-theme7;
    }
    li:nth-child(4) {
      background-color: $background-color-theme8;
    }
  }
}
.color-panel-icon {
  text-align: right;
  padding-right: 15px;
  font-size: 1.4rem;
}

.slide-fade-enter-active {
  transition: all 0.5s ease;
}
.slide-fade-leave-active {
  transition: all 0.5s ease;
  opacity: 0;
}
.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateY(200px);
  opacity: 0;
}
</style>