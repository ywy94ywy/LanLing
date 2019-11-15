import ProLayout, { getMenuData } from "@ant-design/pro-layout";
import React, { useState } from "react";
import { Layout, Menu, Icon } from "antd";
import Link from "umi/link";
import SwitchTheme from "../SwitchTheme";
import style from "./style.less";

// todo 可能变成异步请求，从组件中传进来
const backgroundData = [
  {
    title: "纯色主题",
    background: ["#1c1f87", "#1c1f87", "#1c1f87", "#1c1f87"]
  },
  {
    title: "渐变主题",
    background: ["#1c1f87", "#1c1f87", "#1c1f87", "#1c1f87"]
  },
  {
    title: "建筑系列",
    background: [
      "url(https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1572513608736&di=c8083949ac0dc971a8bf0556cb93984d&imgtype=0&src=http%3A%2F%2Fphotocdn.sohu.com%2F20110124%2FImg302502020.jpg)",
      "url(https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1572513608736&di=c8083949ac0dc971a8bf0556cb93984d&imgtype=0&src=http%3A%2F%2Fphotocdn.sohu.com%2F20110124%2FImg302502020.jpg)",
      "url(https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1572513608736&di=c8083949ac0dc971a8bf0556cb93984d&imgtype=0&src=http%3A%2F%2Fphotocdn.sohu.com%2F20110124%2FImg302502020.jpg)",
      "url(https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1572513608736&di=c8083949ac0dc971a8bf0556cb93984d&imgtype=0&src=http%3A%2F%2Fphotocdn.sohu.com%2F20110124%2FImg302502020.jpg)"
    ]
  }
];

// 获取antd-pro扁平化菜单keys
const getFlatMenuKeys = menuData => {
  let keys = [];
  menuData.forEach(item => {
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

export default ({
  children,
  leftContent = null,
  rightContent = null,
  theme = true,
  ...rest
}) => {
  const { menuData } = getMenuData(rest.route ? rest.route.routes : []);
  const [openKeys, setOpenKeys] = useState(getFlatMenuKeys(menuData)); // 默认展开所有菜单
  const [bg, setBg] = useState(
    window.localStorage.theme || backgroundData[0].background[0]
  ); // 设置背景
  const Left = () => leftContent;
  const Right = () => rightContent;

  const setBackground = bg => {
    setBg(bg);
    window.localStorage.theme = bg;
  };

  return (
    <div
      className={style.wrapper}
      style={
        bg.startsWith("url") ? { backgroundImage: bg } : { backgroundColor: bg }
      }
    >
      <ProLayout
        headerRender={() => (
          <div className={style.header}>
            {theme && (
              <div className={style.headerTheme}>
                <SwitchTheme
                  data={backgroundData}
                  setBackground={setBackground}
                >
                  <span className={style.themeBtn}>
                    <Icon type="skin"></Icon>
                    主题设置
                  </span>
                </SwitchTheme>
              </div>
            )}
            <div className={style.headerContent}>
              <Left></Left>
            </div>
            <div className={style.headerRight}>
              <Right></Right>
            </div>
          </div>
        )}
        collapsed={false}
        onCollapse={() => false}
        siderWidth={230}
        // 菜单Item渲染
        menuItemRender={(menuItemProps, defaultDom) => {
          if (menuItemProps.isUrl) {
            return defaultDom;
          }
          return (
            <Link to={menuItemProps.path}>
              <i
                className={`iconfont ${menuItemProps.iconfont}`}
                style={{ marginRight: "10px" }}
              ></i>
              {defaultDom}
            </Link>
          );
        }}
        // 控制菜单默认展开
        menuProps={{
          openKeys,
          onOpenChange(e) {
            setOpenKeys(e);
          }
        }}
        // 面包屑数据渲染
        breadcrumbRender={(routers = []) => [...routers]}
        // 面包屑展示
        itemRender={route => <span>{route.breadcrumbName}</span>}
        disableMobile
        {...rest}
      >
        {children}
      </ProLayout>
    </div>
  );
};

// 自定义菜单（因pro_layout在使用自定义iconfont有问题，简单实现了下）
// antpro bug已修复，暂弃用
const MySider = props => {
  const {
    siderWidth,
    collapsed,
    menuProps,
    menuData,
    logo,
    title,
    location: { pathname = "/" }
  } = props;

  return (
    <Layout.Sider
      collapsible
      trigger={null}
      collapsed={collapsed}
      onCollapse={collapse => {
        if (onCollapse) {
          onCollapse(collapse);
        }
      }}
      width={siderWidth}
    >
      <div className="ant-pro-sider-menu-logo" id="logo">
        {title === "Ant Design Pro" ? (
          <a href="/" style={{ marginLeft: "20px" }}>
            {logo && (
              // <h1>
              <img src={logo} alt="logo" />
              // </h1>
            )}
          </a>
        ) : (
          <a href="/">
            {logo && <img src={logo} alt="logo" />}
            {title && <h1>{title}</h1>}
          </a>
        )}
      </div>
      <Menu mode="inline" {...menuProps} theme="dark" selectedKeys={[pathname]}>
        {renderMenu(menuData)}
      </Menu>
    </Layout.Sider>
  );
};
// antpro bug已修复，暂弃用
const renderMenu = (menuData = []) => {
  return menuData.map(item => {
    if (item.children) {
      return (
        <Menu.SubMenu
          title={
            <>
              <i
                className={"iconfont " + item.iconfont}
                style={{ marginRight: "10px" }}
              ></i>
              {item.name}
            </>
          }
          key={item.path}
        >
          {renderMenu(item.children)}
        </Menu.SubMenu>
      );
    }
    return (
      <Menu.Item key={item.path}>
        <Link to={item.path}>
          <i
            className={"iconfont " + item.iconfont}
            style={{ marginRight: "10px" }}
          ></i>
          {item.name}
        </Link>
      </Menu.Item>
    );
  });
};
