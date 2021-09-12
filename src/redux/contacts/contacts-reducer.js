import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import actions from "./contacts-action";

const InitialState = {
  items: [],
  loader: false,
  error: "",
};
const contactItems = createReducer(InitialState, {
  [actions.getContacts]: (state, { payload }) => ({
    ...state,
    items: [...payload],
  }),
  [actions.addContact]: (state, { payload }) => ({
    ...state,
    items: [...state.items, payload],
  }),
  [actions.deleteContact]: (state, { payload }) => ({
    ...state,
    items: state.items.filter(({ id }) => id !== payload),
  }),

  [actions.fetchContactsStart]: (state) => ({
    ...state,
    loader: true,
  }),
  [actions.fetchContactsFinished]: (state) => ({
    ...state,
    loader: false,
  }),
  [actions.fetchContactsError]: (state, { payload }) => ({
    ...state,
    error: payload,
  }),
});

const filter = createReducer("", {
  [actions.changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({
  contactItems,
  filter,
});
