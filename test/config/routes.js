export default [
  {
    path: '/user',
    component: '../layouts/UserLayout',
    routes: [
      {
        name: 'login',
        path: '/user/login',
        component: './user/login',
      },
    ],
  },
  // {
  //   path: '/',
  //   component: '../layouts/SecurityLayout',
  //   routes: [
  {
    path: '/',
    component: '../layouts/BasicLayout',
    routes: [
      {
        path: '/',
        redirect: '/main/home',
      },
      {
        path: '/main',
        name: '主页管理',
        icon: 'smile',
        component: '../layouts/BlankLayout',
        routes: [
          {
            name: '首页',
            icon: 'smile',
            path: '/main/home',
            component: './main/Home',
          },
          {
            name: '操作手册',
            icon: 'smile',
            path: '/main/manual',
            component: './main/Home',
          },
        ],
      },
      {
        path: '/a',
        name: 'aaaaa',
        icon: 'crown',
        component: '../layouts/BlankLayout',
        routes: [
          {
            path: '/a/b',
            name: 'bbbb',
            icon: 'skin',
            component: '../layouts/BlankLayout',
            routes: [
              {
                path: '/a/b/c',
                name: 'ccccc',
                icon: 'skin',
                component: './Admin',
              },
              {
                path: '/a/b/d',
                name: 'dddd',
                icon: 'skin',
                component: './Admin',
              },
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
        path: '/business',
        name: '业务管理',
        icon: 'smile',
        component: '../layouts/BlankLayout',
        routes: [
          {
            name: '人员管理',
            icon: 'smile',
            path: '/business/staff',
            component: './business/Staff',
          },
          {
            name: '个人中心',
            icon: 'smile',
            path: '/business/staff3',
            component: './business/Staff3',
          },
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
  // ],
  // },
  // {
  //   component: './404',
  // },
];
