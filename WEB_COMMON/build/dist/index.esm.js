import 'antd/lib/layout/style';
import 'antd/lib/layout';
import 'antd/lib/menu/style';
import _Menu from 'antd/lib/menu';
import 'antd/lib/icon/style';
import _Icon from 'antd/lib/icon';
import ProLayout, { getMenuData } from '@ant-design/pro-layout';
import React, { useState } from 'react';
import Link from 'umi/link';
import 'antd/lib/popover/style';
import _Popover from 'antd/lib/popover';
import router from 'umi/router';
import 'antd/lib/avatar/style';
import _Avatar from 'antd/lib/avatar';
import 'antd/lib/card/style';
import _Card from 'antd/lib/card';
import classnames from 'classnames';

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  }
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _iterableToArrayLimit(arr, i) {
  if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
    return;
  }

  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css = ".src-components-SwitchTheme-__swicthTheme___3ARnu {\n  width: 270px;\n}\n.src-components-SwitchTheme-__swicthTheme___3ARnu .src-components-SwitchTheme-__section___3Qz3J:nth-child(n + 2) {\n  margin-top: 10px;\n}\n.src-components-SwitchTheme-__swicthTheme___3ARnu .src-components-SwitchTheme-__section___3Qz3J .src-components-SwitchTheme-__title___2FtkP {\n  font-size: 16px;\n  line-height: 2em;\n  border-bottom: 1px solid #ccc;\n  margin-bottom: 10px;\n}\n.src-components-SwitchTheme-__swicthTheme___3ARnu .src-components-SwitchTheme-__section___3Qz3J .src-components-SwitchTheme-__bgs___3g2Xq {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n.src-components-SwitchTheme-__swicthTheme___3ARnu .src-components-SwitchTheme-__section___3Qz3J .src-components-SwitchTheme-__bgs___3g2Xq .src-components-SwitchTheme-__circle___-cImG {\n  cursor: pointer;\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n}\n.src-components-SwitchTheme-__swicthTheme___3ARnu .src-components-SwitchTheme-__section___3Qz3J .src-components-SwitchTheme-__bgs___3g2Xq .src-components-SwitchTheme-__circle___-cImG:nth-child(n + 2) {\n  margin-left: 25px;\n}\n.src-components-SwitchTheme-__swicthTheme___3ARnu .src-components-SwitchTheme-__section___3Qz3J .src-components-SwitchTheme-__bgs___3g2Xq .src-components-SwitchTheme-__rectangle___1QDOg {\n  cursor: pointer;\n  width: 70px;\n  height: 40px;\n}\n.src-components-SwitchTheme-__swicthTheme___3ARnu .src-components-SwitchTheme-__section___3Qz3J .src-components-SwitchTheme-__bgs___3g2Xq .src-components-SwitchTheme-__rectangle___1QDOg:nth-child(n + 2) {\n  margin-left: 10px;\n}\n";
var style = {"swicthTheme":"src-components-SwitchTheme-__swicthTheme___3ARnu","section":"src-components-SwitchTheme-__section___3Qz3J","title":"src-components-SwitchTheme-__title___2FtkP","bgs":"src-components-SwitchTheme-__bgs___3g2Xq","circle":"src-components-SwitchTheme-__circle___-cImG","rectangle":"src-components-SwitchTheme-__rectangle___1QDOg"};
styleInject(css);

var Content = function Content(_ref) {
  var data = _ref.data,
      setBackground = _ref.setBackground;
  return React.createElement("div", {
    className: style.swicthTheme
  }, data.map(function (type, index) {
    return React.createElement("div", {
      className: style.section,
      key: index
    }, React.createElement("p", {
      className: style.title
    }, type.title), React.createElement("div", {
      className: style.bgs
    }, type.background.map(function (bg, i) {
      return React.createElement("span", {
        key: i,
        className: type.title !== "建筑系列" ? style.circle : style.rectangle,
        onClick: function onClick() {
          setBackground(bg);
        },
        style: {
          background: bg,
          backgroundSize: "cover"
        }
      });
    })));
  }));
};

