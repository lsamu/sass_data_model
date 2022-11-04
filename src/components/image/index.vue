<template>
  <div class="box-echart-image">
    <img class="imagecontainer" :src="currentData" draggable="false" />
  </div>
</template>
<script lang="ts" setup>

import merge from "deepmerge";
const props = defineProps(["option", "data", "value"]);
const emits = defineEmits({})
const thatData = reactive({
  formData: "#",
});

const currentOption = computed(() => {
  let oo = merge({}, props.option);
  return oo;
});

const currentData = computed(() => {
  let oo = props.data || "#";
  return oo;
});

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
.box-echart-image {
  width: 100%;
  height: 100%;

  .imagecontainer {
    width: 100%;
    height: 100%;

    .placeholder {
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.3);
    }
  }
}
</style>
