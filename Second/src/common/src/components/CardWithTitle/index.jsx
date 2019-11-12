import { Card } from 'antd';
import classnames from 'classnames';
import style from './style.less';

export default ({ icon, title, className, children, gap }) => {
  return (
    <Card
      className={classnames(style.cardWithTitle, className)}
      style={gap && { marginTop: '20px' }}
      title={
        <h3>
          <strong>
            <i className={`iconfont ${icon}`}></i>
            <span className={style.title}>{title}</span>
          </strong>
        </h3>
      }
    >
      {children}
    </Card>
  );
};
