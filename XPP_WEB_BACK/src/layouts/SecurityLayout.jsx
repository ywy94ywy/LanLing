import React from 'react';
import { getCookie } from '@/utils/utils';

export default ({ children }) => {
  const token = getCookie('sessionid');

  if (token) {
    return <>{children}</>;
  } else {
    window.location.href = 'http://192.168.1.102:8081/';
    return null;
  }
};
