import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { Card, Row, Col } from 'antd';
import { CardWithTitle } from '@/common/src';
import style from './style.less';

export default () => {
  return (
    <PageHeaderWrapper title={false} content={<div>123</div>}>
      <div className={style.userInfo}>
        <CardWithTitle icon="iconskin" title="个人基本信息">
          2
        </CardWithTitle>
        <CardWithTitle icon="iconskin" title="负责人信息" gap>
          1
        </CardWithTitle>
      </div>
    </PageHeaderWrapper>
  );
};
