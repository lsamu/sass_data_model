<template>
  <!-- <el-container style="height: calc(100vh-1px)">
    <el-header height="45px">
      <box-editor-toolbar></box-editor-toolbar>
    </el-header>
    <el-container style="height: calc(100vh-1px)">
      <el-main>
        <box-datagrid></box-datagrid>
      </el-main>
      <el-aside width="300px">
        <box-option-datagrid></box-option-datagrid>
      </el-aside>
    </el-container>
  </el-container> -->

  <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="数据源" name="first">用户管理</el-tab-pane>
    <el-tab-pane label="数据模型" name="second">配置管理</el-tab-pane>
    <el-tab-pane label="计算模型" name="third">角色管理</el-tab-pane>
    <el-tab-pane label="应用模型" name="fourth">定时任务补偿</el-tab-pane>
  </el-tabs>
</template>
<script lang="ts">
import { defineComponent, reactive, ref, toRefs } from "@vue/composition-api";
import { useProviders } from "../../components/state/hook";
import { useProjectState } from "../../components/state/useProjectState";

export default defineComponent({
  components: {},
  setup() {
    useProviders(useProjectState);

    const thatData = reactive({});

    return {
      ...toRefs(thatData),
    };
  },
});
</script>
<style lang="scss" scoped>

</style>