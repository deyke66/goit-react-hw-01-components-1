import styles from "./FriendList.module.css";
import { FriendListItem } from "./FriendListItem/FriendListItem";
import PropTypes from "prop-types"

export const FriendList = ({ friends }) => {
    return (
        <ul className={styles.friend_list}>
        {friends.map(item => (
            <FriendListItem
                key={item.id}
                avatar={item.avatar}
                name={item.name}
                isOnline={item.isOnline}
                id={item.id}
            />
        ))}   
        </ul>
    )
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.shape({
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool,
    id: PropTypes.number
  }))
}