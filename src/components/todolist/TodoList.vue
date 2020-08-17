<template>
  <div>
    <h2>TODO</h2>
    <div class="todo-tab-wrapper">
      <todo-tab
        :lists="lists"
        :filter="filter"
        @toggle="toggleFilter"
        @clear="clearAll"
        @dele="deleteList"
      ></todo-tab>
    </div>
    <div class="cell-item">
      <div class="cell-left">
        <input
          @keydown.enter="addTaskByKeyboard"
          v-model="inputTask"
          type="text"
          placeholder="今天也要加油鸭..."
        />
      </div>
      <div class="cell-right" @click="addTaskByMouse(inputTask)">
        <svg class="icon">
          <use xlink:href="#decline-filling" />
        </svg>
      </div>
    </div>

    <div v-if="lists.length > 0">
      <todo-list-item
        v-for="list of filterTodoList"
        :list="list"
        :key="list.id"
        @change-status="changeStatus"
        @remove="removeTask"
      ></todo-list-item>
    </div>
  </div>
</template>

 <script lang="ts">
import { Vue, Component, Watch } from "vue-property-decorator";
import Layout from "@/components/layout/Layout.vue";
import TodoListItem from "./childComps/TodoListItem.vue";
import TodoTab from "./childComps/TodoTab.vue";

@Component({
  components: { Layout, TodoListItem, TodoTab },
})
export default class TodoList extends Vue {
  inputTask = "";
  id = 0;
  lists: any[] = [];
  filter = "全部";
  $toast: any;

  @Watch("lists")
  onListsChanged(val: string, oldVal: string) {
    return this.updataData();
  }

  get filterTodoList() {
    if (this.filter === "全部") {
      return this.lists;
    }
    const finished = this.filter === "已完成";
    return this.lists
      ? this.lists.filter((list) => list.finished === finished)
      : [];
  }

  addTaskByMouse(inputContent: string) {
    if (inputContent) {
      const content = inputContent.trim();
      if (content) {
        if (content.length > 12) {
          return this.$toast("请控制在12个字符内~");
        }
        this.lists.unshift({
          id: this.id++,
          content,
          finished: false,
        });
      }
      this.$toast("添加成功");
      this.inputTask = "";
    } else {
      this.$toast("请输入内容");
    }
  }

  addTaskByKeyboard(e: any) {
    if (e.target.value) {
      const content = e.target.value.trim();
      if (content) {
        if (content.length > 12) {
          return this.$toast("请控制在12个字符内~");
        }
        this.lists.unshift({
          id: this.id++,
          content,
          finished: false,
        });
      }
      this.$toast("添加成功");
      this.inputTask = "";
    } else {
      this.$toast("请输入内容");
    }
  }
  removeTask(id: number) {
    this.lists.splice(
      this.lists.findIndex((list) => list.id === id),
      1
    );
  }
  changeStatus(id: number) {
    this.lists.forEach((list) => {
      if (list.id === id) {
        list.finished = !list.finished;
        this.updataData();
        return;
      }
    });
  }
  toggleFilter(state: string) {
    this.filter = state;
  }
  deleteList() {
    const oriListsLength = this.lists.length;
    this.lists = this.lists.filter((list) => !list.finished);
    if (this.lists.length === oriListsLength) {
      this.$toast("请先选择任务");
    } else {
      this.$toast("已删除任务");
    }
  }
  clearAll() {
    this.lists = [];
    localStorage.clear();
  }
  getData() {
    const data = JSON.parse(localStorage.getItem("todoListData") || "[]");
    if (data && data.length > 0) {
      this.lists = data;
      this.id = this.lists[0].id + 1;
    }
  }
  updataData() {
    localStorage.setItem("todoListData", JSON.stringify(this.lists));
  }
  created() {
    this.getData();
  }
}
</script>



<style lang="scss" scoped>
@import "~@/assets/style/var.scss";

.todocard-wrapper {
  max-width: 420px;
  margin: 20px 12px;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0 8px 12px #ebedf0;
  background-color: #fff;
}
h2 {
  font-weight: normal;
  color: #777;
  text-align: center;
}

.todo-tab-wrapper {
  padding-bottom: 8px;
  border-bottom: 1px solid #ebedf0;
}

.cell-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 35px;
  line-height: 35px;
  margin: 25px auto 20px;
  box-sizing: border-box;
  padding-left: 10px;
  border-radius: 4px;
  border: 1px solid #ccc;
  outline: 0;
  box-shadow: 0 0 5px #ccc;
  input {
    border: none;
  }
}
.cell-left {
  width: 100%;
  > input {
    width: 100%;
  }
}
.cell-right {
  height: 100%;
  padding: 0 15px 0 20px;
  .icon {
    color: $blue;
    width: 1.2em;
    height: 1.2em;
    vertical-align: -0.2em;
    fill: currentColor;
    overflow: hidden;
  }
}
</style>