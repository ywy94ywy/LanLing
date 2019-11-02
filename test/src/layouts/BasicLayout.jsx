import ProLayout, { getMenuData } from '@ant-design/pro-layout';
import React, { useEffect, useState } from 'react';
import Link from 'umi/link';
import { connect } from 'dva';
import RightContent from '@/components/GlobalHeader/RightContent';
import logo from '../assets/logo.svg';

// 获取atnd-pro扁平化菜单keys
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

const BasicLayout = props => {
  const {
    dispatch,
    children,
    route: { title },
  } = props;
  const { menuData } = getMenuData(props.route.routes);
  const [openKeys, setOpenKeys] = useState(getFlatMenuKeys(menuData));

  useEffect(() => {
    if (dispatch) {
      dispatch({
        type: 'user/fetchCurrent',
      });
      dispatch({
        type: 'settings/getSetting',
      });
    }
  }, []);

  return (
    <ProLayout
      logo={logo}
      title={title}
      headerRender={() => (
        <>
          主题
          <RightContent />
        </>
      )}
      menuItemRender={(menuItemProps, defaultDom) => {
        if (menuItemProps.isUrl) {
          return defaultDom;
        }
        return (
          <Link
            to={menuItemProps.path}
          >
            {defaultDom}
          </Link>
        );
      }}
      menuProps={{
        openKeys,
        onOpenChange(e) {
          setOpenKeys(e);
        },
      }}
      breadcrumbRender={(routers = []) => [...routers]}
      itemRender={route => <span>{route.breadcrumbName}</span>}
      disableMobile
      {...props}
    >
      {children}
    </ProLayout>
  );
};

export default connect(({ settings }) => ({
  settings,
}))(BasicLayout);
