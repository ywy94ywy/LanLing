export default {
  'POST /api/getMenu': (req, res) => {
    res.send({
      status: 'ok',
      menu: [
        {
          path: '/main',
          name: '主页管理',
          icon: 'smile',
          componentUrl: './layouts/BlankLayout',
          routes: [
            {
              name: 'home',
              path: '/main/home',
              name: '首页',
              icon: 'smile',
              componentUrl: './pages/main/Home',
            },
            {
              name: '操作手册',
              icon: 'smile',
              path: '/main/manual',
              componentUrl: './pages/main/Home',
            },
          ],
        },
        {
          path: '/a',
          name: 'aaaaa',
          icon: 'crown',
          componentUrl: './layouts/BlankLayout',
          routes: [
            {
              path: '/a/b',
              name: 'bbbb',
              icon: 'skin',
              componentUrl: './layouts/BlankLayout',
              routes: [
                {
                  path: '/a/b/c',
                  name: 'ccccc',
                  icon: 'skin',
                  componentUrl: './pages/Admin',
                },
                {
                  path: '/a/b/d',
                  name: 'dddd',
                  icon: 'skin',
                  componentUrl: './pages/Admin',
                },
              ],
            },
          ],
        },
        {
          path: '/business',
          name: '业务管理',
          icon: 'smile',
          componentUrl: './layouts/BlankLayout',
          routes: [
            {
              name: '人员管理',
              icon: 'smile',
              path: '/business/staff',
              componentUrl: './pages/business/Staff',
            },
            {
              name: '个人中心',
              icon: 'smile',
              path: '/business/staff3',
              componentUrl: './pages/business/Staff3',
            },
          ],
        },
      ],
    });
  },
};
