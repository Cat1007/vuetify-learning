<template>
  <v-app light>
    <v-navigation-drawer app v-model="drawer">
      <navgator-list></navgator-list>
      <template v-slot:append>
        <div class="pa-2">
          <v-btn block color="warning lighten-1">退出登陆</v-btn>
        </div>
      </template>
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
import NavgatorList from "./components/NavgatorList.vue"

export default {
  name: "App",

  components: {
    NavgatorList
  },

  data: () => ({
    //
    drawer: false
  }),

  methods: {
    closeGroup: function (event) {
      console.log(event);
    },
  },
};
</script>
