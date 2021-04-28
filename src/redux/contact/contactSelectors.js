import { createSelector } from '@reduxjs/toolkit';

export const getFilter = state => state.contacts.filter;

export const getAllContacts = state => state.contacts.contacts;

export const getLoading = state => state.contacts.loading;

export const getVisibleContacts = createSelector([getFilter, getAllContacts], (filter, contacts) => {
  const normalizeFilter = filter.toLowerCase();

  return contacts.filter(contact => contact.name.toLocaleLowerCase().includes(normalizeFilter));
});
