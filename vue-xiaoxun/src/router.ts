import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Mall from './views/Mall.vue';
import Mine from './views/Mine.vue';
import Cfollow from './views/Hcont/Cfollow.vue';//关注
import Crecom from './views/Hcont/Crecom.vue';//推荐
import Cactivity from './views/Hcont/Cactivity.vue';//活动
import Cency from './views/Hcont/Cency.vue';//百科
import Cstudy from './views/Hcont/Cstudy.vue';//学习
import Cquality from './views/Hcont/Cquality.vue';//素质
import Cfamily from './views/Hcont/Cfamily.vue';//家庭


Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home, 
      children : [
        {
          path: 'cfollow',
          name: 'cfollow',
          component: Cfollow,
        },{
          path: 'crecom',
          name: 'crecom',
          component: Crecom,
        },{
          path: 'cactivity',
          name: 'cactivity',
          component: Cactivity,
        },{
          path: 'cency',
          name: 'cency',
          component: Cency,
        },{
          path: 'cstudy',
          name: 'cstudy',
          component: Cstudy,
        },{
          path: 'cquality',
          name: 'cquality',
          component: Cquality,
        },{
          path: 'cfamily',
          name: 'cfamily',
          component: Cfamily,
        },
      ]
    },
    {
      path: '/mall',
      name: 'mall',
      component : Mall,
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
    {
      path: '/mine',
      name: 'mine',
      component : Mine,
    },
  ],
});
