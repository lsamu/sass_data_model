<template>
  <div class="box-echart-line" ref="refEchart" :style="{ height: currentOption.height }" style="width:100%">

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
    text: '销售量'
  },
  tooltip: {
    trigger: 'axis'
  },
  legend: {
    data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine']
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      name: 'Email',
      type: 'line',
      stack: 'Total',
      data: [120, 132, 101, 134, 90, 230, 210]
    },
    {
      name: 'Union Ads',
      type: 'line',
      stack: 'Total',
      data: [220, 182, 191, 234, 290, 330, 310]
    },
    {
      name: 'Video Ads',
      type: 'line',
      stack: 'Total',
      data: [150, 232, 201, 154, 190, 330, 410]
    },
    {
      name: 'Direct',
      type: 'line',
      stack: 'Total',
      data: [320, 332, 301, 334, 390, 330, 320]
    },
    {
      name: 'Search Engine',
      type: 'line',
      stack: 'Total',
      data: [820, 932, 901, 934, 1290, 1330, 1320]
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
      {
        cost: 3123,
        date: "01/05",
        profit: 1523,
        growthRate: 0.12,
        people: 100,
      },
      {
        cost: 7123,
        date: "01/06",
        profit: 1523,
        growthRate: 0.65,
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
.box-echart-line {
  width: 100%;
  height: 100%;
}
</style>
