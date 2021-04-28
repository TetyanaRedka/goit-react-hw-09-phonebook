import React from 'react';

import { NavLink } from 'react-router-dom';
import styles from '../../views/Header/Header.module.css';

const Auth = () => {
  return (
    <nav className={styles.navList}>
      <NavLink to="/registration" className={styles.navLink} activeClassName={styles.navLinkActive}>
        Pegistration
      </NavLink>
      <NavLink to="/login" className={styles.navLink} activeClassName={styles.navLinkActive}>
        Login
      </NavLink>
    </nav>
  );
};

export default Auth;
