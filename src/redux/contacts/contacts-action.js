import { createAction } from "@reduxjs/toolkit";

const addContact = createAction("contacts/Add", ({ name, number, id }) => {
  return {
    payload: {
      name,
      number,
      id,
    },
  };
});

const getContacts = createAction("contacts/Get");
const deleteContact = createAction("contacts/Delete");

const changeFilter = createAction("contacts/changeFilter");

const fetchContactsStart = createAction("contacts/loading");
const fetchContactsFinished = createAction("contacts/finished");
const fetchContactsError = createAction("contacts/error");
const updateFilterValue = createAction("contacts/filter");

const actions = {
  addContact,
  getContacts,
  deleteContact,
  changeFilter,
  fetchContactsStart,
  fetchContactsFinished,
  fetchContactsError,
  updateFilterValue,
};
export default actions;
