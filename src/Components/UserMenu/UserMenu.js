import React from 'react';
import { connect } from 'react-redux';
import userOperations from '../../redux/userAuth/userOperations';
import { getUserAuthName } from '../../redux/userAuth/userSelectors';

import styles from './UserMenu.module.css';

const UserMenu = ({ name, onLogout }) => {
  return (
    <div className={styles.userMenuNav}>
      <p className={styles.welcomeText}>Welcome, {name}</p>
      <button type="button" onClick={onLogout} className={styles.navLink}>
        LogOut
      </button>
    </div>
  );
};

const mapStateToProps = state => ({
  name: getUserAuthName(state),
});

const mapDispatchToProps = {
  onLogout: userOperations.logoutUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
