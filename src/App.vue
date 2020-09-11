<template>
  <v-app light>
    <v-navigation-drawer app v-model="drawer">
      <v-list nav dense>
        <!-- 员工信息展示部分 -->
        <v-list-item two-line class="px-0">
          <v-list-item-avatar>
            <img src="https://randomuser.me/api/portraits/men/81.jpg" />
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>人员姓名</v-list-item-title>
            <v-list-item-subtitle>职位</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

        <!-- 实现多级列表 -->
        <v-list-item link :to="'home'" no-action light exact exact-active-class="primary--text">
          <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
          </v-list-item-icon>
          <v-list-item-title>主页</v-list-item-title>
        </v-list-item>

        <!-- 多级列表必须要正确反应路由的层次，否则会无法匹配 -->
        <v-list-group prepend-icon="mdi-account-circle" group="/user">
          <template v-slot:activator>
            <v-list-item-title>用户（多级菜单）</v-list-item-title>
          </template>

          <v-list-group no-action sub-group group="/admin">
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>管理员</v-list-item-title>
              </v-list-item-content>
            </template>

            <v-list-item v-for="(admin, i) in admins" :key="i" link :to="admin[0]" exact>
              <v-list-item-title v-text="admin[0]"></v-list-item-title>
              <v-list-item-icon>
                <v-icon v-text="admin[1]"></v-icon>
              </v-list-item-icon>
            </v-list-item>
          </v-list-group>

          <v-list-group sub-group no-action>
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>Actions</v-list-item-title>
              </v-list-item-content>
            </template>
            <v-list-item v-for="(crud, i) in cruds" :key="i" @click="closeGroup">
              <v-list-item-title v-text="crud[0]"></v-list-item-title>
              <v-list-item-action>
                <v-icon v-text="crud[1]"></v-icon>
              </v-list-item-action>
            </v-list-item>
          </v-list-group>
        </v-list-group>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app color="primary white--text">
      <!-- -->
      <v-app-bar-nav-icon @click="drawer = !drawer" color="white"></v-app-bar-nav-icon>
      <v-toolbar-title>页面框架测试</v-toolbar-title>
    </v-app-bar>

    <!-- Sizes your content based upon application components -->
    <v-main>
      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <!-- If using vue-router -->
        <router-view></router-view>
      </v-container>
    </v-main>

    <v-footer>
      <!-- -->
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {},

  data: () => ({
    //
    drawer: false,
    navSelected: 1,
    items: [
      { title: "项目示例1", icon: "mdi-view-dashboard", id: "111" },
      { title: "项目示例2", icon: "mdi-image", id: "222" },
      { title: "项目示例3", icon: "mdi-help-box", id: "333" },
    ],
    admins: [
      ["/user/admin/Management", "mdi-people-outline"],
      ["/user/admin/Settings", "mdi-settings"],
    ],
    cruds: [
      ["Create", "mdi-account-plus"],
      ["Read", "mdi-archive-arrow-down"],
      ["Update", "mdi-update"],
      ["Delete", "mdi-delete"],
    ],
  }),

  methods: {
    closeGroup: function (event) {
      console.log(event);
    },
  },
};
</script>
