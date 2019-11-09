import { BasicLayout, UserMenu } from '@/common/src';
import { getUser } from '@/utils/utils';

import logo from '@/assets/logo.svg';
import { connect } from 'dva';

export default connect()(({ children, dispatch, ...rest }) => {
  const user = getUser();
  const systems = [
    { title: '前台', url: '/' },
    { title: '后台', url: '/' },
  ];
  const logout = () => {
    dispatch({
      type: 'login/logout',
    });
  };
  return (
    <BasicLayout
      logo={logo}
      title="通行证前台"
      leftContent={<div>天气</div>}
      rightContent={<UserMenu user={user} logout={logout} systems={systems}></UserMenu>}
      {...rest}
    >
      {children}
    </BasicLayout>
  );
});
