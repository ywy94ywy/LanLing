import { Button, Result } from 'antd';
import React from 'react';
import router from 'umi/router'; 

const NoFoundPage = () => (
  <Result
    status="404"
    title="404"
    subTitle="抱歉，您访问的网址不存在"
    extra={
      <Button type="primary" onClick={() => router.push('/')}>
        回到首页
      </Button>
    }
  ></Result>
);

export default NoFoundPage;
