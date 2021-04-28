import React from 'react';

import ContactForm from '../../Components/ContactForm/ContactForm';
import Filter from '../../Components/Filter';
import ContactList from '../../Components/ContactList';

const Main = () => {
  return (
    <div>
      <h1>Phonebook</h1>

      <ContactForm />

      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};

export default Main;
