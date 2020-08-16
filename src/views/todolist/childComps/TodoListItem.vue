<template>
  <div class="todo-list-items">
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

<script lang="ts">
import { Vue, Prop, Component } from "vue-property-decorator";

@Component({})
export default class TodoListItem extends Vue {
  @Prop() list?: TodoList;
  handleChange() {
    if (this.list) {
      this.$emit("change", this.list.id);
    }
  }
  handleRemove() {
    if (this.list) {
      this.$emit("remove", this.list.id);
    }
  }
}
</script>


<style lang="scss"  scoped>
@import "~@/assets/style/var.scss";
.todo-list-items {
  width: 100%;
  margin: 10px auto;
  text-align: left;
  padding-bottom: 2px;
  border-bottom: 1px solid #ebedf0;
  .finished {
    text-decoration: line-through;
    color: $gray-6;
  }
  .dele {
    float: right;
    // color: lighten(red, 10%);
    color: #ee0a24;
    padding: 4px;
    font-size: 14px;
    cursor: pointer;
    > .icon {
      width: 1.1em;
      height: 1.1em;
      vertical-align: -0.15em;
      fill: currentColor;
      overflow: hidden;
    }
  }
}

.input-box {
  padding-left: 10px;
}
</style>