var SwitchTheme = (function (_ref2) {
  var data = _ref2.data,
      setBackground = _ref2.setBackground,
      children = _ref2.children;
  return React.createElement(_Popover, {
    content: React.createElement(Content, {
      data: data,
      setBackground: setBackground
    }),
    placement: "bottomLeft",
    trigger: "click"
  }, children);
});

var css$1 = ".src-components-BasicLayout-__wrapper___2rpta {\n  background-repeat: no-repeat;\n  background-size: cover;\n  height: 100vh;\n  overflow: auto;\n}\n.src-components-BasicLayout-__wrapper___2rpta .src-components-BasicLayout-__header___376SE {\n  display: -webkit-box;\n  display: flex;\n  color: #fff;\n}\n.src-components-BasicLayout-__wrapper___2rpta .src-components-BasicLayout-__header___376SE .src-components-BasicLayout-__headerTheme___1Pf8_ {\n  -webkit-box-flex: 0;\n          flex: 0 0 150px;\n}\n.src-components-BasicLayout-__wrapper___2rpta .src-components-BasicLayout-__header___376SE .src-components-BasicLayout-__headerTheme___1Pf8_ .src-components-BasicLayout-__themeBtn___3309H {\n  margin-left: 37px;\n  cursor: pointer;\n}\n.src-components-BasicLayout-__wrapper___2rpta .src-components-BasicLayout-__header___376SE .src-components-BasicLayout-__headerTheme___1Pf8_ .src-components-BasicLayout-__themeBtn___3309H > i {\n  margin-right: 5px;\n}\n.src-components-BasicLayout-__wrapper___2rpta .src-components-BasicLayout-__header___376SE .src-components-BasicLayout-__headerContent___1KW_Q {\n  -webkit-box-flex: 1;\n          flex: 1;\n}\n.src-components-BasicLayout-__wrapper___2rpta .src-components-BasicLayout-__header___376SE .src-components-BasicLayout-__headerRight___bGGRU {\n  margin-left: auto;\n  margin-right: 20px;\n}\n.src-components-BasicLayout-__wrapper___2rpta .ant-layout-header,\n.src-components-BasicLayout-__wrapper___2rpta .ant-pro-global-header,\n.src-components-BasicLayout-__wrapper___2rpta .ant-menu-dark,\n.src-components-BasicLayout-__wrapper___2rpta .ant-pro-sider-menu-logo,\n.src-components-BasicLayout-__wrapper___2rpta .ant-layout,\n.src-components-BasicLayout-__wrapper___2rpta .ant-layout-sider,\n.src-components-BasicLayout-__wrapper___2rpta .ant-menu-inline.ant-menu-sub {\n  background: transparent;\n}\n.src-components-BasicLayout-__wrapper___2rpta .ant-layout-header {\n  font-size: calc(14px + 2px);\n}\n.src-components-BasicLayout-__wrapper___2rpta .ant-pro-sider-menu-logo {\n  font-size: 18px;\n  color: #fff;\n  text-align: center;\n}\n.src-components-BasicLayout-__wrapper___2rpta .ant-pro-basicLayout-content {\n  background: #f0f2f5;\n  margin: 0;\n  margin-top: 64px;\n}\n.src-components-BasicLayout-__wrapper___2rpta .ant-pro-basicLayout-content.ant-pro-basicLayout-has-header {\n  padding-top: 0;\n}\n.src-components-BasicLayout-__wrapper___2rpta .ant-layout-content {\n  padding-bottom: 20px;\n}\n.src-components-BasicLayout-__wrapper___2rpta .ant-layout-content > div {\n  margin: 0 !important;\n}\n.src-components-BasicLayout-__wrapper___2rpta .ant-pro-sider-menu-sider {\n  box-shadow: none;\n}\n.src-components-BasicLayout-__wrapper___2rpta .ant-menu-root {\n  padding: 0 !important;\n}\n.src-components-BasicLayout-__wrapper___2rpta .ant-menu-root > .ant-menu-submenu > div.ant-menu-submenu-title {\n  background-color: rgba(255, 255, 255, 0.1);\n  height: 60px;\n  line-height: 60px;\n}\n.src-components-BasicLayout-__wrapper___2rpta .ant-menu-root > .ant-menu-submenu .ant-menu-submenu-title {\n  background-color: rgba(0, 0, 0, 0.2);\n  height: 40px;\n  line-height: 40px;\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.src-components-BasicLayout-__wrapper___2rpta .ant-menu-root > .ant-menu-submenu .ant-menu-submenu-title > a {\n  color: #fff;\n}\n.src-components-BasicLayout-__wrapper___2rpta .ant-menu-dark .ant-menu-item:hover,\n.src-components-BasicLayout-__wrapper___2rpta .ant-menu.ant-menu-dark .ant-menu-item-selected {\n  background-color: rgba(0, 0, 0, 0.1);\n}\n.src-components-BasicLayout-__wrapper___2rpta .ant-menu-submenu-title,\n.src-components-BasicLayout-__wrapper___2rpta .ant-menu-item {\n  font-size: calc(14px + 2px);\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.src-components-BasicLayout-__wrapper___2rpta .ant-menu-inline .ant-menu-item:not(:last-child) {\n  margin-bottom: 0;\n}\n.src-components-BasicLayout-__wrapper___2rpta .ant-menu-dark .ant-menu-inline.ant-menu-sub {\n  box-shadow: none;\n}\n";
var style$1 = {"wrapper":"src-components-BasicLayout-__wrapper___2rpta","header":"src-components-BasicLayout-__header___376SE","headerTheme":"src-components-BasicLayout-__headerTheme___1Pf8_","themeBtn":"src-components-BasicLayout-__themeBtn___3309H","headerContent":"src-components-BasicLayout-__headerContent___1KW_Q","headerRight":"src-components-BasicLayout-__headerRight___bGGRU"};
styleInject(css$1);

