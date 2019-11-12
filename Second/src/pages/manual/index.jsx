import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { Card, Row, Col } from 'antd';
import Title from '@/components/Title';
import style from './style.less';
import step1 from './imgs/step1.png';
import step2 from './imgs/step2.png';
import step3 from './imgs/step3.png';
import step4 from './imgs/step4.png';
import step5 from './imgs/step5.png';
import manual1 from './imgs/manual1.png';
import manual2 from './imgs/manual2.png';
import manual3 from './imgs/manual3.png';
import manual4 from './imgs/manual4.png';
import manual5 from './imgs/manual5.png';

const subtitle =
  '通行证管理系统(XPP),通过单点登录技术(SSO),完成在云平台子系统间自由穿梭,仅需一次实名认证便可快捷处理多个系统的身份验证及收藏中心、消息中心、日志中心等公共服务的全方位提供!使用完善的系统执照分配机制完成对用户权限的安全授权。点击以下图标，开始您的奇妙之旅吧......';

const steps = [
  {
    title: '用户注册',
    description: '点击登录界面的注册帐号，进入注册页面填写注册消息，完成注册！',
    step: step1,
    manual: manual1,
  },
  {
    title: '首次登陆初始化',
    description: '通过选择帐号类型，确定你的帐号类型填写保密问题为您的帐号安全保驾护航！',
    step: step2,
    manual: manual2,
  },
  {
    title: '实名认证',
    description:
      '企业通过填写营业执照信息,完成实名认证新员工需要等待社保记录完成同步后,方可完成认证！',
    step: step3,
    manual: manual3,
  },
  {
    title: '领取用户执照',
    description: '申请进入子系统的用户执照，如果你是该单位社保已缴纳老员工,审核会秒批。',
    step: step4,
    manual: manual4,
  },
  {
    title: '实名认证',
    description: '申请进入子系统的用户执照，如果你是该单位社保已缴纳老员工,审核会秒批。',
    step: step5,
    manual: manual5,
  },
];

export default () => {
  return (
    <PageHeaderWrapper title={false}>
      <Card>
        <div className={style.manual}>
          <Title title="操作指南"></Title>
          <h3>{subtitle}</h3>
          {steps.map((item, i) => {
            return (
              <Row type="flex" justify="space-between" key={i} className={style.stepWrapper}>
                <Col order={i % 2 !== 0 ? 3 : 1} className={style.col1}>
                  <h2>
                    <img src={item.step} className={style.step}></img>
                    <span>{item.title}</span>
                  </h2>
                  <h3>{item.description}</h3>
                </Col>
                <Col order={2} className={style.col2}>
                  <img src={item.manual} className={style.manualPic}></img>
                </Col>
              </Row>
            );
          })}
        </div>
      </Card>
    </PageHeaderWrapper>
  );
};
