import { Popover, Avatar, Menu } from "antd";
import router from "umi/router";
import style from "./style.less";

export default ({ user = null, logout = null, systems = [] }) => {
  return user ? (
    <span className={style.userMenu}>
      <Popover
        overlayClassName={style.userMenu}
        content={
          <Menu>
            {systems.map((v, i) => {
              return (
                <Menu.Item
                  key={i}
                  onClick={() => {
                    console.log( v.url);
                    window.location.href = v.url || "/";
                  }}
                >
                  {v.title}
                </Menu.Item>
              );
            })}
            <Menu.Item
              onClick={() => {
                logout && logout();
              }}
            >
              退出系统
            </Menu.Item>
          </Menu>
        }
        placement="bottomRight"
        trigger="click"
      >
        <Avatar size={25} src={user.avatar} icon="user"></Avatar>
        <span className={style.user}>{user.name}</span>
      </Popover>
    </span>
  ) : null;
};
