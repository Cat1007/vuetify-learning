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
        <v-list-group prepend-icon="mdi-account-circle" color="primary" no-action>
          <template v-slot:activator>
            <v-list-item-title>一级目录</v-list-item-title>
          </template>

          <v-list-item link v-ripple="{ class : 'primary--text text--lighten-1' }" :value="444">
            <v-list-item-content>
              <v-list-item-title>测试内容</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item link v-ripple="{ class : 'primary--text text--lighten-1' }" :value="555">
            <v-list-item-content>
              <v-list-item-title>测试内容</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>

        <!-- 实现多级列表 -->
        <v-list-group prepend-icon="mdi-account-circle" color="primary" no-action>
          <template v-slot:activator>
            <v-list-item-title>一级目录</v-list-item-title>
          </template>

          <v-list-item link v-ripple="{ class : 'primary--text text--lighten-1' }" :value="444">
            <v-list-item-content>
              <v-list-item-title>测试内容</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item link v-ripple="{ class : 'primary--text text--lighten-1' }" :value="555">
            <v-list-item-content>
              <v-list-item-title>测试内容</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
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
        <!-- <router-view></router-view> -->
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
  }),

  methods: {
    closeGroup: function (event) {
      console.log(event);
    },
  },
};
</script>
