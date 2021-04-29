import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';

import { registerUser, loginUser } from '../../redux/userAuth/userOperations';
import styles from '../ContactForm/ContactForm.module.css';

export default function UserRegisterForm() {
  const dispatch = useDispatch();
  const location = useLocation();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = e => {
    const { name, value } = e.target;
    if (name === 'name') setName(value);
    if (name === 'email') setEmail(value);
    if (name === 'password') setPassword(value);
  };

  const ifRegisterForm = useCallback(() => {
    return location.pathname === '/registration';
  }, [location.pathname]);

  const handleSubmit = useCallback(
    e => {
      e.preventDefault();

      ifRegisterForm()
        ? dispatch(registerUser({ name, email, password }))
        : dispatch(
            loginUser({
              email,
              password,
            }),
          );

      reset();
    },
    [dispatch, ifRegisterForm, email, name, password],
  );

  const reset = () => {
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <>
      {ifRegisterForm() ? <div> REGISTRATION </div> : <div> LOGIN </div>}
      <form onSubmit={handleSubmit} className={styles.formStyle}>
        {ifRegisterForm() && (
          <label className={styles.pointStyle}>
            Name:
            <input type="text" name="name" value={name} onChange={handleChange} className={styles.input} />
          </label>
        )}
        <label className={styles.pointStyle}>
          Email:
          <input type="email" name="email" value={email} onChange={handleChange} className={styles.input} />
        </label>
        <label className={styles.pointStyle}>
          Password:
          <input type="password" name="password" value={password} onChange={handleChange} className={styles.input} />
        </label>
        <button type="submit">{ifRegisterForm() ? 'Registration' : 'Login'}</button>
      </form>
    </>
  );
}
