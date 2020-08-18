<template>
  <div class="keeping-wrapper">
    <div class="keeping-navbar-wrapper">
      <nav-bar>
        <template #left>
          <Icon name="arrow-left" class="nav-header-icon" @click="goBack" />
        </template>
        <template #center>
          <!-- 支出/收入 -->
          <div class="tab-wrapper">
            <Tabs class-prefix="type" :data-source="recordTypeList" :value.sync="record.type" />
          </div>
        </template>
        <template #right>
          <Icon name="label-manage" class="nav-header-icon" />
        </template>
      </nav-bar>
    </div>

    <!-- 顶部标签区域 -->
    <div class="tags-wrapper">
      <Tags @update:value="record.tags = $event"></Tags>
    </div>

    <!-- 日期和备注栏 -->
    <div class="date-notes-wrapper">
      <div class="createdAt">
        <FormItem field-name="日期" type="date" placeholder="在这里输入日期" :value.sync="record.createdAt" />
      </div>
      <div class="notes-wrapper">
        <FormItem field-name="备注" placeholder="在这里输入备注" :value.sync="record.notes"></FormItem>
      </div>
    </div>

    <!-- 数字面板 -->
    <div class="numberpad-wrapper">
      <NumberPad @update:value="onUpdateAmount" @submit="saveRecord"></NumberPad>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import Layout from "@/components/layout/Layout.vue";
import NavBar from "@/components/navbar/NavBar.vue";
import Tabs from "@/components/tabs/Tabs.vue";
import Tags from "../money/childComps/Tags.vue";
import FormItem from "../money/childComps/FormItem.vue";
import NumberPad from "../money/childComps/NumberPad.vue";

import recordTypeList from "@/constants/recordTypeList";

@Component({
  components: { Layout, NavBar, Tabs, Tags, FormItem, NumberPad },
})
export default class BookKeeping extends Vue {
  recordTypeList = recordTypeList;
  record: RecordItem = {
    tags: [],
    notes: "",
    type: "-",
    amount: 0,
    createdAt: new Date().toISOString(),
  };
  // recordList = window.recordList;
  get recordList() {
    return this.$store.state.recordList;
  }
  created() {
    this.$store.commit("fetchRecords");
  }
  onUpdateNotes(notes: string) {
    this.record.notes = notes;
  }

  onUpdateAmount(value: string) {
    this.record.amount = parseFloat(value);
  }

  // 点击ok,触发saveRecord,将当前数据存储到localStorage中
  saveRecord() {
    if (!this.record.tags || this.record.tags.length === 0) {
      return window.alert("请至少选择一个标签");
    }
    // store.createRecord(this.record);
    this.$store.commit("createRecord", this.record);
    if (this.$store.state.createRecordError == null) {
      window.alert("已保存");
      this.record.notes = "";
    }
  }

  goBack() {
    // this.$router.back();
    this.$router.replace("/money");
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/var.scss";

.keeping-wrapper {
  height: 100vh;
  display: flex;
  flex-direction: column;
  .nav-header-icon {
    width: 1.5em;
    height: 1.5em;
    vertical-align: -0.3em;
  }
  .tags-wrapper {
    background-color: $background-color;
    // height: 200px;
    flex: 1;
    overflow: hidden;
    // border-bottom: 1px solid red;
    box-shadow: inset 0 -3px 3px -3px $color-shadow;
  }
}
.tab-wrapper {
  width: 60%;
  margin: 0 auto;
  border-radius: 0.3 * $tab-item-hight;
}
::v-deep {
  .type-tabs-item {
    height: $tab-item-hight;
    font-size: $tab-content-font-size * 1.2;
    font-weight: 500;
    &.selected {
      box-sizing: content-box;
      font-weight: 600;
      &.selected::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 3px;
        background: $white;
      }
    }
  }
  .interval-tabs-item {
    height: $nav-bar-height;
  }
}
.date-notes-wrapper,
.numberpad-wrapper {
  background-color: $background-color;
}
.mask {
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: #000;
  z-index: 5;
  opacity: 0.75;
}
</style>