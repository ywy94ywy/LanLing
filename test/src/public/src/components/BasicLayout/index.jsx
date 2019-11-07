import ProLayout, { getMenuData } from '@ant-design/pro-layout';
import React, { useState } from 'react';
import { Icon } from 'antd';
import Link from 'umi/link';
import style from './index.less';
import SwitchTheme from '../SwitchTheme';
import { backgroundData } from '../../../config/setting';

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

export default ({ children, leftContent = null, rightContent = null, ...rest }) => {
  const { menuData } = getMenuData(rest.route.routes);
  const [openKeys, setOpenKeys] = useState(getFlatMenuKeys(menuData));
  const [bg, setBg] = useState(window.localStorage.theme || '#1c1f87');
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
            <div className={style.headerTheme}>
              <SwitchTheme data={backgroundData} setBackground={setBackground}>
                <span className={style.themeBtn}>
                  <Icon type="skin" />
                  主题设置
                </span>
              </SwitchTheme>
            </div>
            <div className={style.headerContent}>
              <Left></Left>
            </div>
            <div className={style.headerRight}>
              <Right></Right>
            </div>
          </div>
        )}
        siderWidth={250}
        // 菜单渲染
        menuItemRender={(menuItemProps, defaultDom) => {
          if (menuItemProps.isUrl) {
            return defaultDom;
          }
          return <Link to={menuItemProps.path}>{defaultDom}</Link>;
        }}
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
