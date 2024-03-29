import { useEffect } from 'react';
import { connect } from 'dva';
import { BasicLayout, UserMenu } from 'lanling';
import logo from '@/assets/logo.png';

export default connect(({ user }) => user)(({ children, dispatch, currentUser, ...rest }) => {
  const systems = [{ title: '前往通行证后台', url: 'http://192.168.1.102:8080' }];

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
      leftContent={<div></div>}
      rightContent={<UserMenu user={currentUser} logout={logout} systems={systems}></UserMenu>}
      // todo 无面包屑
      {...rest}
    >
      {children}
    </BasicLayout>
  );
});
