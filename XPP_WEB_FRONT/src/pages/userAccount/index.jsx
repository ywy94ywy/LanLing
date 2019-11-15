import { useState } from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { Card, Row, Col, Menu, Modal, Alert, Form, Input } from 'antd';
import style from './style.less';

const menuList = ['用户密码管理', '用户密保管理'];

export default () => {
  const [page, setPage] = useState(0);

  return (
    <PageHeaderWrapper title={false}>
      <div className={style.userAccount}>
        <Card className={style.card}>
          <Row type="flex" className={style.row}>
            <Col className={style.left}>
              <Menu mode="inline" defaultSelectedKeys={['0']}>
                {menuList.map((v, i) => {
                  return (
                    <Menu.Item
                      key={i}
                      onClick={() => {
                        setPage(i);
                      }}
                    >
                      {v}
                    </Menu.Item>
                  );
                })}
              </Menu>
            </Col>
            <Col className={style.right}>
              <Pages page={page}></Pages>
            </Col>
          </Row>
        </Card>
      </div>
    </PageHeaderWrapper>
  );
};

const Pages = ({ page = 0 }) => {
  switch (page) {
    case 0:
      const a = 1;
      const b = 2;
      return (
        <PageWrapper page={page}>
          <ManageCard
            title="用户登录密码管理"
            subtitle="当前密码强度："
            strength
            option="修改"
            modalTitle="用户登录密码修改"
            modalContent={
              <Form>
                <Form.Item>
                  <Input></Input>
                </Form.Item>
              </Form>
            }
            onOk={() => {
              console.log(a);
            }}
          ></ManageCard>
          <ManageCard
            title="用户安全密码管理"
            subtitle="安全密码限定6位字符"
            option="修改"
            modalTitle="用户登录密码修改"
            modalContent={<div>2222222</div>}
            onOk={() => {
              console.log(b);
            }}
          ></ManageCard>
        </PageWrapper>
      );
    case 1:
      return (
        <PageWrapper page={page}>
          <ManageCard
            title="用户密保问题管理"
            subtitle="未设置密保问题，密保问题可有效保护帐户安全"
            option="设置"
          ></ManageCard>
          <ManageCard
            title="用户密保手机管理"
            subtitle="已绑定手机：138****8293"
            option="修改"
          ></ManageCard>
          <ManageCard title="用户密保邮箱管理" subtitle="未绑定邮箱" option="绑定"></ManageCard>
        </PageWrapper>
      );
    default:
      return null;
  }
};

const PageWrapper = ({ children, page }) => {
  return (
    <div className={style.management}>
      <h3>{menuList[page]}</h3>
      {children}
    </div>
  );
};

const ManageCard = ({ title, subtitle, option, strength, modalTitle, modalContent, onOk }) => {
  const [modal, setModal] = useState(false);
  return (
    <div className={style.manageCard}>
      <h5>{title}</h5>
      {subtitle && (
        <Row type="flex" justify="space-between">
          <Col>
            <span className="tba2">
              {subtitle} <span className={style.strong}>{strength && '强'}</span>
            </span>
          </Col>
          <Col>
            <a
              href="#"
              onClick={e => {
                e.preventDefault();
                setModal(true);
              }}
            >
              {option}
            </a>
          </Col>
        </Row>
      )}
      <MyModal
        title={modalTitle}
        visible={modal}
        onOk={onOk}
        onCancel={() => {
          setModal(false);
        }}
      >
        <Alert message="Error" type="error" showIcon closable></Alert>
        {modalContent}
      </MyModal>
    </div>
  );
};

// 所有modal封装
const MyModal = ({ children, ...rest }) => {
  return (
    <Modal {...rest} cancelText="取消" okText="确定">
      {children}
    </Modal>
  );
};
