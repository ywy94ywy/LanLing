import { useEffect } from 'react';
import { connect } from 'dva';
import { BasicLayout, UserMenu } from '@/common/src';
import logo from '@/assets/logo.png';

export default connect(({ user }) => user)(({ children, dispatch, currentUser, ...rest }) => {
  const systems = [{ title: '前往通行证后台', url: '/' }];

  useEffect(() => {
    dispatch({
      type: 'user/fetchUser',
    });
  }, []);

  const logout = () => {
    dispatch({
      type: 'login/logout',
    });
  };

  return (
    <BasicLayout
      logo={logo}
      leftContent={<div>天气</div>}
      rightContent={<UserMenu user={currentUser} logout={logout} systems={systems}></UserMenu>}
      {...rest}
    >
      {children}
    </BasicLayout>
  );
});
