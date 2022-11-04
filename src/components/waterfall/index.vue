<template>
  <div class="box-echart-waterfall">
    <ve-waterfall :data="currentData" :settings="currentOption" :height="currentOption.height" width="100%"
      :judge-width="true" ref="refEchart"></ve-waterfall>
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
    columns: ["action", "time"],
    rows: [
      { action: "eat", time: 4 },
      { action: "sleep", time: 10 },
      { action: "learn", time: 5 },
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
.box-echart-waterfall {
  width: 100%;
  height: 100%;
}
</style>
