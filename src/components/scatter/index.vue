<template>
  <div class="box-echart-scatter">
    <ve-scatter :data="currentData" :settings="currentOption" :height="currentOption.height" width="100%"
      :judge-width="true" ref="refEchart"></ve-scatter>
  </div>
</template>
<script lang="ts" setup>

import merge from "deepmerge";
const props = defineProps(["option", "data", "value"]);
const emits = defineEmits({});
const root = getCurrentInstance();
const that = root.proxy;

const thatData = reactive({
  formData: [],
});

const currentOption = computed(() => {
  const defaultOption = {
    height: 300 + "px",
  };
  let oo = merge(defaultOption, props.option || {});
  nextTick(() => {
    refEchart.value.echarts.resize();
  });
  return oo;
});

const currentData = computed(() => {
  let oo = {
    columns: ["date", "PV", "order", "age"],
    rows: [
      { date: "1/1", PV: 123, age: 3, order: 1244 },
      { date: "1/2", PV: 1223, age: 6, order: 2344 },
      { date: "1/3", PV: 7123, age: 9, order: 3245 },
      { date: "1/4", PV: 4123, age: 12, order: 4355 },
      { date: "1/5", PV: 3123, age: 15, order: 4564 },
      { date: "1/6", PV: 2323, age: 20, order: 6537 },
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
.box-echart-scatter {
  width: 100%;
  height: 100%;
}
</style>
