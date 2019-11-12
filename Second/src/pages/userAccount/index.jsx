import { useState } from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { Card, Row, Col, Menu } from 'antd';
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
      return (
        <div className={style.management}>
          <h2>{menuList[page]}</h2>
          <ManageCard
            title="用户登录密码管理"
            subtitle="当前密码强度："
            strength
            option="修改"
          ></ManageCard>
          <ManageCard
            title="用户安全密码管理"
            subtitle="安全密码限定6位字符"
            option="修改"
          ></ManageCard>
        </div>
      );
    case 1:
      return (
        <div className={style.management}>
          <h2>{menuList[page]}</h2>
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
        </div>
      );
    default:
      return null;
  }
};

const ManageCard = ({ title, subtitle, option, strength }) => {
  return (
    <div className={style.manageCard}>
      <h4>
        <strong>{title}</strong>
      </h4>
      {subtitle && (
        <Row type="flex" justify="space-between">
          <Col>
            <h4>
              {subtitle} <span className={style.strong}>{strength && '强'}</span>
            </h4>
          </Col>
          <Col>
            <a href="#">{option}</a>
          </Col>
        </Row>
      )}
    </div>
  );
};
