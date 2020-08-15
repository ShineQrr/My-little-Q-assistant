<template>
  <div>
    <Layout>
      <!-- 顶部导航栏 -->
      <template #navbar>
        <nav-bar>
          <template #left>
            <Icon name="menu" />
          </template>
          <template #center>小Q记事</template>
        </nav-bar>
      </template>

      <!-- 中间日历区 -->
      <div v-show="isListShow" class="calendar-wrapper"></div>

      <div class="hide-bar" @click="changeCalendarDisplay">
        <span>{{ isListShow? '隐藏' : '显示'}}日历</span>
        <Icon :name="hideBarIconName" class="hide-bar-icon" />
      </div>

      <!-- 底部内容区 -->
      <div class="todocard-wrapper">
        <h2>TODO</h2>
        <input class="edit" @keydown.enter="addTask" type="text" placeholder="今天要做些什么..." />
        <div v-if="lists.length > 0">
          <todo-list-item
            v-for="list of filterTodoList"
            :list="list"
            :key="list.id"
            @change="status"
            @remove="removeTask"
          ></todo-list-item>
        </div>
        <todo-tab
          :lists="lists"
          :filter="filter"
          @toggle="toggleFilter"
          @clear="clearAll"
          @dele="deleteList"
        ></todo-tab>
      </div>
    </Layout>
  </div>
</template>

// <script lang="ts">
// import Vue from "vue";
// import { Component } from "vue-property-decorator";
// import Layout from "@/components/layout/Layout.vue";
// import TodoListItem from "./childComps/TodoListItem.vue";
// import TodoTab from "./childComps/TodoTab.vue";

// @Component({
//   components: { Layout, TodoListItem, TodoTab },
// })
// export default class TodoList extends Vue {
//   id = 0;
//   lists = [];
//   filter = "全部";
// }
//
</script>

<script>
import Layout from "@/components/layout/Layout.vue";
import TodoListItem from "./childComps/TodoListItem.vue";
import TodoTab from "./childComps/TodoTab.vue";

export default {
  name: "TodoList",
  components: {
    Layout,
    TodoListItem,
    TodoTab,
  },
  data() {
    return {
      id: 0,
      lists: [],
      filter: "全部",
      isListShow: true,
      hideBarIconName: "arrow-up",
    };
  },
  watch: {
    lists() {
      return this.updataData();
    },
  },
  computed: {
    filterTodoList() {
      if (this.filter === "全部") {
        return this.lists;
      }
      const finished = this.filter === "已完成";
      return this.lists.filter((list) => list.finished === finished);
    },
  },
  methods: {
    addTask(e) {
      const content = e.target.value.trim();
      if (content !== "") {
        this.lists.unshift({
          id: this.id++,
          content,
          finished: false,
        });
      }
      e.target.value = "";
    },
    removeTask(id) {
      this.lists.splice(
        this.lists.findIndex((list) => list.id === id),
        1
      );
    },
    status(id) {
      this.lists.forEach((list) => {
        if (list.id === id) {
          list.finished = !list.finished;
          this.updataData();
          return;
        }
      });
    },
    toggleFilter(state) {
      this.filter = state;
    },
    deleteList() {
      this.lists = this.lists.filter((list) => !list.finished);
    },
    clearAll() {
      this.lists = [];
      localStorage.clear();
    },
    getData() {
      const data = JSON.parse(localStorage.getItem("todoListData"));
      if (data && data.length > 0) {
        this.lists = data;
        this.id = this.lists[0].id + 1;
      }
    },
    updataData() {
      localStorage.setItem("todoListData", JSON.stringify(this.lists));
    },
    changeCalendarDisplay() {
      this.isListShow = !this.isListShow;
      this.isListShow
        ? (this.hideBarIconName = "arrow-up")
        : (this.hideBarIconName = "arrow-down");
    },
  },
  mounted() {
    this.getData();
  },
};
</script>

<style lang="scss" scoped>
@import "~@/assets/style/var.scss";

.calendar-wrapper {
  border: 1px solid pink;
  height: 40%;
}
.todocard-wrapper {
  max-width: 420px;
  margin: 20px 12px;
  // padding: 20px 2% 30px;
  padding: 16px;
  border-radius: 8px;
  // box-shadow: 0px 2px 10px 2px #ccc;
  box-shadow: 0 8px 12px #ebedf0;
  background-color: #fff;
}
h2 {
  font-weight: normal;
  color: #777;
  text-align: center;
}
.edit {
  display: block;
  width: 100%;
  height: 35px;
  line-height: 35px;
  margin: 30px auto 15px;
  box-sizing: border-box;
  padding: 0 10px;
  border-radius: 4px;
  border: 1px solid #ccc;
  outline: 0;
  box-shadow: 0 0 5px #ccc;
}

// 隐藏近日账单选项
.hide-bar {
  padding-top: 16px;
  text-align: center;
  color: $text-color;
  // margin-bottom: 32px;
  font-size: $font-size-md;
  .hide-bar-icon {
    margin-left: 4px;
  }
}
</style>