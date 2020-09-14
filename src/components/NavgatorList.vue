<template>
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

    <template v-for="(first, i) in navList">
      <!-- 一级菜单循环 -->
      <v-list-group v-if="first.subgroup" :key="i" :prepend-icon="first.icon" :group="first.group" no-action>
        <template v-slot:activator>
          <v-list-item-title>{{first.title}}</v-list-item-title>
        </template>
        <template v-for="(sec , k) in first.sub">
          <!-- 二级菜单循环 -->
          <v-list-group v-if="sec.subgroup" :key="k" sub-group no-action>
            <template v-slot:activator>
              <v-list-item-title>{{sec.title}}</v-list-item-title>
            </template>
            <!-- 最后的菜单项，不存在分支 -->
            <v-list-item
              v-for="(item , j) in sec.sub"
              :key="j"
              :to="first.group + sec.group + item.to"
            >
              <v-list-item-title v-text="item.title"></v-list-item-title>
            </v-list-item>
          </v-list-group>
          <!-- 二级菜单项 -->
          <v-list-item v-else :key="k" link exact :to="first.group + sec.to">
            <v-list-item-title>{{sec.title}}</v-list-item-title>
          </v-list-item>
        </template>
      </v-list-group>
      <v-list-item v-else :key="i" link :to="first.to" exact class="primary--text">
        <v-list-item-icon>
          <v-icon>{{first.icon}}</v-icon>
        </v-list-item-icon>
        <v-list-item-title>{{first.title}}</v-list-item-title>
      </v-list-item>
    </template>
  </v-list>
</template>

<script>
export default {
  name: "navgator-list",
  data: () => ({
    navList: [
      {
        title: "主页",
        icon: "mdi-account-circle",
        subgroup: false,
        to: "/home",
      },
      {
        title: "用户",
        icon: "mdi-account-circle",
        subgroup: true,
        group: "/user",
        sub: [
          {
            title: "管理员",
            subgroup: true,
            group: "/admin",
            sub: [
              { title: "信息管理", to: "/Management" },
              { title: "系统设置", to: "/Settings" },
            ],
          },
          {
            title: "操作",
            subgroup: true,
            group: "/action",
            sub: [
              { title: "添加文档", to: "/AddFile" },
              { title: "输入记录", to: "/Recording" },
            ],
          },
        ],
      },
      {
        title: "测试级别",
        icon: "mdi-account-circle",
        subgroup: true,
        group: "/test",
        sub: [
          {
            title: "二级菜单",
            subgroup: true,
            group: "/admin",
            sub: [
              { title: "信息管理", to: "/Management" },
              { title: "系统设置", to: "/Settings" },
            ],
          },
          {
            title: "一级菜单",
            icon: "",
            subgroup: false,
            to: "/action",
          },
        ],
      },
    ],
  }),
};
</script>

<style>
</style>