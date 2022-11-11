<template>
    <el-dialog title="提示" :visible.sync="dialogOption.visible" width="50%">
        <span>这是一段信息</span>
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