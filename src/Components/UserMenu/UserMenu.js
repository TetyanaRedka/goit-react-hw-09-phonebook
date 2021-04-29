import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logoutUser } from '../../redux/userAuth/userOperations';
import { getUserAuthName } from '../../redux/userAuth/userSelectors';

import styles from './UserMenu.module.css';

export default function UserMenu() {
  const dispatch = useDispatch();

  const name = useSelector(getUserAuthName);

  const onLogout = useCallback(() => dispatch(logoutUser()), [dispatch]);

  return (
    <div className={styles.userMenuNav}>
      <p className={styles.welcomeText}>Welcome, {name}</p>
      <button type="button" onClick={onLogout} className={styles.navLink}>
        LogOut
      </button>
    </div>
  );
}
