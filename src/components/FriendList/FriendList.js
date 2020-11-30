import PropTypes from 'prop-types';

import FriendListItem from '../FriendListItem/FriendListItem';
import s from './FriendList.module.css';

export default function FriendList({ friends }) {
  return <ul className={s.list}>{friends.map(FriendListItem)}</ul>;
}

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};
