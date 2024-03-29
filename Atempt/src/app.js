import { queryMenu } from './services/user';

let newRoutes = [];

export const patchRoutes = (routes = []) => {
  // 动态获取菜单后，添加404配置与component
  const addNotFoundAndComponent = routes => {
    for (let i = 0; i < routes.length; i++) {
      const item = routes[i];
      const hasRoute = item.routes;

      // 添加component(require无法使用变量，添加jsx临时解决)
      if (item.componentUrl) {
        try {
          item.component = require(`${item.componentUrl}.jsx`).default;
        } catch (err) {
          item.component = require(`${item.componentUrl}/index.jsx`).default;
        }
      }

      if (hasRoute) {
        if (hasRoute instanceof Array) {
          // 添加404配置
          hasRoute.push({
            component: require('./pages/404').default,
          });
        }
        addNotFoundAndComponent(hasRoute);
      }
    }
  };
  addNotFoundAndComponent(newRoutes);

  try {
    routes[1].routes[0].routes.unshift(...newRoutes);
  } catch (err) {
    console.log('路由配置与预期不一致,请重新配置app.js中的动态路由');
  }
};

export const render = oldRender => {
  // 动态获取菜单
  if (window.location.pathname.match('/account/login')) {
    oldRender();
  } else {
    queryMenu().then(({ menu = [] }) => {
      newRoutes = menu;
      oldRender();
    });
  }
};
