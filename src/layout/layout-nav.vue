<template>
  <div class="sidebar">
    <div class="logo">
      <router-link to="/">领域建模工具</router-link>
    </div>
    <router-link class="sidebar-item" v-for="(item, index) in thatData.menuList" :key="index"
      :class="{ active: that.$route.path == item.path }" :to="item.path"><i class="item.icon"></i><span>{{ item.name }}</span>
    </router-link>
  </div>
</template>
<script lang="ts" setup>

const root = getCurrentInstance();
const that = root.proxy;

const router = that.$router
const route = that.$route

const thatData = reactive({
  menuList: [
    {
      name: "我的可视化",
      icon: "el-icon-document",
      path: "/core/chart",
    },
    {
      name: "分类管理",
      icon: "el-icon-menu",
      path: "/core/category",
    },
    {
      name: "数据源管理",
      icon: "el-icon-menu",
      path: "/core/data",
    },
    {
      name: "字典管理",
      icon: "el-icon-menu",
      path: "/core/dict",
    },
    {
      name: "案例市场",
      icon: "el-icon-menu",
      path: "/core/market",
    },
  ],
});

</script>

<style lang="scss" scoped>
.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 240px;
  background: #f7f9fa;
  z-index: 20;

  .logo {
    height: 120px;
    line-height: 120px;
    text-align: center;
    font-weight: bold;
    font-size: 22px;

    // &::after {
    //   content: ".";
    //   font-size: 28px;
    //   color: rgba(255, 0, 0, 0.6);
    // }

    a {
      color: #515151;
      text-decoration: none;
    }
  }

  .sidebar-item {
    display: flex;
    align-items: center;
    height: 36px;
    margin: 8px 48px 8px 24px;
    padding: 0 16px;
    font-size: 14px;
    color: #808080;
    border-radius: 8px;
    text-decoration: none;

    &.active {
      color: #222222;
      background: rgba(0, 0, 0, 0.06);
    }

    i {
      font-size: 16px;
      margin-right: 8px;
    }

    &:hover {
      color: #333;
    }
  }
}
</style>
