<template>
  <transition name="fade">
    <div class="toast" v-show="isShow">
      <div>{{message}}</div>
    </div>
  </transition>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
@Component({})
export default class Toast extends Vue {
  isShow = false;
  message = "";

  show(message = "默认显示", duration = 1000) {
    this.isShow = true;
    this.message = message;

    setTimeout(() => {
      this.isShow = false;
      this.message = "";
    }, duration);
  }
}
</script>



<style scoped>
.toast {
  /* width: 200px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  position: fixed;
  font-size: 20px;
  top: 30%;
  left: 50%;
  z-index: 1000;
  color: #ffffff;
  background: rgba(0, 0, 0, 0.7);
  padding: 10px;
  transform: translate(-50%, -50%); */
  padding: 5px 20px;
  border-radius: 5px;
  color: #fff;
  background: rgba(0, 0, 0, 0.6);
  text-align: center;
  position: fixed;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
}
/* vue动画过渡效果设置 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>