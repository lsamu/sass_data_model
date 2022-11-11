<template>
    <el-dialog title="提示" :visible.sync="dialogOption.visible" width="50%" :fullscreen="true">
        <el-row>
            <el-col :span="18">
                <box-tree></box-tree>
            </el-col>
            <el-col :span="6">
                <box-option-tree>

                </box-option-tree>
            </el-col>
        </el-row>
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