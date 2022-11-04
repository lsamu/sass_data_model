<template>
    <!-- <div class="box-editor-container" @contextmenu.prevent.stop="">
        <el-container style="height: calc(100vh)">
            <el-header height="50px" style="padding:0">
                <box-top :option="{ 'title': 'H5微场景系统' }"></box-top>
            </el-header>
            <el-container style="height: calc(100vh)">
                <el-main style="padding:0">
                    <splitpanes class="default-theme">
                        <pane :size="20" :minSize="10" :maxSize="50">
                            <box-editor-toolbox></box-editor-toolbox>
                        </pane>
                        <pane>
                            <box-editor-page-drag></box-editor-page-drag>
                        </pane>
                        <pane :size="20" :minSize="10" :maxSize="50">
                            <box-editor-property-layout-drag></box-editor-property-layout-drag>
                        </pane>
                    </splitpanes>
                </el-main>
            </el-container>
        </el-container>
    </div> -->
    <box-editor-toolbox></box-editor-toolbox>
</template>
<script lang="ts" setup>

// import BoxTop from "@/components/editor/layout/top.vue";
// import Splitpanes from "@/components/editor/layout/splitpanes/splitpanes.vue";
// import Pane from "@/components/editor/layout/splitpanes/pane.vue";
// import "splitpanes/dist/splitpanes.css";
// import cc from './components'
// import {componentStore} from "@/components/editor/hook/componentStore"

const root = getCurrentInstance();
const that = root.proxy;

const project = that["$project"] as any;
// const component = componentStore();
// component.load(cc)

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
