<template>
  <div class="box-echart-pie" :style="{ height: currentOption.height }" style="width:100%" ref="refEchart">

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
    text: '站点访问',
    subtext: 'Fake Data',
    left: 'center'
  },
  tooltip: {
    trigger: 'item'
  },
  legend: {
    orient: 'vertical',
    left: 'left'
  },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: '50%',
      data: [
        { value: 1048, name: 'Search Engine' },
        { value: 735, name: 'Direct' },
        { value: 580, name: 'Email' },
        { value: 484, name: 'Union Ads' },
        { value: 300, name: 'Video Ads' }
      ],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }
  ]
})

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
.box-echart-pie {
  width: 100%;
  height: 100%;
}
</style>
