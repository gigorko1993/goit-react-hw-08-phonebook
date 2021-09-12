import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getLoader,
  getFiltredContacts,
} from "../../../redux/contacts/contacts-selectors";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import {
  deleteContactsOperation,
  getContactsOperation,
} from "../../../redux/contacts/contacts-operation";

import s from "./ContactItem.module.css";

const ContactItem = () => {
  const contacts = useSelector(getFiltredContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContactsOperation());
  }, [dispatch]);

  const loader = (
    <Loader
      type="Circles"
      color="rgba(70, 70, 241, 0.5)"
      height={66}
      width={66}
    />
  );
  const loading = useSelector(getLoader);

  return (
    <ul>
      {loading ? (
        <li className={s.loader}>{loader}</li>
      ) : (
        contacts.map(({ id, name, number }) => (
          <li className={s.item} key={id}>
            {name}: {number}
            <button
              className={s.button}
              onClick={() => dispatch(deleteContactsOperation(id))}
              type="button"
            >
              Delete
            </button>
          </li>
        ))
      )}
    </ul>
  );
};

export default ContactItem;
