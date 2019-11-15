import { Card } from "antd";
import classnames from "classnames";
import style from "./style.less";

export default ({ icon, title, className, children, gap }) => {
  return (
    <Card
      className={classnames(style.cardWithTitle, className)}
      style={gap && { marginTop: "24px" }}
      title={
        typeof title === "string" ? (
          <p className={style.title}>
            <i className={classnames(`iconfont ${icon}`, style.iconFix)}></i>
            <span >{title}</span>
          </p>
        ) : (
          title
        )
      }
    >
      {children}
    </Card>
  );
};
