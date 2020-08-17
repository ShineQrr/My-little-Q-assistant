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
        </div>

        <!-- 图形菜单区域 -->
        <div class="grid-nav-wrapper">
          <div class="grid-item" @click="gotoMoney">
            <svg class="icon iconfont">
              <use xlink:href="#money_box" />
            </svg>

            <br />
            <span class="grid-item-text">记账本</span>
          </div>
          <div class="grid-item" @click="gotoRecord">
            <svg class="icon iconfont">
              <use xlink:href="#todo_list" />
            </svg>
            <br />
            <span class="grid-item-text">记事本</span>
          </div>
          <div class="grid-item" @click="changeThemeColor">
            <svg class="icon iconfont">
              <use xlink:href="#skill" />
            </svg>
            <br />
            <span class="grid-item-text">换肤</span>
          </div>
        </div>
      </div>
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
export default class Home extends Vue {
  name = "Qrr";
  userAvatarUrl = "src/assets/avatar.jpg";
  $toast: any;
  gotoMoney() {
    this.$router.push("/money");
  }
  gotoRecord() {
    this.$router.push("/todolist");
  }
  changeThemeColor() {
    this.$toast("功能实现中");
  }
}
</script>

<style lang="scss" scoped>
.head-field {
  // text-align: center;
  // padding: 20px 0;
  // margin-top: 50px;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  .head-field-pic {
    display: inline-block;
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
        width: 100px;
        height: 100px;
      }
    }
  }

  .info-field {
    text-align: center;
    font-size: 16px;
    color: #999;
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
  word-spacing: -6px;
  position: relative;
  &:before {
    content: " ";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 1px;
    border-top: 1px solid #d9d9d9;
    -webkit-transform: scaleY(0.5);
    -ms-transform: scaleY(0.5);
    transform: scaleY(0.5);
    top: -1px;
  }
  .grid-item {
    display: inline-block;
    text-align: center;
    width: 33.33%;
    padding: 20px 10px;
    box-sizing: border-box;
    position: relative;
    .grid-item-text {
      // color: #666;
      display: inline-block;
      padding-top: 10px;
    }
    .icon {
      width: 1.1em;
      height: 1.1em;
      vertical-align: -0.15em;
      fill: currentColor;
      overflow: hidden;
    }
    .iconfont {
      font-size: 2.2rem;
    }

    &:before {
      // 它意思就是要0.5px咯
      content: " ";
      position: absolute;
      right: 0;
      top: 0;
      width: 1px;
      height: 100%;
      border-right: 1px solid #d9d9d9;
      color: #d9d9d9;
      -webkit-transform: scaleX(0.5);
      -ms-transform: scaleX(0.5);
      transform: scaleX(0.5);
      right: -1px;
    }
    &:after {
      content: " ";
      position: absolute;
      left: 0;
      width: 100%;
      height: 1px;
      border-top: 1px solid #d9d9d9;
      -webkit-transform: scaleY(0.5);
      -ms-transform: scaleY(0.5);
      transform: scaleY(0.5);
      bottom: -1px;
    }
  }
}
</style>