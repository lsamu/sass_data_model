<template>
    <div>
      <box-datagrid :option="option"></box-datagrid>
    </div>
  </template>
  <script lang="ts">
  
  export default defineComponent({
    components: {},
    setup() {
      const root = getCurrentInstance();
      const that: any = root.proxy;
  
      const option = {
        addText: "新增数据源",
        columns: [
          {
            label: "名称",
            prop: "name",
          },
          {
            label: "驱动",
            type: "select",
            name: "driver",
            data: [
              {
                label: "MySql",
                value: "mysql",
              },
              {
                label: "SqlServer",
                value: "sqlserver",
              },
              {
                label: "ClickHouse",
                value: "clickhouse",
              },
            ],
          },
          {
            label: "用户",
            prop: "user_name",
          },
          {
            label: "密码",
            type: "password",
            prop: "user_pwd",
          },
          {
            label: "链接",
            type: "textarea",
            prop: "link",
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
  