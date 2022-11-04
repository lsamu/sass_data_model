<template>
  <div class="box-echart-gauge" ref="refEchart" :style="{ height: currentOption.height }" style="width:100%">
  </div>
</template>
<script lang="ts" setup>
import * as echarts from 'echarts';
import merge from "deepmerge";
const props = defineProps(["option", "data", "value"]);
const emits = defineEmits({})

const root = getCurrentInstance();
const that = root.proxy;

const thatData = reactive({
  formData: [],
});


const thatOption = reactive({
  tooltip: {
    formatter: '{a} <br/>{b} : {c}%'
  },
  series: [
    {
      name: 'Pressure',
      type: 'gauge',
      detail: {
        formatter: '{value}'
      },
      data: [
        {
          value: 50,
          name: 'SCORE'
        }
      ]
    }
  ]
});

let myChart = null;

onMounted(() => {
  myChart = echarts.init(refEchart.value);
  myChart.setOption(thatOption)
})

const currentOption = computed(() => {
  const defaultOption = {
    height: 300 + "px",
  };
  let oo = merge(defaultOption, props.option || {});
  nextTick(() => {
    // refEchart.value.echarts.resize();
    myChart.getDom().style.height = oo.height + "px";
    myChart.getDom().style.width = "100%";
    myChart.resize();
  });
  return oo;
});

const currentData = computed(() => {
  let oo = {
    columns: ["type", "value"],
    rows: [{ type: "speed", value: 80, a: 1, b: 2 }],
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
.box-echart-gauge {
  width: 100%;
  height: 100%;
}
</style>
