import { createSelector } from "reselect";

export const getContacts = (state) => state.contacts.contactItems.items;

export const getFilter = (state) => state.contacts.filter;

// export const getFiltredContacts = (state) => {
//   const lowerCasedFilter = getFilter(state).toLowerCase();
//   const filteredContacts = getContacts(state).filter(({ name }) =>
//     name.toLowerCase().includes(lowerCasedFilter)
//   );
//   return filteredContacts;
// };
export const getFiltredContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filterValue) => {
    const lowerCasedFilter = filterValue.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(lowerCasedFilter)
    );
  }
);

export const getLoader = (state) => state.contacts.contactItems.loader;
