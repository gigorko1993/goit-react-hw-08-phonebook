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

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Fab from "@material-ui/core/Fab";
import ClearIcon from "@material-ui/icons/Clear";

const useStyles = makeStyles({
  root: {
    maxWidth: 275,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
  },
  h2: {
    fontSize: 28,
    color: "rgb(63,63,63)",
    marginBottom: 15,
  },
  title: {
    fontSize: 14,
  },
});

const ContactItem = () => {
  const contacts = useSelector(getFiltredContacts);
  const dispatch = useDispatch();
  const classes = useStyles();

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
    <ul className={s.thumb}>
      {loading ? (
        <li className={s.loader}>{loader}</li>
      ) : (
        contacts.map(({ id, name, number }) => (
          <li className={s.item} key={id}>
            <Card className={classes.root} variant="outlined" key={id}>
              <CardContent>
                <Typography variant="h4" component="h3" className={classes.h2}>
                  {name}
                </Typography>
                <Typography
                  variant="title"
                  component="h4"
                  className={classes.title}
                >
                  {number}
                </Typography>
              </CardContent>
              <CardActions>
                <Fab
                  aria-label="Delete"
                  color="secondary"
                  type="submit"
                  onClick={() => dispatch(deleteContactsOperation(id))}
                >
                  <ClearIcon />
                </Fab>
              </CardActions>
            </Card>
          </li>
        ))
      )}
    </ul>
  );
};

export default ContactItem;
