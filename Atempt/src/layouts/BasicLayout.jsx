import { BasicLayout, UserMenu } from '@/common/src';
import { getUser } from '@/utils/utils';
import logo from '@/assets/logo.png';
import { connect } from 'dva';

export default connect()(({ children, dispatch, ...rest }) => {
  const user = getUser();
  const systems = [{ title: '前往通行证后台', url: '/' }];

  const logout = () => {
    dispatch({
      type: 'login/logout',
    });
  };

  return (
    <BasicLayout
      logo={logo}
      leftContent={<div>天气</div>}
      rightContent={<UserMenu user={user} logout={logout} systems={systems}></UserMenu>}
      {...rest}
    >
      {children}
    </BasicLayout>
  );
});
