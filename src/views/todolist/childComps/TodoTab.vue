<template>
  <div class="todo-tab-wrap" v-if="lists.length > 0">
    <div class="nums-wrap">剩 {{ unFinishedTask }} 条任务</div>

    <div class="btn-wrap">
      <a
        v-for="(state, index) of status"
        :class="{ active: filter === state }"
        :key="index"
        @click="handleClick(state)"
      >{{ state }}</a>
    </div>
    <div class="clear-wrap">
      <a @click="handleDele">删除</a>
      <a @click="handleClear">清空</a>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Prop, Component } from "vue-property-decorator";

@Component({})
export default class TodoTab extends Vue {
  @Prop({ required: true }) lists?: TodoList[];
  @Prop({ required: true }) filter?: string;

  status = ["全部", "未完成", "已完成"];
  get unFinishedTask() {
    return this.lists ? this.lists.filter((list) => !list.finished).length : 0;
  }
  handleClick(state: string) {
    this.$emit("toggle", state);
  }
  handleDele() {
    this.$emit("dele");
  }
  handleClear() {
    this.$emit("clear");
  }
}
</script>

<style lang="scss" scoped>
.todo-tab-wrap {
  margin-top: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .nums-wrap {
    font-size: 13px;
    padding-top: 3px;
  }
  .btn-wrap > a,
  .clear-wrap > a {
    padding: 3px 5px;
    font-size: 12px;
    margin-left: 2px;
    margin-right: 2px;
    border-radius: 4px;
    cursor: pointer;
    border: 1px solid transparent;
  }
  // .btn-wrap > a.active,
  // .clear-wrap > a {
  //   border-color: #ccc;
  // }
  .clear-wrap > a {
    border-color: #ccc;
  }
  .btn-wrap > a.active {
    font-weight: bolder;
    border-radius: 0;
    border-bottom: 1px solid #333333;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    -webkit-tap-highlight-color: transparent;
    outline: none;
  }
}
</style>
