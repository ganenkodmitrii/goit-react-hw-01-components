import s from './Statistics.module.css';
import PropTypes from 'prop-types';

export default function Statistics({ title, stats }) {
  return (
    <section className={s.statistics}>
      {title && <h2 className={s.title}>{title}</h2>}
      <ul className={s.list}>
        {stats.map(stat => (
          <li
            className={s.item}
            key={stat.id}
            style={{
              backgroundColor:
                '#' +
                (Math.random().toString(16) + '000000')
                  .substring(2, 8)
                  .toUpperCase(),
            }}
          >
            <span className={s.label}>{stat.label}</span>
            <span className={s.percentage}>{stat.percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
};

//функция для генерации случайного цвета.
// style = "background-color: " + '#' + (Math.random().toString(16) + '000000').substring(2,8).toUpperCase();
