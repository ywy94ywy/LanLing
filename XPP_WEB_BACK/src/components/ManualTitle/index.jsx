import style from './style.less';

export default ({ title, subtitle }) => {
  return (
    <header className={style.title}>
      <h2 className={style.withLine}>{title}</h2>
      <span className="tmd2">{subtitle}</span>
    </header>
  );
};
