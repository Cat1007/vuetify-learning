import VueRouter from 'vue-router';

import Management from '../components/Management.vue';
import Settings from '../components/Settings.vue';
import Home from '../components/Home.vue';

const routes = [
  { path: '/user/admin/Management', component: Management },
  { path: '/user/admin/Settings', component: Settings },
  { path: '/home', component: Home },
  { path: '*', redirect: 'home' },
];

const router = new VueRouter({
  routes,
  mode: 'history'
});

export default router;