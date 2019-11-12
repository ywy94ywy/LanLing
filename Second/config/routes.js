export default [
  {
    path: '/account',
    component: '../layouts/UserLayout',
    routes: [
      {
        name: 'login',
        path: '/account/login',
        component: './account/login',
      },
    ],
  },
  {
    path: '/',
    component: '../layouts/SecurityLayout',
    routes: [
      {
        path: '/',
        component: '../layouts/BasicLayout',
        routes: [
          {
            path: '/',
            redirect: '/main/home',
          },
          /**
           * 主要业务模块区域，在app.js中，也就是运行时动态载入
           */
          {
            component: './404',
          },
        ],
      },
      {
        component: './404',
      },
    ],
  },
  {
    component: './404',
  },
];
