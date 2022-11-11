<template>
    <div class="box-editor-container" @contextmenu.prevent.stop="">
        <el-container style="height: calc(100vh)">
            <el-header height="60px" style="padding:0">
                <el-menu :default-active="route.path" mode="horizontal" router>
                    <el-menu-item index="/editor/data_source">数据源</el-menu-item>
                    <el-menu-item index="/editor/data_model">数据模型</el-menu-item>
                    <!-- <el-menu-item index="/editor/data_calculate">计算模型</el-menu-item> -->
                    <el-menu-item index="/editor/app_model">应用模型</el-menu-item>
                </el-menu>
            </el-header>
            <router-view></router-view>
        </el-container>
    </div>
</template>
<script lang="ts" setup>
const root = getCurrentInstance()
const that = root.proxy
const route = that.$route
const router = that.$router

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
