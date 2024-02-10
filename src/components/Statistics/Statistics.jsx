import { StatisticsItem } from '..';
import style from './Statistics.module.css';
import { GrActions, GrAd, GrAmazon, GrAnchor } from "react-icons/gr";

const arrayIcon = [<GrActions/>, <GrAd/>, <GrAmazon/>, <GrAnchor/>];

export const Statistics = ({ title, stats }) => {
  return (
    <>
      {title && (
        <h2 className={style.title}>
          {title}
        </h2>
      )}

      <ul className={style.list}>
        {stats.map((stat, index) => (
          <li className={style.item} key={stat.id}>
            <StatisticsItem {...stat} icon={arrayIcon[index]}/>
          </li>
        ))}
      </ul>
    </>
  );
};

