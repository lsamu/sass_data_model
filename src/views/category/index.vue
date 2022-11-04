<template>
    <box-datagrid :option="option"></box-datagrid>
  </template>
  <script lang="ts">

  export default defineComponent({
    components: {},
    setup() {
      const root = getCurrentInstance();
      const that: any = root.proxy;
  
      const option = {
        addText: "新增分类",
        columns: [
          {
            label: "名称",
            prop: "name",
          },
          {
            label: "状态",
            type: "select",
            prop: "name",
          },
          {
            label: "备注",
            type: "textarea",
            prop: "remark",
          },
        ],
      };
  
      return {
        option,
      };
    },
  });
  </script>
  