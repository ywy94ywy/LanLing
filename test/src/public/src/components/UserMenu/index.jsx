import { Popover } from 'antd';
import style from './index.less';
import logo from '@/assets/logo.png';

export default ({ user }) => {
  return user ? (
    <span className={style.userMenu}>
      <Popover
        content={
          <div>
            <p>1st menu item</p>
            <p>2nd menu item</p>
            <p>退出系统</p>
          </div>
        }
        placement="bottomRight"
        trigger="click"
      >
        <span className={style.imgClip}>
          <img src={user.avatar} alt="" />
        </span>
        <span className={style.user}>{user.name}</span>
      </Popover>
    </span>
  ) : null;
};
