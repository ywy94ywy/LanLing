import ProLayout from '@ant-design/pro-layout';
import React, { useEffect } from 'react';
import Link from 'umi/link';
import { connect } from 'dva';
import RightContent from '@/components/GlobalHeader/RightContent';
import logo from '../assets/logo.svg';

// const openKeys=["dddd"]

const BasicLayout = props => {
  const { dispatch, children, settings } = props;
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
      headerRender={() => (
        <>
          123
          <RightContent />
        </>
      )}
      menuItemRender={(menuItemProps, defaultDom) => {
        if (menuItemProps.isUrl) {
          return defaultDom;
        }
        return <Link to={menuItemProps.path}>{defaultDom}</Link>;
      }}
      menuProps={{
        // openKeys
        inlineIndent: 241,
        onSelect(a, b, c, d, e, f) {
          console.log(a, b, c, d, e, f);
        },
      }}
      breadcrumbRender={(routers = []) => [...routers]}
      itemRender={route => <span>{route.breadcrumbName}</span>}
      {...props}
    >
      {children}
    </ProLayout>
  );
};

export default connect(({ settings }) => ({
  settings,
}))(BasicLayout);
