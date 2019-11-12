import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { Row, Col, Table } from 'antd';
import { CardWithTitle } from '@/common/src';
import classnames from 'classnames';
import style from './style.less';

const columns = [
  {
    title: '事务编号',
    dataIndex: '1',
  },
  {
    title: '事务类型',
    dataIndex: '2',
  },
  {
    title: '事务时间',
    dataIndex: '3',
  },
  {
    title: '事务状态',
    dataIndex: '4',
  },
  {
    title: '事务附注',
    dataIndex: '5',
  },
];

export default () => {
  return (
    <PageHeaderWrapper title={false}>
      <div className={style.userAuth}>
        <CardWithTitle icon="iconskin" title="个人实名信息管理">
          <Row type="flex">
            <Col>
              <div className={classnames(style.identity, style.front)}></div>
            </Col>
            <Col>
              <div className={classnames(style.identity, style.back)}></div>
            </Col>
          </Row>
        </CardWithTitle>
        <CardWithTitle icon="iconskin" title="个人实名信息管理" gap>
          <Table columns={columns}></Table>
        </CardWithTitle>
      </div>
    </PageHeaderWrapper>
  );
};
