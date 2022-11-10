<template>
    <el-menu :default-active="thatOption.activeIndex" mode="horizontal">
        <el-menu-item index="1">数据源</el-menu-item>
        <el-menu-item index="2">数据模型</el-menu-item>
        <el-menu-item index="3">计算模型</el-menu-item>
        <el-menu-item index="4">应用模型</el-menu-item>
    </el-menu>
</template>
<script lang="ts" setup>
const thatOption = reactive({
    activeIndex: "1"
})
</script>