<template>
    <el-dialog title="提示" :visible.sync="dialogOption.visible" width="50%" :fullscreen="true">
        <el-container style="height: calc(100vh-1px)">
            <el-header height="45px">
                <box-editor-toolbar></box-editor-toolbar>
            </el-header>
            <el-container style="height: calc(100vh-1px)">
                <el-main>
                    <box-datagrid></box-datagrid>
                </el-main>
                <el-aside width="300px">
                    <box-option-datagrid></box-option-datagrid>
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

const open = () => {
    dialogOption.visible = true
}

defineExpose({
    open
})
</script>
<style lang="scss">

</style>