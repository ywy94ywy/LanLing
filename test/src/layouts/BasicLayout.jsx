import { BasicLayout, SystemsEntry, UserMenu } from '@/public/src';
import { connect } from 'dva';
import logo from '@/assets/logo.png';

const systems = [
  {
    icon: 'build',
    title: '视频监控系统',
    url: '/',
  },
  {
    icon: 'skin',
    title: '质量安全监管系统',
    url: '/',
  },
  {
    icon: 'smile',
    title: '设备管理系统',
    url: '/',
  },
  {
    icon: 'skin',
    title: '物料管理系统',
    url: '/',
  },
  {
    icon: 'skin',
    title: '环境管理系统',
    url: '/',
  },
];

export default props => {
  const { children } = props;
  const user = JSON.parse(sessionStorage.getItem('user'));

  return (
    <BasicLayout
      logo={logo}
      title="劳务实名管理系统"
      leftContent={<SystemsEntry data={systems}></SystemsEntry>}
      rightContent={<UserMenu user={user}></UserMenu>}
      {...props}
    >
      {children}
    </BasicLayout>
  );
};
