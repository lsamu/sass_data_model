<template>
  <div class="box-echart-liquidfill">
    <ve-liquidfill :data="currentData" :settings="currentOption" :height="currentOption.height" width="100%"
      :judge-width="true" ref="refEchart"></ve-liquidfill>
  </div>
</template>
<script lang="ts" setup>

import merge from "deepmerge";
const props = defineProps(["option", "data", "value"]);
const emits = defineEmits({})
const root = getCurrentInstance();
const that = root.proxy;

const thatData = reactive({
  formData: [],
});

const currentOption = computed(() => {
  let oo = {
    height: (props.option?.h || 200) + "px",
  };
  nextTick(() => {
    refEchart.value.echarts.resize();
  });
  return oo;
});

const currentData = computed(() => {
  let oo = {
    columns: ["city", "percent"],
    rows: [
      {
        city: "ShangHai",
        percent: 0.6,
      },
    ],
  };
  return oo;
});

const refEchart = ref()

const handleChange = (value) => {
  emits("input", value);
}

onMounted(() => {
  thatData.formData = props.value || currentOption.value["value"] || [];
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
<style lang="scss">
.box-echart-liquidfill {
  width: 100%;
  height: 100%;
}
</style>
