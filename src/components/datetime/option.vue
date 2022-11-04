<template>
  <div>
    <!-- <el-form-item label="时间格式">
      <avue-select v-model="main.activeOption.format" :dic="dicOption.format">
      </avue-select>
    </el-form-item>
    <el-form-item label="自定义格式">
      <avue-input v-model="main.activeOption.format"> </avue-input>
    </el-form-item>
    <el-form-item label="字体间距">
      <avue-input-number
        v-model="main.activeOption.split"
        :max="200"
      ></avue-input-number>
    </el-form-item>
    <el-form-item label="字体大小">
      <avue-input-number
        v-model="main.activeOption.fontSize"
        :max="200"
      ></avue-input-number>
    </el-form-item>
    <el-form-item label="字体背景">
      <avue-color v-model="main.activeOption.backgroundColor"></avue-color>
    </el-form-item>
    <el-form-item label="对其方式">
      <avue-select
        v-model="main.activeOption.textAlign"
        :dic="dicOption.textAlign"
      >
      </avue-select>
    </el-form-item>
    <el-form-item label="文字粗细">
      <avue-select
        v-model="main.activeOption.fontWeight"
        :dic="dicOption.fontWeight"
      >
      </avue-select>
    </el-form-item>
    <el-form-item label="字体颜色">
      <avue-color v-model="main.activeOption.color"></avue-color>
    </el-form-item> -->
  </div>
</template>
<script lang="ts" setup>

import merge from "deepmerge";
const props = defineProps(["option", "data", "value"]);
const emits = defineEmits({})
const thatData = reactive({
  formData: props.value || {},
});

const currentOption = computed(() => {
  const defaultOption = {
    items: [
      {
        type: "group",
        items: [
          {
            caption: "时间",
            labelWidth: 90,
            items: [
              {
                type: "textarea",
                prop: "url",
                label: "地址",
                data: [],
              },
              {
                type: "upload",
                prop: "url",
                label: "上传",
                data: [],
              },
            ],
          },
        ],
      },
    ],
  };
  let oo = Object.assign(defaultOption, props.option);
  return oo;
});

const handleChange = (value) => {
  emits("input", value);
}

onMounted(() => {
  thatData.formData = Object.assign(thatData.formData, props.value || currentOption.value["value"] || {});
});

watch(
  () => props.value,
  (n, o) => {
    thatData.formData = n;
  },
  {
    deep: true,
  }
);

</script>
