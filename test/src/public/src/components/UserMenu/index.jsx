import { Popover } from 'antd';
import style from './index.less';
import logo from '@/assets/logo.png';

export default () => {
  const userName = '贾亚军';
  return (
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
          <img src={logo} alt="" />
        </span>
        <span className={style.user}>{userName}</span>
      </Popover>
    </span>
  );
};
