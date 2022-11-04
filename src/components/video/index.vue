<template>
  <div class="box-echart-video">
    <video controls="" autoplay="" loop="" :width="currentOption.width" :height="currentOption.height"
      style="object-fit: fill" class="video">
      <source :src="currentData" />
    </video>
  </div>
</template>
<script lang="ts" setup>

import merge from "deepmerge";
const props = defineProps(["option", "data", "value"]);
const emits = defineEmits({});
const thatData = reactive({
  formData: ""
});

const currentOption = computed(() => {
  let oo = {
    width: (props.option?.width || "200") + "px",
    height: (props.option?.height || "200") + "px",
  };
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
.box-echart-video {
  width: 100%;
  height: 100%;

  .video {
    width: 100%;
    height: 100%;
  }
}
</style>
