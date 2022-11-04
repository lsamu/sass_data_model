<template>
  <div class="box-echart-flop"></div>
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
  let oo = {};
  return oo;
});

const currentData = computed(() => {
  let oo = {};
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
.box-echart-flop {
  width: 100%;
  height: 100%;
}
</style>
