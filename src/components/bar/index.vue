<template>
  <div class="box-echart-bar" ref="refEchart" :style="{ height: currentOption.height }" style="width:100%">
    <!-- <ve-bar :data="currentData" :settings="currentOption" :height="currentOption.height" width="100%"
      :judge-width="true" ref="refEchart"></ve-bar> -->
  </div>
</template>
<script lang="ts" setup>
import * as echarts from 'echarts';
import merge from "deepmerge";
import lodash from "lodash";

const props = defineProps(["option", "data", "value"]);
const emits = defineEmits([])
const root = getCurrentInstance();
const that = root.proxy;

const refEchart = ref()
let myChart = null;

onMounted(() => {
  myChart = echarts.init(refEchart.value);
  setOption({})
})

const setOption = (tmpOption) => {
  const option = {
    title: {
    text: '平均分布',
  },
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: [120, 200, 150, 80, 70, 110, 130],
        type: 'bar'
      }
    ]
  };;
  myChart.setOption(option);
}

const thatData = reactive({
  formData: [],
});

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

const test = () => {
  console.log("test")
}
</script>
<style lang="scss">
.box-echart-bar {
  width: 100%;
  height: 100%;
}
</style>
