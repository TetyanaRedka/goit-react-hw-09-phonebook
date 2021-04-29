import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getUserAuthenticated } from '../../redux/userAuth/userSelectors';
import Auth from '../../Components/Auth/Auth';
import UserMenu from '../../Components/UserMenu/UserMenu';
import styles from './Header.module.css';

export default function Header() {
  const getUserAuthenticat = useSelector(getUserAuthenticated);
  return (
    <header className={styles.navBar}>
      <div className={styles.navList}>
        <NavLink exact to="/" className={styles.navLink} activeClassName={styles.navLinkActive}>
          WelcomePage
        </NavLink>
        {getUserAuthenticat && (
          <NavLink to="/contacts" className={styles.navLink} activeClassName={styles.navLinkActive}>
            Contacts
          </NavLink>
        )}
      </div>
      {getUserAuthenticat ? <UserMenu /> : <Auth />}
    </header>
  );
}
