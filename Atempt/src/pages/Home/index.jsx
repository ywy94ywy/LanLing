import { Avatar, Card, Col, Skeleton, Row, Statistic } from 'antd';
import { useEffect } from 'react';
import Link from 'umi/link';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { connect } from 'dva';
import EditableLinkGroup from './components/EditableLinkGroup';
import styles from './style.less';

const links = [
  {
    title: '操作一',
    href: '',
  },
  {
    title: '操作二',
    href: '',
  },
  {
    title: '操作三',
    href: '',
  },
  {
    title: '操作四',
    href: '',
  },
  {
    title: '操作五',
    href: '',
  },
  {
    title: '操作六',
    href: '',
  },
];

const PageHeaderContent = ({ currentUser }) => {
  const loading = currentUser && Object.keys(currentUser).length;

  if (!loading) {
    return (
      <Skeleton
        avatar
        paragraph={{
          rows: 1,
        }}
        active
      />
    );
  }

  return (
    <div className={styles.pageHeaderContent}>
      <div className={styles.avatar}>
        <Avatar size="large" src={currentUser.avatar} />
      </div>
      <div className={styles.content}>
        <div className={styles.contentTitle}>{currentUser.name}</div>
        <div>{currentUser.title}</div>
      </div>
    </div>
  );
};

const ExtraContent = () => (
  <div className={styles.extraContent}>
    <div className={styles.statItem}>
      <Statistic title="工程项目" value={'吾悦广场1～7号楼住宅楼项目'} />
    </div>
  </div>
);

export default connect(() =>
  // { mainAndHome: { currentUser }, loading }
  ({
    // currentUser,
    // currentUserLoading: loading.effects['mainAndHome/fetchUserCurrent'],
  }),
)(({ dispatch }) => {
  useEffect(() => {
    dispatch({
      type: 'mainAndHome/init',
    });
    return () => {
      dispatch({
        type: 'mainAndHome/clear',
      });
    };
  }, []);

  return (
    <PageHeaderWrapper
      title={false}
      content={<PageHeaderContent />}
      extraContent={<ExtraContent />}
    >
      <Row gutter={24}>
        <Col xl={16} lg={24} md={24} sm={24} xs={24}>
          <Card
            className={styles.projectList}
            style={{
              marginBottom: 24,
            }}
            title="项目概况"
            bordered={false}
            extra={<Link to="/">查看更多</Link>}
          >
            <div>123</div>
          </Card>
          <Card
            bordered={false}
            extra={<Link to="/">查看更多</Link>}
            className={styles.activeCard}
            title="项目人数统计"
          >
            <div>123</div>
          </Card>
        </Col>
        <Col xl={8} lg={24} md={24} sm={24} xs={24}>
          <Card
            style={{
              marginBottom: 24,
            }}
            title="快捷桌面"
            bordered={false}
            bodyStyle={{
              padding: 0,
            }}
          >
            <EditableLinkGroup onAdd={() => {}} links={links} linkElement={Link} />
          </Card>
          <Card
            style={{
              marginBottom: 24,
            }}
            bordered={false}
            title="现场工人岗位分布"
          >
            <div className={styles.chart}>123</div>
          </Card>
        </Col>
      </Row>
    </PageHeaderWrapper>
  );
});
