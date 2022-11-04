<template>
  <div class="box-echart-histogram" ref="refEchart" :style="{ height: currentOption.height }" style="width:100%">

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
  title: {
    text: '世界人口'
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
  },
  legend: {},
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: {
    type: 'value',
    boundaryGap: [0, 0.01]
  },
  yAxis: {
    type: 'category',
    data: ['Brazil', 'Indonesia', 'USA', 'India', 'China', 'World']
  },
  series: [
    {
      name: '2011',
      type: 'bar',
      data: [18203, 23489, 29034, 104970, 131744, 630230]
    },
    {
      name: '2012',
      type: 'bar',
      data: [19325, 23438, 31000, 121594, 134141, 681807]
    }
  ]
})

let myChart = null;

onMounted(() => {
  myChart = echarts.init(refEchart.value);
  myChart.setOption(thatOption);
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
    columns: ["date", "cost", "profit", "growthRate", "people"],
    rows: [
      {
        cost: 1523,
        date: "01/01",
        profit: 1523,
        growthRate: 0.12,
        people: 100,
      },
      {
        cost: 1223,
        date: "01/02",
        profit: 1523,
        growthRate: 0.345,
        people: 100,
      },
      {
        cost: 2123,
        date: "01/03",
        profit: 1523,
        growthRate: 0.7,
        people: 100,
      },
      {
        cost: 4123,
        date: "01/04",
        profit: 1523,
        growthRate: 0.31,
        people: 100,
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
.box-echart-histogram {
  width: 100%;
  height: 100%;
}
</style>
