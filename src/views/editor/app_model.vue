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
            <el-tabs v-model="tabsOption.activeName">
                <el-tab-pane label="应用视图" name="first">
                    <BAppModelApp></BAppModelApp>
                </el-tab-pane>
                <el-tab-pane label="树视图" name="first2">
                    <BAppModelTree></BAppModelTree>
                </el-tab-pane>
                <el-tab-pane label="列表视图" name="first3">
                    <BAppModelList></BAppModelList>
                </el-tab-pane>
                <el-tab-pane label="表单视图" name="first4">
                    <BAppModelForm></BAppModelForm>
                </el-tab-pane>
                <el-tab-pane label="报表视图" name="first5">
                    <BAppModelReport></BAppModelReport>
                </el-tab-pane>
            </el-tabs>
        </el-main>
    </el-container>
</template>
<script lang="ts" setup>
import BAppModelApp from "./app_model/app/index.vue"
import BAppModelForm from "./app_model/form/index.vue"
import BAppModelList from "./app_model/list/index.vue"
import BAppModelReport from "./app_model/report/index.vue"
import BAppModelTree from "./app_model/tree/index.vue"

const root = getCurrentInstance();
const that = root.proxy;

const thatOption = reactive({

})

const tabsOption = reactive({
    activeName: "first"
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
