import React from 'react';
import { ConfigProvider } from 'antd';
import { Redirect } from 'umi';
import { getCookie } from '@/utils/utils';

export default ({ children }) => {
  const token = getCookie('sessionid');

  if (token) {
    return (
      // <ConfigProvider
      //   getPopupContainer={trigger => trigger && trigger.parentNode}
      // >
      children
      // </ConfigProvider>
    );
  } else {
    return <Redirect to={`/account/login`}></Redirect>;
  }
};
