<template>
  <div class="wrap" v-show="showWrap" :class="showContent ?'fadein':'fadeout'">{{text}}</div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
@Component({})
export default class Toast extends Vue {}
</script>



<style lang="scss" scoped>
.wrap {
  position: fixed;
  left: 50%;
  top: 50%;
  background: lighten(#000, 60%);
  padding: 10px;
  border-radius: 5px;
  transform: translate(-50%, -50%);
  color: #fff;
}
.fadein {
  animation: animate_in 0.25s;
}
.fadeout {
  animation: animate_out 0.25s;
  opacity: 0;
}
@keyframes animate_in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes animate_out {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>