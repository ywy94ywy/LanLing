import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { Row, Col, Table, Button, Select } from 'antd';
import { CardWithTitle } from 'lanling';
import classnames from 'classnames';
import style from './style.less';

const columns = [
  {
    title: '事务编号',
    dataIndex: 'key',
  },
  {
    title: '事务类型',
    dataIndex: 'type',
  },
  {
    title: '事务时间',
    dataIndex: 'address',
  },
  {
    title: '事务状态',
    dataIndex: 'name',
  },
  {
    title: '事务附注',
    dataIndex: 'age',
  },
];

export default () => {
  return (
    <PageHeaderWrapper title={false}>
      <div className={style.userAuth}>
        <CardWithTitle icon="iconskin" title="个人实名信息管理" className={style.wrapper1}>
          <div className={style.title}>
            <Row type="flex" justify="space-between">
              <Col>
                <span style={{ marginRight: '10px' }}>证件类型</span>
                <Select defaultValue="1">
                  <Select.Option value="1">居民身份证</Select.Option>
                </Select>
              </Col>
              <Col>
                <Button type="primary">实名认证提交</Button>
              </Col>
            </Row>
          </div>
          <Row type="flex">
            <Col className="gap-side"></Col>
            <Col>
              <div className={classnames(style.identity, style.front)}></div>
            </Col>
            <Col className="gap-middle"></Col>
            <Col>
              <div className={classnames(style.identity, style.back)}></div>
            </Col>
            <Col className="gap-side"></Col>
          </Row>
        </CardWithTitle>
        <CardWithTitle icon="iconskin" title="个人实名信息管理" gap>
          <Table columns={columns} dataSource={dataSource}></Table>
        </CardWithTitle>
      </div>
    </PageHeaderWrapper>
  );
};

const dataSource = [
  {
    key: '1',
    name: '胡彦斌',
    age: 32,
    address: '西湖区湖底公园1号',
    type: '1',
  },
  {
    key: '2',
    name: '胡彦祖',
    age: 42,
    address: '西湖区湖底公园1号',
    type: '2',
  },
  {
    key: '3',
    name: '胡彦祖',
    age: 42,
    address: '西湖区湖底公园1号',
    type: '2',
  },
  {
    key: '4',
    name: '胡彦祖',
    age: 42,
    address: '西湖区湖底公园1号',
    type: '2',
  },
];
