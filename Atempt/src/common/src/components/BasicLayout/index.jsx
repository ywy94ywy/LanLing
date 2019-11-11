import ProLayout, { getMenuData } from '@ant-design/pro-layout';
import React, { useState } from 'react';
import Link from 'umi/link';
import style from './index.less';
import SwitchTheme from '../SwitchTheme';
import { backgroundData } from '../../../config/setting';
import { Layout, Menu } from 'antd';

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

export default ({ children, leftContent = null, rightContent = null, theme = null, ...rest }) => {
  const { menuData } = getMenuData(rest.route ? rest.route.routes : []);
  const [openKeys, setOpenKeys] = useState(getFlatMenuKeys(menuData)); // 展开所有菜单
  const [bg, setBg] = useState(window.localStorage.theme || '#1c1f87'); // 设置背景
  const Left = () => leftContent;
  const Right = () => rightContent;

  const setBackground = bg => {
    setBg(bg);
    window.localStorage.theme = bg;
  };

  return (
    <div className={style.wrapper} style={{ background: bg }}>
      <ProLayout
        headerRender={() => (
          <div className={style.header}>
            {!theme && (
              <div className={style.headerTheme}>
                <SwitchTheme data={backgroundData} setBackground={setBackground}>
                  <span className={style.themeBtn}>
                    <i className="iconfont iconskin"></i>
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
        siderWidth={230}
        // 左侧渲染
        menuRender={props => {
          return <MySider {...props} menuData={menuData}></MySider>;
        }}
        // 菜单Item渲染
        // menuItemRender={(menuItemProps, defaultDom) => {
        //   if (menuItemProps.isUrl) {
        //     return defaultDom;
        //   }
        //   return <Link to={menuItemProps.path}>{defaultDom}</Link>;
        // }}

        // 控制菜单默认展开
        menuProps={{
          openKeys,
          onOpenChange(e) {
            setOpenKeys(e);
          },
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
const MySider = props => {
  const {
    siderWidth,
    collapsed,
    menuProps,
    menuData,
    logo,
    title,
    location: { pathname = '/' },
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
        {title === 'Ant Design Pro' ? (
          <a href="/" style={{ marginLeft: '20px' }}>
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

const renderMenu = (menuData = []) => {
  return menuData.map(item => {
    if (item.children) {
      return (
        <Menu.SubMenu
          title={
            <>
              <i className={'iconfont ' + item.iconfont} style={{ marginRight: '10px' }}></i>
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
          <i className={'iconfont ' + item.iconfont} style={{ marginRight: '10px' }}></i>
          {item.name}
        </Link>
      </Menu.Item>
    );
  });
};
