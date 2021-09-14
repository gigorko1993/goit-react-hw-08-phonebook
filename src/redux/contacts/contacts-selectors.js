import { createSelector } from "reselect";

export const getContacts = (state) => state.contacts.contactItems.items;

export const getFilter = (state) => state.contacts.filter;

export const getLoader = (state) => state.contacts.contactItems.loader;

export const getFiltredContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filterValue) => {
    const lowerCasedFilter = filterValue.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(lowerCasedFilter)
    );
  }
);
