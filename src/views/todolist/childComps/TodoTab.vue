<template>
  <div class="tab" v-if="lists.length > 0">
    <div class="nums-wrap">
      <span>剩 {{ unFinishedTask }} 条任务</span>
    </div>
    <div class="btn-wrap">
      <a
        v-for="(state, index) of status"
        :class="{ active: filter === state }"
        :key="index"
        @click="handleClick(state)"
        >{{ state }}</a
      >
    </div>
    <div class="clear-wrap">
      <a @click="handleDele">删除</a>
      <a @click="handleClear">清空</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "TodoTab",
  props: {
    lists: {
      type: Array,
      required: true
    },
    filter: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      status: ["全部", "未完成", "已完成"]
    };
  },
  computed: {
    unFinishedTask() {
      return this.lists.filter(list => !list.finished).length;
    }
  },
  methods: {
    handleClick(state) {
      this.$emit("toggle", state);
    },
    handleDele() {
      this.$emit("dele");
    },
    handleClear() {
      this.$emit("clear");
    }
  }
};
</script>

<style class="scoped">
.tab {
  margin-top: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.nums-wrap {
  font-size: 13px;
}
.btn-wrap > a,
.clear-wrap > a {
  padding: 3px 5px;
  font-size: 12px;
  margin-left: 5px;
  border-radius: 4px;
  cursor: pointer;
  border: 1px solid transparent;
}
.btn-wrap > a.active,
.clear-wrap > a {
  border-color: #ccc;
}
.empty {
  font-size: 13px;
  color: #ccc;
  text-align: center;
  padding: 10px 0;
}
</style>
