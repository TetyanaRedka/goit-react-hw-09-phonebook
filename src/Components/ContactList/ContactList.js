import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { deleteContacts, fetchContacts } from '../../redux/contact/contactOperations';
import { getLoading, getVisibleContacts } from '../../redux/contact/contactSelectors';
import styles from './ContactList.module.css';

export default function ContactList() {
  const dispatch = useDispatch();
  const deleteContact = useCallback(id => dispatch(deleteContacts(id)), [dispatch]);

  const contacts = useSelector(getVisibleContacts);
  const loading = useSelector(getLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      {loading && <h1>...</h1>}
      <ul>
        {contacts.length > 0 &&
          contacts.map(({ id, name, number }) => (
            <li key={id}>
              {name}: {number}
              <button className={styles.deletebtn} onClick={() => deleteContact(id)}>
                удалить
              </button>
            </li>
          ))}
      </ul>
    </>
  );
}