var backgroundData = [{
  title: "纯色主题",
  background: ["#1c1f87", "#1c1f87", "#1c1f87", "#1c1f87"]
}, {
  title: "渐变主题",
  background: ["#1c1f87", "#1c1f87", "#1c1f87", "#1c1f87"]
}, {
  title: "建筑系列",
  background: ["url(https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1572513608736&di=c8083949ac0dc971a8bf0556cb93984d&imgtype=0&src=http%3A%2F%2Fphotocdn.sohu.com%2F20110124%2FImg302502020.jpg)", "url(https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1572513608736&di=c8083949ac0dc971a8bf0556cb93984d&imgtype=0&src=http%3A%2F%2Fphotocdn.sohu.com%2F20110124%2FImg302502020.jpg)", "url(https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1572513608736&di=c8083949ac0dc971a8bf0556cb93984d&imgtype=0&src=http%3A%2F%2Fphotocdn.sohu.com%2F20110124%2FImg302502020.jpg)", "url(https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1572513608736&di=c8083949ac0dc971a8bf0556cb93984d&imgtype=0&src=http%3A%2F%2Fphotocdn.sohu.com%2F20110124%2FImg302502020.jpg)"]
}]; // 获取antd-pro扁平化菜单keys

var getFlatMenuKeys = function getFlatMenuKeys(menuData) {
  var keys = [];
  menuData.forEach(function (item) {
    if (!item) {
      return;
    }

    keys.push(item.path);

    if (item.children) {
      keys = keys.concat(getFlatMenuKeys(item.children));
    }
  });
  return keys;
};

