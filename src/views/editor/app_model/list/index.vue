<template>
    <div>
        <el-row>
            <el-col :span="6" v-for="(o, index) in 24" :key="o">
                <el-card :body-style="{ padding: '0px' }">
                    <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                        class="image">
                    <div style="padding: 14px;">
                        <el-button type="text" class="button" @click="handleOpen">设计</el-button>
                        <el-button type="text" class="button">属性</el-button>
                    </div>
                </el-card>
            </el-col>
        </el-row>
        <div class="page">
            <el-pagination :page-sizes="[100, 200, 300, 400]" :page-size="100"
                layout="total, sizes, prev, pager, next, jumper" :total="400">
            </el-pagination>
        </div>
        <BVisual ref="refBVisual"></BVisual>
    </div>

</template>
<script lang="ts" setup>
import BVisual from "./visual.vue"

const refBVisual = ref()

const handleOpen = () => {
    refBVisual.value.open()
}
</script>