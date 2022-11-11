<template>
    <el-dialog title="提示" :visible.sync="dialogOption.visible" width="70%" :fullscreen="true">
        <el-container style="height: calc(100vh-1px)">
            <el-header height="45px">
                <box-editor-toolbar></box-editor-toolbar>
            </el-header>
            <el-container style="height: calc(100vh-1px)">
                <el-aside width="350px">
                    <box-editor-toolbox ></box-editor-toolbox>
                </el-aside>
                <el-main>
                    <box-editor-page-form></box-editor-page-form>
                </el-main>
                <el-aside width="300px">
                    <el-tabs type="card">
                        <el-tab-pane label="字段属性">
                            <box-editor-property></box-editor-property>
                        </el-tab-pane>
                        <el-tab-pane label="表单属性">
                            <box-option-form></box-option-form>
                        </el-tab-pane>
                    </el-tabs>
                </el-aside>
            </el-container>
        </el-container>
        <span slot="footer" class="dialog-footer">
            <el-button @click="dialogOption.visible = false">取 消</el-button>
            <el-button type="primary" @click="dialogOption.visible = false">确 定</el-button>
        </span>
    </el-dialog>
</template>
<script lang="ts" setup>

const dialogOption = reactive({
    visible: false
})

const formOption = reactive({

})

const open = () => {
    dialogOption.visible = true
}

defineExpose({
    open
})
</script>
<style lang="scss">

</style>