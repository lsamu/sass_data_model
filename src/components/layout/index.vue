<template>
  <div class="box-echart-layout">
    <el-row :span="24">
      <el-col :span="getSpan(item.span)" v-for="(item, index) in currentItems" :key="index"
        :ref="'ref-col-' + item.prop">
        <div style="
            border: 1px solid #ccc;
            padding: 25px;
            margin: 5px;
            border-radius: 4px;
          ">
          <component :is="getComponent(item.type)" :ref="'ref-item-' + item.prop" :option="item" :data="item.data"
            style="width: 100%">
          </component>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script lang="ts" setup>
import Enumerable from "linq";
import merge from "deepmerge";
const props = defineProps(["option", "data", "value"]);
const emits = defineEmits({})
const thatData = reactive({
  formData: [],
});

const currentOption = computed(() => {
  const defaultOption = {
    items: [],
  };
  let oo = Object.assign(defaultOption, props.option || {});
  return oo;
});

const currentData = computed(() => {
  let oo = {};
  return oo;
});

const currentItems = computed(() => {
  const defaultItems = [];
  let oo = Object.assign(defaultItems, currentOption.value.items || []);
  let aa = [];
  oo = Enumerable.from(oo).forEach((p: any) => {
    const defaultItem = {
      span: 24,
    };
    aa.push(Object.assign(defaultItem, p || {}));
  });
  return aa;
});

const getComponent = (type): string => {
  return "box-" + type;
};

const getSpan = (defaultSpan) => {
  if (defaultSpan == null) {
    return 24;
  }
  return defaultSpan;
};

const searchForm = (search) => {
  let oo = Object.assign([], search || []);
  return {
    hasFooter: false,
    inline: true,
    labelWidth: 0,
    gutter: 10,
    items: oo,
  };
};

const getTitleDesc = (item) => {
  if (item.title || item.desc || item.search) {
    return true;
  }
  return false;
};

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
