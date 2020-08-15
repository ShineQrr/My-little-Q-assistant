<template>
  <div class="list">
    <label :for="list.id" :class="{ finished: list.finished }">
      <input :id="list.id" @click="handleChange" v-model="list.finished" type="checkbox" />
      <span class="input-box">{{ list.content }}</span>
    </label>
    <a class="dele" @click="handleRemove">
      <svg class="icon">
        <use xlink:href="#delete_list" />
      </svg>
    </a>
  </div>
</template>

<script>
export default {
  name: "TodoListItem",
  props: ["list"],
  methods: {
    handleChange() {
      this.$emit("change", this.list.id);
    },
    handleRemove() {
      this.$emit("remove", this.list.id);
    },
  },
};
</script>

<style lang="scss"  scoped>
@import "~@/assets/style/var.scss";
.list {
  width: 100%;
  margin: 10px auto;
  text-align: left;
  padding-bottom: 2px;
  border-bottom: 1px solid #ebedf0;
}
.unit {
  padding: 15px 0;
}
.border {
  border-top: 1px solid #f3f3f3;
}
.finished {
  text-decoration: line-through;
  color: #858181;
}
.dele {
  float: right;
  color: lighten(red, 10%);
  padding: 4px;
  font-size: 14px;
  cursor: pointer;
}
.icon {
  width: 1.1em;
  height: 1.1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
.input-box {
  padding-left: 10px;
}
</style>
