import { Card, Col, Row } from 'antd';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import Title from '@/components/Title';
import style from './style.less';
import pic1 from './imgs/1.png';
import pic2 from './imgs/2.png';
import pic3 from './imgs/3.png';
import pic4 from './imgs/4.png';
import guide1 from './imgs/guide1.png';
import guide2 from './imgs/guide2.png';
import guide3 from './imgs/guide3.png';

const data = [
  {
    title: '我们的服务',
    pic: pic1,
    content:
      '跨子系统（域）帐号身份信息及权限管理系统。通行证后台可对用户帐号进行身份信息管理、密码管理、权限设置等操作。',
  },
  {
    title: '知识库管理系统',
    pic: pic3,
    content:
      '建筑项目技术文档管理及分享平台。公开和私密文档资料（文字资料及多媒体文件）可以在知识库系统中被查询、浏览、分享及下载、直属单位的上级公司可查询下属单位的项目文档并作数据分析。',
  },
  {
    title: '劳务实名制管理系统',
    pic: pic2,
    content:
      '建筑工人在建筑工地的劳务及作业管理系统。包含劳务工人、班组、劳务队的档案管理，工地现场出入场考勤、统计、工种、工资结算等管理，扬尘、噪音、塔吊、视频监控等监控与预警管理，直属单位的上级公司可监控下属单位的项目资料。',
  },
  {
    title: '工作协同管理系统',
    pic: pic4,
    content:
      '建筑工人在工地的作业安排及劳务计量系统。包含劳务作业计划、工作分配、作业资料查询、作业计量确认和验收。',
  },
];

export default () => {
  return (
    <PageHeaderWrapper title={false}>
      <Card className={style.homepage}>
        <Title title="我们的服务" subtitle="30秒了解子系统功能"></Title>
        <Row type="flex" className={style.servers}>
          {data.slice(0, 2).map(item => (
            <Col span={12} key={item.title}>
              <Servers {...item} />
            </Col>
          ))}
          {data.slice(2).map(item => (
            <Col span={12} key={item.title}>
              <Servers {...item} />
            </Col>
          ))}
        </Row>
        <Title title="新手指南" subtitle="帮助您快速了解操作过程"></Title>
        <div className={style.intros}>
          <img src={guide1} alt="" />
          <img src={guide2} alt="" />
          <img src={guide3} alt="" />
        </div>
      </Card>
    </PageHeaderWrapper>
  );
};

const Servers = ({ pic, title, content, left }) => {
  return (
    <div className={style.server}>
      <img src={pic} alt="picture" />
      <div className={style.content}>
        <h2>{title}</h2>
        <h4>{content}</h4>
      </div>
    </div>
  );
};
