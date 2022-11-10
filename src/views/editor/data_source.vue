<template>
    <div class="box-editor-container" @contextmenu.prevent.stop="">234
        <el-container style="height: calc(100vh)">
            <el-header height="50px" style="padding:0">
                <BHeader></BHeader>
            </el-header>
            <el-container style="height: calc(100vh)">
                <el-aside width="200px">
                    <el-tree :data="treeOption.data" :props="treeOption.defaultProps"></el-tree>
                </el-aside>
                <el-main style="padding:0">
                    3242
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>
<script lang="ts" setup>
import BHeader from "./components/header/index.vue"
import cc from './components'
import { componentStore } from "@lauxinyi/box-editor"
const root = getCurrentInstance();
const that = root.proxy;
const project = that["$project"] as any;

const thatOption = reactive({
    activeIndex: "1"
})

const treeOption = reactive({
    data: [{
        label: '一级 1',
        children: [{
            label: '二级 1-1',
            children: [{
                label: '三级 1-1-1'
            }]
        }]
    }, {
        label: '一级 2',
        children: [{
            label: '二级 2-1',
            children: [{
                label: '三级 2-1-1'
            }]
        }, {
            label: '二级 2-2',
            children: [{
                label: '三级 2-2-1'
            }]
        }]
    }, {
        label: '一级 3',
        children: [{
            label: '二级 3-1',
            children: [{
                label: '三级 3-1-1'
            }]
        }, {
            label: '二级 3-2',
            children: [{
                label: '三级 3-2-1'
            }]
        }]
    }],
    defaultProps: {
        children: 'children',
        label: 'label'
    }
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
