<template>
    <el-dialog title="提示" :visible.sync="dialogOption.visible" width="50%" :fullscreen="true">
        <BSheet></BSheet>
        <span slot="footer" class="dialog-footer">
            <el-button @click="dialogOption.visible = false">取 消</el-button>
            <el-button type="primary" @click="dialogOption.visible = false">确 定</el-button>
        </span>
    </el-dialog>
</template>
<script lang="ts" setup>
import BSheet from "./sheet.vue"
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
.luckysheet-cols-menu {
  z-index: 9004;
}
.luckysheet-input-box {z-index:3000}
</style>