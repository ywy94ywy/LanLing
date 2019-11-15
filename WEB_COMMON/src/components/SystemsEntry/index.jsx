import { Icon } from 'antd';
import router from 'umi/router';
import style from './style.less';

export default ({ data }) => (
  <div className={style.systems}>
    <span className={style.tree}>tree</span>
    {data.map((v, i) => (
      <span
        key={i}
        className={style.system}
        onClick={() => {
          router.push(v.url);
        }}
      >
        <Icon type={v.icon} />
        <span>{v.title}</span>
      </span>
    ))}
  </div>
);
