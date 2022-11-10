<template>
    <div>
        <el-menu :default-active="route.path" mode="horizontal" router>
            <el-menu-item index="/editor/data_source">数据源</el-menu-item>
            <el-menu-item index="/editor/data_model">数据模型</el-menu-item>
            <el-menu-item index="/editor/data_calculate">计算模型</el-menu-item>
            <el-menu-item index="/editor/app_model">应用模型</el-menu-item>
        </el-menu>
    </div>
</template>
<script lang="ts" setup>
const root = getCurrentInstance()
const that = root.proxy
const route = that.$route
const router = that.$router

const thatOption = reactive({

})

watchEffect(() => {

})
</script>