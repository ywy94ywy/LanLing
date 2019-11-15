/**
 * @module 切换主题
 */
import style from "./style.less";
import { Popover } from "antd";

const Content = ({ data, setBackground }) => (
  <div className={style.swicthTheme}>
    {data.map((type, index) => {
      return (
        <div className={style.section} key={index}>
          <p className={style.title}>{type.title}</p>
          <div className={style.bgs}>
            {type.background.map((bg, i) => (
              <span
                key={i}
                className={
                  type.title !== "建筑系列" ? style.circle : style.rectangle
                }
                onClick={() => {
                  setBackground(bg);
                }}
                style={{ background: bg, backgroundSize: "cover" }}
              ></span>
            ))}
          </div>
        </div>
      );
    })}
  </div>
);

export default ({ data, setBackground, children }) => {
  return (
    <Popover
      content={<Content data={data} setBackground={setBackground} />}
      placement="bottomLeft"
      trigger="click"
    >
      {children}
    </Popover>
  );
};
