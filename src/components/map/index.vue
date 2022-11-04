<template>
  <div class="box-echart-map">
    <ve-map :data="currentData" :settings="currentOption" :height="currentOption.height" width="100%"
      :judge-width="true" ref="refEchart"></ve-map>
  </div>
</template>
<script lang="ts" setup>

import merge from "deepmerge";
const props = defineProps(["option", "data", "value"]);
const emits = defineEmits({})
const root = getCurrentInstance();
const that = root.proxy;

const thatData = reactive({
  formData: "",
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
    columns: ["location", "GDP"],
    rows: [
      { location: "吉林", GDP: 123, person: 123, area: 92134 },
      { location: "北京", GDP: 1223, person: 2123, area: 29234 },
      { location: "上海", GDP: 2123, person: 1243, area: 94234 },
      { location: "浙江", GDP: 4123, person: 5123, area: 29234 },
    ],
  };
  return oo;
});

const refEchart = ref()

const handleChange = (value) => {
  emits("input", value);
}

onMounted(() => {
  thatData.formData = props.value || currentOption.value["value"] || "";
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
.box-echart-map {
  width: 100%;
  height: 100%;
}
</style>
