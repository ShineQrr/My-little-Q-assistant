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

      <!-- 底部todo内容区 -->
      <div class="todocard-wrapper">
        <todo-list></todo-list>
      </div>
    </Layout>
  </div>
</template>

 <script lang="ts">
import { Vue, Component, Watch } from "vue-property-decorator";
import Layout from "@/components/layout/Layout.vue";
import TodoList from "@/components/todolist/TodoList.vue";

@Component({
  components: { Layout, TodoList },
})
export default class TodoListPage extends Vue {
  isListShow = true;
  hideBarIconName = "arrow-up";

  changeCalendarDisplay() {
    this.isListShow = !this.isListShow;
    this.isListShow
      ? (this.hideBarIconName = "arrow-up")
      : (this.hideBarIconName = "arrow-down");
  }
}
</script>



<style lang="scss" scoped>
@import "~@/assets/style/var.scss";

.calendar-wrapper {
  border: 1px solid pink;
  height: 40%;
}

// 隐藏日历选项
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

.todocard-wrapper {
  max-width: 420px;
  margin: 20px 12px;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0 8px 12px #ebedf0;
  background-color: #fff;
}
</style>