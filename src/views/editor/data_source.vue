<template>
    <el-container style="height: calc(100vh)">
        <el-aside width="320px">
            <div class="box-tree__filter" v-if="treeOption.filter" ref="refFilter">
                <el-input :placeholder="treeOption.filterText" v-model="treeOption.filterValue"
                    prefix-icon="el-icon-search">
                    <template slot="append">
                        <el-tooltip class="item" effect="dark" content="添加一级" placement="top" slot="acurrentPropsend"
                            :disabled="false" v-if="treeOption.edit.visible">
                            <el-button @click="handleRootNodeCreate" icon="el-icon-plus" v-if="treeOption.addBtn">
                            </el-button>
                        </el-tooltip>
                    </template>
                </el-input>
            </div>
            <el-tree :data="treeOption.data" :props="treeOption.defaultProps"></el-tree>
        </el-aside>
        <el-main style="padding:0">
            <BDataSource></BDataSource>
        </el-main>
    </el-container>
</template>
<script lang="ts" setup>
import BDataSource from "./data_source/index.vue"
const root = getCurrentInstance();
const that = root.proxy;

const thatOption = reactive({

})

const treeOption = reactive({
    filter:true,
    filterText:"",
    filterValue:"",
    edit:{
        visible:true
    },
    addBtn:true,
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

const handleRootNodeCreate = ()=>{

}

</script>
<style lang="scss" scoped>

</style>
