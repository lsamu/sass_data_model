<template>
  <div class="box-echart-funnel">
    <ve-funnel :data="currentData" :settings="currentOption" :height="currentOption.height" ref="refEchart"></ve-funnel>
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
    columns: ["status", "status1", "value"],
    rows: [
      { status: "display", status1: "display1", value: 900 },
      { status: "visit", status1: "visit1", value: 600 },
      { status: "click", status1: "click1", value: 300 },
      { status: "order", status1: "order1", value: 100 },
    ],
  };
  return oo;
});

const refEchart = ref()

const handleChange = (value) => {
  emits("input", value);
}

onMounted(() => {
  thatData.formData = props.value || currentOption.value["value"] || "#";
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
.box-echart-funnel {
  width: 100%;
  height: 100%;
}
</style>
