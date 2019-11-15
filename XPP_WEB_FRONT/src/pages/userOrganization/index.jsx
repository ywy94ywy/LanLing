import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { Button, Row, Col, Card } from 'antd';
import { CardWithTitle } from 'lanling';
import style from './style.less';
import { useEffect } from 'react';
export default () => {
  useEffect(() => {}, []);
  return (
    <PageHeaderWrapper title={false}>
      <div className={style.userOrganization}>
        <CardWithTitle icon="iconyonghuxinxiguanli" title="搜索组织名称"></CardWithTitle>
        <CardWithTitle icon="iconyonghuxinxiguanli" title="已关联组织" gap></CardWithTitle>
      </div>
    </PageHeaderWrapper>
  );
};
