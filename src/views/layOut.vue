<template>
  <div class="layOut-content">
    <a-layout id="components-layout-demo-top-side-2">
      <a-layout-header class="header">
        <div class="hou-tit">后台管理</div>
        <div class="rudius"></div>
        <div class="header-tit">欢迎您,andmin</div>
      </a-layout-header>
      <a-layout>
        <a-layout-sider width="200" style="background: #fff">
          <a-menu
            mode="inline"
            :default-selected-keys="['1']"
            :default-open-keys="['sub1']"
            :style="{ height: '100%', borderRight: 0 }"
          >
            <template v-for="item in meunList">
              <a-sub-menu
                v-if="item.children && item.children.length > 0"
                :key="item.key"
              >
                <span slot="title"
                  ><a-icon type="user" />{{ item.navTit }}</span
                >

                <!-- <a-menu-item-group> -->
                <a-menu-item
                  @click="bdHand(item1.link)"
                  v-for="item1 in item.children"
                  :key="item1.key"
                >
                  {{ item1.title }}</a-menu-item
                >
                <!-- </a-menu-item-group> -->
              </a-sub-menu>
              <a-menu-item v-else :key="item.key" @click="bdHand(item.link)">
                <a-icon type="user" />{{ item.navTit }}
              </a-menu-item>
            </template>
          </a-menu>
        </a-layout-sider>
        <a-layout style="padding: 0 24px 24px">
          <a-breadcrumb style="margin: 16px 0">
            <a-breadcrumb-item>Home</a-breadcrumb-item>
            <a-breadcrumb-item>List</a-breadcrumb-item>
            <a-breadcrumb-item>App</a-breadcrumb-item>
          </a-breadcrumb>
          <a-layout-content
            :style="{
              background: '#fff',
              padding: '24px',
              margin: 0,
              minHeight: '280px',
            }"
          >
            <router-view></router-view>
          </a-layout-content>
        </a-layout>
      </a-layout>
    </a-layout>
  </div>
</template>

<script>
export default {
  name: "BeileihoutaiLayOut",

  data() {
    return {
      collapsed: false,
      biaoti: {},
      meunList: [
        {
          navTit: "营销概况",
          key: "1",
          link: "/marketing",
        },
        {
          navTit: "机构管理",
          key: "2",
          children: [
            { title: "一", key: "11", link: "/404" },
            { title: "五", key: "15" },
          ],
        },
        {
          navTit: "报表管理",
          key: "3",
          children: [
            { title: "收入报表", key: "21", link: "/income" },
            { title: "连锁报表", key: "24", link: "/chain" },
            { title: "明细", key: "23", link: "/particulars" },
          ],
        },
        { navTit: "扩展管理", key: "4" },
        { navTit: "后台用户管理", key: "5", link: "/userControl" },
        {
          navTit: "权限管理",
          key: "6",
          children: [
            { title: "菜单管理", key: "61" },
            // { title: "菜单分类管理", key: "63" },
            { title: "角色管理", key: "62", link: "/role" },
          ],
        },
      ],
    };
  },

  mounted() {},

  methods: {
    bdHand(link) {
      this.$router.push({ path: link });
    },
  },
};
</script>

<style lang="scss" scoped>
.layOut-content .ant-layout-header {
  background: #fff;
  display: flex;
  //   justify-content: center;
  align-items: center;
}
.hou-tit {
  font-size: 24px;
}
.rudius {
  width: 48px;
  height: 48px;
  background: rgba(153, 153, 153, 1);
  border-radius: 50%;
  margin-left: 8%;
  margin-right: 2%;
}
.header-tit {
  font-size: 20px;
}

#components-layout-demo-top-side-2 .logo {
  width: 120px;
  height: 31px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px 28px 16px 0;
  float: left;
}
.ant-menu-item:not(:last-child) {
  margin-bottom: 0;
}
</style>
