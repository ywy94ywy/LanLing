import { Popover } from 'antd';
import style from './index.less';
import { Menu } from 'antd';

export default ({ user = null, logout, systems = [] }) => {
  return user ? (
    <span className={style.userMenu}>
      <Popover
        overlayClassName={style.userMenu}
        content={
          <Menu>
            {systems.map((v, i) => {
              return <Menu.Item key={i}>{v.title}</Menu.Item>;
            })}
            <Menu.Item>
              {/* <a
                onClick={() => {
                  logout && logout();
                }}
              > */}
              退出系统
            </Menu.Item>
          </Menu>
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
