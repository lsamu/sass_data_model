<template>
  <div class="box-editor-chart">
    <el-row :gutter="10">
      <el-col :span="4">
        <el-card :body-style="{ padding: '0px' }" shadow="hover">
          <div class="add-card" @click="handleNew">
            <i class="el-icon-circle-plus"></i>
          </div>
        </el-card>
      </el-col>
      <el-col :span="4" v-for="(item, index) in thatData.chartList" :key="index">
        <el-card :body-style="{ padding: '0px' }" shadow="hover">
          <img class="image" :src="getImage(item.img)" alt="" />
          <div style="padding: 14px">
            <span>{{ item.title }}</span>
            <el-dropdown style="float: right">
              <i class="el-icon-more"></i>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item @click.native="handleEdit(item.id)">编辑</el-dropdown-item>
                  <el-dropdown-item @click.native="handleCopy(item)">复制</el-dropdown-item>
                  <el-dropdown-item @click.native="handleDelete(item.id)">删除</el-dropdown-item>
                  <el-dropdown-item @click.native="handleView(item.id)" divided>访问</el-dropdown-item>
                  <el-dropdown-item @click.native="handleView(item.id)" divided>二维码</el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <box-dialog-form ref="refProject" :option="optionProject"></box-dialog-form>
  </div>
</template>
<script lang="ts" setup>

const root = getCurrentInstance();
const that = root.proxy;
const router = that.$router
const route = that.$route

const thatData = reactive({
  chartList: [],
});

const optionProject = {
  title: "新建项目",
  width: "700px",
  fullscreen: false,
  form: {
    items: [
      {
        label: "名称",
        prop: "title",
        rules: [
          {
            required: true,
            message: "请输入名称",
            trigger: 'blur'
          },
          // {
          //   min:3,
          //   max:5,
          //   message:"请输入3~5个字符",
          //   trigger:'blur'
          // }
        ]
      },
      {
        label: "宽",
        span: 12,
        prop: "width",
      },
      {
        label: "高",
        span: 12,
        prop: "height",
      },
      {
        label: "密码",
        type: "password",
        prop: "password",
      },
      {
        label: "简介",
        type: "textarea",
        prop: "desc",
      },
      {
        label: "翻页方式",
        type: "select",
        prop: "paging_way",
        value: 1,
        data: [
          {
            label: "上下翻页",
            value: 1,
          },
          {
            label: "左右翻页",
            value: 2,
          },
          {
            label: "翻书效果",
            value: 3,
          },
        ],
      },
    ],
    onSubmit: async (form: any) => {
      await handleOnSubmit(form);
    },
  },
};

let index = 1
const handleOnSubmit = async function (form: any) {
  form["id"] = index
  index++
  thatData.chartList.push(form);
  refProject().close();
};

const handleEdit = function (id: number) {
  const routeUrl = router.resolve({
    path: `/editor/${id}`
  })
  window.open(routeUrl.href, '_blank');
};

const handleNew = function () {
  refProject().open();
};

const handleCopy = function (row: any) { };

const handleDelete = function (row: any) { };

const handleView = function (id: number) {
  // router.push({ path: `/view/${id}` });
  const routeUrl = router.resolve({
    path: `/view/${id}`
  })
  window.open(routeUrl.href, '_blank');
};

const handleAnalyse = function (row: any) { };

const refProject = function () {
  return that.$refs["refProject"] as any;
};

const getImage = function (src: string) {
  if (src == null || src == "" || src == "#") {
    return "/src/assets/logo.png";
  }
  return src;
};
</script>
  
<style lang="scss" scoped>
.box-editor-chart {
  .el-card {
    margin-bottom: 10px;

    .image {
      width: 100%;
      height: 243px;
      display: block;
      opacity: 0.6;
      transition: opacity 0.3s ease;
    }

    &:hover {
      cursor: pointer;

      .image {
        opacity: 0.8;
      }
    }
  }

  .el-card .add-card {
    height: 295px;
    line-height: 295px;
    text-align: center;
    font-size: 82px;
    color: rgba(0, 0, 0, 0.08);
  }
}
</style>
  