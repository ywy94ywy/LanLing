import { useRef, useEffect, useState } from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { Button, Row, Col, Card } from 'antd';
import { CardWithTitle } from 'lanling';
import classnames from 'classnames';
import style from './style.less';
import avatar from './imgs/avatar.png';
import ConfigForm from './ConfigForm';
import personForm from './personForm';
import managerForm from './managerForm';

export default () => {
  const personFormRef = useRef();
  const managerFormRef = useRef();
  const [formData, setFormData] = useState({});

  useEffect(() => {
    const a = setTimeout(() => {
      setFormData({ userName: '娃哈哈', userSex: '1' });
    }, 1000);
    return () => clearTimeout(a);
  }, []);

  const submit = () => {
    const { validateFields } = personFormRef.current;

    validateFields((err, value) => {
      console.log(err, value);
    });
  };

  return (
    <>
      <PageHeaderWrapper
        title={false}
        content={<UserHeader></UserHeader>}
        className={classnames('breadcrumb-line', style.bottomFix)}
      >
        <div className={style.userInfo} onClick={()=>{
          console.log(2)
        }}>
          <CardWithTitle icon="iconyonghuxinxiguanli" title="个人基本信息">
            <ConfigForm
              width={1000}
              gutter={70}
              column={3}
              data={personForm(formData)}
              ref={personFormRef}
            ></ConfigForm>
          </CardWithTitle>
          <CardWithTitle icon="iconyonghuzhanghaoguanli" title="负责人信息" gap>
            <ConfigForm
              width={1000}
              gutter={70}
              column={3}
              data={managerForm()}
              ref={managerFormRef}
            ></ConfigForm>
          </CardWithTitle>
          {/* todo position */}
          <Card className={style.save}>
            <Button
              type="primary"
              className={style.btn}
              onClick={() => {
                submit();
              }}
            >
              保存
            </Button>
          </Card>
        </div>
      </PageHeaderWrapper>
    </>
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
