import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import styles from './Filter.module.css';
import { filterContact } from '../../redux/contact/contactActions';
import { getFilter } from '../../redux/contact/contactSelectors';

export default function Filter() {
  const dispatch = useDispatch();

  const value = useSelector(getFilter);

  const onChange = useCallback(e => dispatch(filterContact(e.target.value)), [dispatch]);

  return (
    <label className={styles.findtext}>
      Find contact by name
      <input type="text" value={value} onChange={onChange} />
    </label>
  );
}
