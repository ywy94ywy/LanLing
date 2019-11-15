export default {
  'Post /api/userInfo': (req, res) => {
    res.send({
      user: {
        name: '贾亚军',
        avatar: 'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png',
        userid: '00000001',
        post: '劳务管理员',
      },
    });
  },

  'Post /api/userAuthMenu': (req, res) => {
    res.send({
      menu: [
        {
          path: '/main',
          name: '主页管理',
          iconfont: 'iconzhuye',
          routes: [
            {
              path: '/main/home',
              name: '首页',
              iconfont: 'iconshouye',
              componentUrl: './pages/home',
            },
            {
              path: '/main/manual',
              name: '操作手册',
              iconfont: 'iconcaozuoshouce',
              componentUrl: './pages/manual',
            },
          ],
        },
        {
          path: '/user',
          name: '用户管理',
          iconfont: 'iconrenyuanguanli',
          routes: [
            {
              path: '/user/info',
              name: '用户信息管理',
              iconfont: 'iconyonghuxinxiguanli',
              componentUrl: './pages/userInfo',
            },
            {
              path: '/user/account',
              name: '用户账号管理',
              iconfont: 'iconyonghuzhanghaoguanli',
              componentUrl: './pages/userAccount',
            },
            {
              path: '/user/auth',
              name: '用户认证管理',
              iconfont: 'iconyonghurenzhengguanli',
              componentUrl: './pages/userAuth',
            },
            {
              path: '/user/organization',
              name: '用户组织管理',
              iconfont: 'iconyonghurenzhengguanli',
              componentUrl: './pages/userOrganization',
            },
            {
              path: '/user/license',
              name: '用户执照管理',
              iconfont: 'iconyonghuzhizhaoguanli',
              componentUrl: './pages/userLicense',
            },
          ],
        },
      ],
    });
  },

  'POST /api/login/account': (req, res) => {
    const { password, userName, type } = req.body;

    if (password === 'ant.design' && userName === 'admin') {
      res.send({
        status: 'ok',
        type,
        sessionid: '123456',
      });
      return;
    }

    res.send({
      status: 'error',
      type,
      currentAuthority: 'guest',
    });
  },

  'GET /api/500': (req, res) => {
    res.status(500).send({
      timestamp: 1513932555104,
      status: 500,
      error: 'error',
      message: 'error',
      path: '/base/category/list',
    });
  },

  'GET /api/404': (req, res) => {
    res.status(404).send({
      timestamp: 1513932643431,
      status: 404,
      error: 'Not Found',
      message: 'No message available',
      path: '/base/category/list/2121212',
    });
  },
  'GET /api/403': (req, res) => {
    res.status(403).send({
      timestamp: 1513932555104,
      status: 403,
      error: 'Unauthorized',
      message: 'Unauthorized',
      path: '/base/category/list',
    });
  },
  'GET /api/401': (req, res) => {
    res.status(401).send({
      timestamp: 1513932555104,
      status: 401,
      error: 'Unauthorized',
      message: 'Unauthorized',
      path: '/base/category/list',
    });
  },
};