var index = (function (_ref) {
  var children = _ref.children,
      _ref$leftContent = _ref.leftContent,
      leftContent = _ref$leftContent === void 0 ? null : _ref$leftContent,
      _ref$rightContent = _ref.rightContent,
      rightContent = _ref$rightContent === void 0 ? null : _ref$rightContent,
      _ref$theme = _ref.theme,
      theme = _ref$theme === void 0 ? true : _ref$theme,
      rest = _objectWithoutProperties(_ref, ["children", "leftContent", "rightContent", "theme"]);

  var _getMenuData = getMenuData(rest.route ? rest.route.routes : []),
      menuData = _getMenuData.menuData;

  var _useState = useState(getFlatMenuKeys(menuData)),
      _useState2 = _slicedToArray(_useState, 2),
      openKeys = _useState2[0],
      setOpenKeys = _useState2[1]; // 默认展开所有菜单


  var _useState3 = useState(window.localStorage.theme || backgroundData[0].background[0]),
      _useState4 = _slicedToArray(_useState3, 2),
      bg = _useState4[0],
      setBg = _useState4[1]; // 设置背景


  var Left = function Left() {
    return leftContent;
  };

  var Right = function Right() {
    return rightContent;
  };

  var setBackground = function setBackground(bg) {
    setBg(bg);
    window.localStorage.theme = bg;
  };

  return React.createElement("div", {
    className: style$1.wrapper,
    style: bg.startsWith("url") ? {
      backgroundImage: bg
    } : {
      backgroundColor: bg
    }
  }, React.createElement(ProLayout, _extends({
    headerRender: function headerRender() {
      return React.createElement("div", {
        className: style$1.header
      }, theme && React.createElement("div", {
        className: style$1.headerTheme
      }, React.createElement(SwitchTheme, {
        data: backgroundData,
        setBackground: setBackground
      }, React.createElement("span", {
        className: style$1.themeBtn
      }, React.createElement(_Icon, {
        type: "skin"
      }), "\u4E3B\u9898\u8BBE\u7F6E"))), React.createElement("div", {
        className: style$1.headerContent
      }, React.createElement(Left, null)), React.createElement("div", {
        className: style$1.headerRight
      }, React.createElement(Right, null)));
    },
    collapsed: false,
    onCollapse: function onCollapse() {
      return false;
    },
    siderWidth: 230 // 菜单Item渲染
    ,
    menuItemRender: function menuItemRender(menuItemProps, defaultDom) {
      if (menuItemProps.isUrl) {
        return defaultDom;
      }

      return React.createElement(Link, {
        to: menuItemProps.path
      }, React.createElement("i", {
        className: "iconfont ".concat(menuItemProps.iconfont),
        style: {
          marginRight: "10px"
        }
      }), defaultDom);
    } // 控制菜单默认展开
    ,
    menuProps: {
      openKeys: openKeys,
      onOpenChange: function onOpenChange(e) {
        setOpenKeys(e);
      }
    } // 面包屑数据渲染
    ,
    breadcrumbRender: function breadcrumbRender() {
      var routers = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      return _toConsumableArray(routers);
    } // 面包屑展示
    ,
    itemRender: function itemRender(route) {
      return React.createElement("span", null, route.breadcrumbName);
    },
    disableMobile: true
  }, rest), children));
}); // 自定义菜单（因pro_layout在使用自定义iconfont有问题，简单实现了下）

var css$2 = ".src-components-SystemsEntry-__systems___1MQGw .src-components-SystemsEntry-__tree___3JRcF {\n  margin-right: 10px;\n}\n.src-components-SystemsEntry-__systems___1MQGw .src-components-SystemsEntry-__system___2BPTA {\n  color: rgba(255, 255, 255, 0.65);\n  cursor: pointer;\n}\n.src-components-SystemsEntry-__systems___1MQGw .src-components-SystemsEntry-__system___2BPTA:nth-of-type(n + 3) {\n  margin-left: 15px;\n}\n.src-components-SystemsEntry-__systems___1MQGw .src-components-SystemsEntry-__system___2BPTA > span {\n  margin-left: 5px;\n}\n.src-components-SystemsEntry-__systems___1MQGw .src-components-SystemsEntry-__system___2BPTA:hover {\n  color: #fff;\n}\n";
var style$2 = {"systems":"src-components-SystemsEntry-__systems___1MQGw","tree":"src-components-SystemsEntry-__tree___3JRcF","system":"src-components-SystemsEntry-__system___2BPTA"};
styleInject(css$2);

var index$1 = (function (_ref) {
  var data = _ref.data;
  return React.createElement("div", {
    className: style$2.systems
  }, React.createElement("span", {
    className: style$2.tree
  }, "tree"), data.map(function (v, i) {
    return React.createElement("span", {
      key: i,
      className: style$2.system,
      onClick: function onClick() {
        router.push(v.url);
      }
    }, React.createElement(_Icon, {
      type: v.icon
    }), React.createElement("span", null, v.title));
  }));
});

