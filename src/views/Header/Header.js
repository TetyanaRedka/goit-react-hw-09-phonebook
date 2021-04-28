import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getUserAuthenticated } from '../../redux/userAuth/userSelectors';
import Auth from '../../Components/Auth/Auth';
import UserMenu from '../../Components/UserMenu/UserMenu';
import styles from './Header.module.css';

const Header = ({ getUserAuthenticated }) => {
  return (
    <header className={styles.navBar}>
      <div className={styles.navList}>
        <NavLink exact to="/" className={styles.navLink} activeClassName={styles.navLinkActive}>
          WelcomePage
        </NavLink>
        {getUserAuthenticated && (
          <NavLink to="/contacts" className={styles.navLink} activeClassName={styles.navLinkActive}>
            Contacts
          </NavLink>
        )}
      </div>
      {getUserAuthenticated ? <UserMenu /> : <Auth />}
    </header>
  );
};

const mapStateToProps = state => ({
  getUserAuthenticated: getUserAuthenticated(state),
});

export default connect(mapStateToProps)(Header);
