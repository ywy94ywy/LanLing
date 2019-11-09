export default {
  // 支持值为 Object 和 Array
  'Post /api/currentUser': (req, res) => {
    res.send({
      user: {
        name: 'Serati Ma',
        avatar: 'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png',
        userid: '00000001',
        email: 'antdesign@alipay.com',
        signature: '海纳百川，有容乃大',
        title: '交互专家',
        group: '蚂蚁金服－某某某事业群－某某平台部－某某技术部－UED',
      },
      menu: [
        {
          path: '/main',
          name: '主页管理',
          icon: 'smile',
          routes: [
            {
              path: '/main/home',
              name: '首页',
              icon: 'smile',
              componentUrl: './pages/Home',
            },
            {
              path: '/main/manual',
              name: '操作手册',
              icon: 'smile',
              componentUrl: './pages/Home',
            },
          ],
        },
        {
          path: '/a',
          name: 'aaaaa',
          icon: 'crown',
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
