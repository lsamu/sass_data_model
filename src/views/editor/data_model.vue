<template>
    <div class="box-editor-container" @contextmenu.prevent.stop="">
        <el-container style="height: calc(100vh)">
            <el-header height="50px" style="padding:0">
                <el-menu :default-active="thatOption.activeIndex" mode="horizontal">
                    <el-menu-item index="1">数据源</el-menu-item>
                    <el-menu-item index="2">数据模型</el-menu-item>
                    <el-menu-item index="3">计算模型</el-menu-item>
                    <el-menu-item index="4">应用模型</el-menu-item>
                </el-menu>
            </el-header>
            <el-container style="height: calc(100vh)">
                <el-main style="padding:0">

                </el-main>
            </el-container>
        </el-container>
    </div>
</template>
<script lang="ts" setup>
import cc from './components'
import { componentStore } from "@lauxinyi/box-editor"
const root = getCurrentInstance();
const that = root.proxy;
const project = that["$project"] as any;

const thatOption = reactive({
    activeIndex: "1"
})

</script>
<style lang="scss" scoped>
.box-editor-container {
    width: 100vw;
    height: 100vh;
    overflow: hidden;

    .topbar-view {
        position: absolute;
        height: 60px;
        width: 100vw;
        z-index: 1000;
    }

    .toolbar-view {
        position: absolute;
        top: 60px;
        width: 300px;
        bottom: 0;
        z-index: 1000;
    }

    .config-view {
        position: absolute;
        right: 0;
        top: 60px;
        width: 300px;
        bottom: 0;
        z-index: 1000;
    }

    .scale-view {
        position: absolute;
        right: 316px;
        bottom: 16px;
        z-index: 1000;

        &.preview {
            right: 40px;
        }
    }

    .main-view {
        background: #eeeeee;
        padding: 60px 300px 0 300px;
        overflow: hidden;
        height: calc(100vh);
    }
}
</style>
