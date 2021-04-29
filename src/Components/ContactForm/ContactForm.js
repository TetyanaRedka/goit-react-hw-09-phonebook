import React, { useState, useCallback } from 'react';

import styles from './ContactForm.module.css';

import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contact/contactOperations';
import { getAllContacts } from '../../redux/contact/contactSelectors';

export default function ContactForm() {
  const dispatch = useDispatch();
  const onSubmit = useCallback(contact => dispatch(addContact(contact)), [dispatch]);
  const contacts = useSelector(getAllContacts);

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const changeData = e => {
    const { name, value } = e.target;
    if (name === 'name') setName(value);
    if (name === 'number') setNumber(value);
  };

  const checkContact = useCallback(
    name => {
      const normalizeName = name.toLowerCase();

      return contacts.some(contact => contact.name.toLowerCase() === normalizeName);
    },
    [contacts],
  );

  const submitContact = useCallback(
    e => {
      e.preventDefault();

      if (checkContact(name)) {
        alert(`${name} is already in contact`);
        return;
      }
      onSubmit({ name, number });
      reset();
    },
    [name, number, onSubmit, checkContact],
  );

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={submitContact} className={styles.formStyle}>
      <label className={styles.pointStyle}>
        Name
        <input
          className={styles.input}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          value={name}
          onChange={changeData}
        />
      </label>
      <label className={styles.pointStyle}>
        Number
        <input
          className={styles.input}
          type="tel"
          name="number"
          pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
          title="Номер телефона должен состоять из 11-12 цифр и может содержать цифры, пробелы, тире, пузатые скобки и может начинаться с +"
          required
          value={number}
          onChange={changeData}
        />
      </label>
      <button type="submit" className={styles.btn}>
        Add contact
      </button>
    </form>
  );
}
