<template>
  <div class="box-echart-border" :style="{
    backgroundColor: currentOption.bgColor,
  }">
    <div class="bordercontainer" :style="{ opacity: currentOption.opacity, borderImage: '' }"></div>
  </div>
</template>
<script lang="ts" setup>

import merge from "deepmerge";
const props = defineProps(["option", "data", "value"]);
const emits = defineEmits({})
const thatData = reactive({
  formData: "",
});

const currentOption = computed(() => {
  let oo = {
    bgColor: props.option?.bgColor || "",
    borderImage: props.option?.borderImage || "",
    opacity: props.option?.opacity || "",
  };
  return oo;
});

const currentData = computed(() => {
  let oo = {};
  return oo;
});

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
.box-echart-border {
  .bordercontainer {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    border: 50px solid transparent;

    // &.border1 {
    //   border: 50px solid transparent;
    //   border-image: url('./../../assets/img/borders/1.png') 50;
    // }
    // &.border2 {
    //   border: 50px solid transparent;
    //   border-image: url('./../../assets/img/borders/2.png') 50;
    // }
    // &.border3 {
    //   border: 50px solid transparent;
    //   border-image: url('./../../assets/img/borders/3.png') 50;
    // }
  }
}
</style>
<style lang="scss">
.box-echart-border {
  width: 100%;
  height: 100%;
}
</style>
