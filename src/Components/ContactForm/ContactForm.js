import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './ContactForm.module.css';

import { connect } from 'react-redux';
import contactOerations from '../../redux/contact/contactOperations';
import { getAllContacts } from '../../redux/contact/contactSelectors';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  // state = {
  //   name: '',
  //   number: '',
  // };

  const changeData = e => {
    const { name, value } = e.target;
    if (name === 'name') setName(value);
    if (name === 'number') setNumber(value);

    // this.setState({ [name]: value });
  };

  const checkContact = name => {
    const contacts = this.props.contacts;

    const normalizeName = name.toLowerCase();

    return contacts.some(contact => contact.name.toLowerCase() === normalizeName);
  };

  const submitContact = e => {
    // const { name } = this.state;
    e.preventDefault();

    if (checkContact(name)) {
      alert(`${name} is already in contact`);
      return;
    }

    this.props.onSubmit(this.state);

    reset();
  };

  const reset = () => {
    this.setState({ name: '', number: '' });
  };

  //  const { name, number } = this.state;
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
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  contacts: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
  contacts: getAllContacts(state),
});

const mapDispatchToProps = dispatch => ({
  onSubmit: contact => dispatch(contactOerations.addContact(contact)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
