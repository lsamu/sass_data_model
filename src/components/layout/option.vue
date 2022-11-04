<template>
  <box-form :option="currentOption" v-model="thatData.formData"></box-form>
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
            caption: "布局",
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
