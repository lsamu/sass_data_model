<template>
  <div class="bg-music-wrapper" style="display: block">
    <div class="bg-music-btn rotate" :style="btnStyle" @click="handleToggle" :disabled="currentOption.disabled">
      <audio :src="currentOption.src" :autoplay="currentOption.autoplay" loop ref="refBgAudio"
        @click="handleToggle"></audio>
    </div>
  </div>
</template>
<script lang="ts" setup>
import "./bg-music.scss";
import merge from "deepmerge";
const props = defineProps(["option", "data", "value"]);
const emits = defineEmits({})
const root = getCurrentInstance();
const that = root.proxy;

const thatData = reactive({
  formData: "",
  isPlaying: true,
});

const currentOption = computed(() => {
  const defaultOption = {
    src: "http://go.163.com/2018/0209/mengniu/audio/bgm.mp3",
    autoplay: true,
    disabled: true,
  };
  let oo = merge(defaultOption, props.option || {});
  return oo;
});

const btnStyle = {
  "animation-play-state": thatData.isPlaying ? "running" : "paused",
};

const refBgAudio = ref();

const handleToggle = () => {
  let bgAudio = refBgAudio.value;
  if (!bgAudio) return;

  thatData.isPlaying ? bgAudio.pause() : bgAudio.play();
  thatData.isPlaying = !thatData.isPlaying;
};

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
