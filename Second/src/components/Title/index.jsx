import style from './index.less';

export default ({ title, subtitle }) => {
  return (
    <header className={style.title}>
      <h1>{title}</h1>
      <h3>{subtitle}</h3>
    </header>
  );
};
