<template>
  <div id="app">
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>

//  全局样式 因此不加scoped
<style lang="scss">
@import "~@/assets/style/style.scss";
// @import "~@/assets/style/helper.scss";
// @import "~@/assets/style/reset.scss";
// @import "~@/assets/style/var.scss";

body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #333;
  // font-family: $font-hei;
  // font-size: 16px;
  line-height: 1.5;
  background: $background-color;
}
#app {
  min-width: 320px;
  max-width: 750px;
  margin: 0 auto;
}

// @media screen and (min-width: 750px) {
//   html {
//     font-size: 37.5px !important;
//   }
// }
</style>
