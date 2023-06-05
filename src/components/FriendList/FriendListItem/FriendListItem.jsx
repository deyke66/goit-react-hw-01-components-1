import styles from './FriendListItem.module.css';

export const FriendListItem = ({ avatar, name, isOnline }) => {

    return (
      <li className={styles.item}>
        <span className={styles.status} style={{
              backgroundColor: isOnline ? "#008000" : "#ff0000"
            }}></span>
        <img className={styles.avatar} src={avatar} alt="User avatar" width="48" />
            <p className={styles.name}>{name}</p>
      </li>
    );
}