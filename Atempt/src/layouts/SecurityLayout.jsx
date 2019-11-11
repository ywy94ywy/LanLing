import React from 'react';
import { Redirect } from 'umi';
import { getCookie } from '@/utils/utils';

export default ({ children }) => {
  const token = getCookie('sessionid');

  if (token) {
    return <>{children}</>;
  } else {
    return <Redirect to={`/account/login`}></Redirect>;
  }
};