var css$3 = ".src-components-UserMenu-__userMenu___3PGzU {\n  cursor: pointer;\n}\n.src-components-UserMenu-__userMenu___3PGzU .src-components-UserMenu-__user___1hjT1 {\n  margin-left: 10px;\n  color: rgba(255, 255, 255, 0.65);\n  font-size: 14px;\n  -webkit-transition: all 0.2s;\n  transition: all 0.2s;\n}\n.src-components-UserMenu-__userMenu___3PGzU .src-components-UserMenu-__user___1hjT1:hover {\n  color: #fff;\n}\n.src-components-UserMenu-__userMenu___3PGzU .ant-popover-inner-content {\n  padding: 10px 16px;\n}\n.src-components-UserMenu-__userMenu___3PGzU .ant-popover-inner-content .ant-menu {\n  border-right: none;\n}\n.src-components-UserMenu-__userMenu___3PGzU .ant-popover-inner-content .ant-menu-vertical > .ant-menu-item {\n  padding: 0;\n  height: 30px;\n  line-height: 30px;\n  margin-bottom: 4px;\n  margin-top: 4px;\n  text-align: right;\n}\n";
var style$3 = {"userMenu":"src-components-UserMenu-__userMenu___3PGzU","user":"src-components-UserMenu-__user___1hjT1"};
styleInject(css$3);

var index$2 = (function (_ref) {
  var _ref$user = _ref.user,
      user = _ref$user === void 0 ? null : _ref$user,
      _ref$logout = _ref.logout,
      logout = _ref$logout === void 0 ? null : _ref$logout,
      _ref$systems = _ref.systems,
      systems = _ref$systems === void 0 ? [] : _ref$systems;
  return user ? React.createElement("span", {
    className: style$3.userMenu
  }, React.createElement(_Popover, {
    overlayClassName: style$3.userMenu,
    content: React.createElement(_Menu, null, systems.map(function (v, i) {
      return React.createElement(_Menu.Item, {
        key: i,
        onClick: function onClick() {
          console.log(v.url);
          window.location.href = v.url || "/";
        }
      }, v.title);
    }), React.createElement(_Menu.Item, {
      onClick: function onClick() {
        logout && logout();
      }
    }, "\u9000\u51FA\u7CFB\u7EDF")),
    placement: "bottomRight",
    trigger: "click"
  }, React.createElement(_Avatar, {
    size: 25,
    src: user.avatar,
    icon: "user"
  }), React.createElement("span", {
    className: style$3.user
  }, user.name))) : null;
});

var css$4 = ".src-components-CardWithTitle-__cardWithTitle___1BUMC .src-components-CardWithTitle-__title___34B1O {\n  display: table;\n  font-size: calc(14px + 2px);\n  font-weight: 600;\n  line-height: 1.4;\n  color: rgba(0, 0, 0, 0.85);\n  margin-bottom: 0.5em;\n  margin: 0;\n}\n.src-components-CardWithTitle-__cardWithTitle___1BUMC .src-components-CardWithTitle-__title___34B1O .src-components-CardWithTitle-__iconFix___2cQFG {\n  font-weight: normal;\n  vertical-align: middle;\n  margin-right: 8px;\n  font-size: 1.2em;\n}\n.src-components-CardWithTitle-__cardWithTitle___1BUMC .src-components-CardWithTitle-__title___34B1O span {\n  vertical-align: middle;\n}\n";
var style$4 = {"cardWithTitle":"src-components-CardWithTitle-__cardWithTitle___1BUMC","title":"src-components-CardWithTitle-__title___34B1O","iconFix":"src-components-CardWithTitle-__iconFix___2cQFG"};
styleInject(css$4);

var index$3 = (function (_ref) {
  var icon = _ref.icon,
      title = _ref.title,
      className = _ref.className,
      children = _ref.children,
      gap = _ref.gap;
  return React.createElement(_Card, {
    className: classnames(style$4.cardWithTitle, className),
    style: gap && {
      marginTop: "24px"
    },
    title: typeof title === "string" ? React.createElement("p", {
      className: style$4.title
    }, React.createElement("i", {
      className: classnames("iconfont ".concat(icon), style$4.iconFix)
    }), React.createElement("span", null, title)) : title
  }, children);
});

export { index as BasicLayout, index$3 as CardWithTitle, index$1 as SystemsEntry, index$2 as UserMenu };
