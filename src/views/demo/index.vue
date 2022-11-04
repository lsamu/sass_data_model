<template>
    <div class="box-editor-container">
        <el-container style="height: calc(100vh)">
            <el-header height="50px" style="padding:0">
                <box-editor-layout-top :option="{ title: '可视化数据大屏' }"></box-editor-layout-top>
            </el-header>
            <el-container style="height: calc(100vh)">
                <el-main style="padding:0">
                    <box-editor-pane-split class="default-theme">
                        <box-editor-pane :size="20" :minSize="10" :maxSize="50">
                            <box-editor-toolbox></box-editor-toolbox>
                        </box-editor-pane>
                        <box-editor-pane>
                            <box-editor-page-resize></box-editor-page-resize>
                        </box-editor-pane>
                        <box-editor-pane :size="20" :minSize="10" :maxSize="50">
                            <box-editor-property-layout-resize></box-editor-property-layout-resize>
                        </box-editor-pane>
                    </box-editor-pane-split>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>
<script lang="ts" setup>
import "splitpanes/dist/splitpanes.css";
import cc from './components'
import { componentStore } from "@lauxinyi/box-editor"
const root = getCurrentInstance();
const that = root.proxy;
const thatData = reactive({});
const component = componentStore();
component.load(cc)
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
