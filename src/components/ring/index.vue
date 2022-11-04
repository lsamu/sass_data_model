<template>
  <div class="box-echart-ring">
    <ve-ring :data="currentData" :settings="currentOption" :height="currentOption.height" width="100%"
      :judge-width="true" ref="refEchart"></ve-ring>
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
    columns: ["date", "cost", "profit"],
    rows: [
      { date: "01/01", cost: 123, profit: 3 },
      { date: "01/02", cost: 1223, profit: 6 },
      { date: "01/03", cost: 2123, profit: 90 },
      { date: "01/04", cost: 4123, profit: 12 },
      { date: "01/05", cost: 3123, profit: 15 },
      { date: "01/06", cost: 7123, profit: 20 },
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
.box-echart-ring {
  width: 100%;
  height: 100%;
}
</style>
