import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component
export class TagHelper extends Vue {
    createTag() {
        // const name = window.prompt("请输入标签名");
        // if (!name) {
        //     window.alert("标签名不能为空！");
        // } else {
        //     this.$store.commit("addTag", name);
        // }
        this.$store.commit("changeVisualizationTrue");
    }
}
export default TagHelper;
