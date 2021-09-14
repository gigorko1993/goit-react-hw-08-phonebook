import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { postContactsOperation } from "../../redux/contacts/contacts-operation";
import { getContacts } from "../../redux/contacts/contacts-selectors";

import s from "./ContactForm.module.css";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
      // display: "flex",
      // alignItems: "center",
    },
  },
}));

const ContactForm = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const classes = useStyles();

  const contacts = useSelector(getContacts);

  const dispatch = useDispatch();

  const onChange = (e) => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case "name":
        setName(value);
        break;

      case "number":
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const contactCheck = contacts.find(
      (contact) => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (contactCheck) {
      setName("");
      setNumber("");
      alert(`${name} is already in contact`);
      return;
    }
    dispatch(postContactsOperation({ name, number }));
    setName("");
    setNumber("");
  };

  return (
    <form cclassName={classes.root} className={s.form} onSubmit={onSubmit}>
      <div className={s.thumb}>
        <TextField
          id="standard-basic"
          label="Name"
          className={s.input}
          onChange={onChange}
          type="text"
          value={name}
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
        />
        <TextField
          id="standard-basic"
          label="Phone Number"
          className={s.input}
          onChange={onChange}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          value={number}
          required
        />
      </div>
      <Fab aria-label="Add" color="primary" type="submit">
        <AddIcon />
      </Fab>
    </form>
  );
};

export default ContactForm;
