import { IconContext } from 'react-icons';

import style from './Statistics.module.css';

export const StatisticsItem = ({ total, title, icon }) => {
  return (
    <>
      <IconContext.Provider value={{ size: '2em', color: 'orange' }}>
        <div>{icon}</div>
      </IconContext.Provider>
      <span className={style.counter}>{total}</span>
      <p className={style.text}>{title}</p>
    </>
  );
};
