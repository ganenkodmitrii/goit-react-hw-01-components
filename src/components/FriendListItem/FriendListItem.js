import PropTypes from 'prop-types';
import s from './FriendListItem.module.css';

export default function FriendListItem({ id, isOnline = true, avatar, name }) {
  return (
    <li className={s.item} key={id}>
      <span className={isOnline ? `${s.isOnline}` : `${s.isOffline}`}></span>
      <div className={s.thumb}>
        <img className={s.avatar} src={avatar} alt={name} width="48" />
      </div>
      <p className={s.name}>{name}</p>
    </li>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  key: PropTypes.number.isRequired,
};
