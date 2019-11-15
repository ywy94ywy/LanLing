import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { Button, Row, Col } from 'antd';
import { CardWithTitle } from 'lanling';
import style from './style.less';
import avatar from './imgs/avatar.png';

export default () => {
  return (
    <PageHeaderWrapper title={false} content={<UserHeader></UserHeader>} className="breadcrum-line">
      <div className={style.userInfo}>
        <CardWithTitle icon="iconyonghuxinxiguanli" title="个人基本信息">
          2
        </CardWithTitle>
        <CardWithTitle icon="iconyonghuzhanghaoguanli" title="负责人信息" gap>
          1
        </CardWithTitle>
      </div>
    </PageHeaderWrapper>
  );
};

const UserHeader = () => {
  return (
    <Row type="flex" className={style.userHeader}>
      <Col className={style.headLeft}>
        <p className="tmd1">数字帐号：1234566</p>
        <p className="tmd1">手机帐号：13812345678</p>
        <p className="tmd1">昵称帐号：江苏南通二建集团有限公司</p>
        <p className="tmd1">邮箱帐号：123@nt2j.cn</p>
      </Col>
      <Col className={style.headRight}>
        <div className={style.upload}>
          <div className={style.imgClip}>
            <img src={avatar} alt="avatar"></img>
          </div>
          <Button icon="upload">更换头像</Button>
        </div>
      </Col>
    </Row>
  );
};
