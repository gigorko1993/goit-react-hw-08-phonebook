import { useSelector, useDispatch } from "react-redux";

import { getFilter } from "../../redux/contacts/contacts-selectors";
import actions from "../../redux/contacts/contacts-action";
import s from "./Filter.module.css";
import TextField from "@material-ui/core/TextField";

const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const onChange = (e) => {
    dispatch(actions.changeFilter(e.currentTarget.value));
  };

  return (
    <>
      <TextField
        id="standard-basic"
        label="Find contacts in your phonebook by name"
        className={s.input}
        name="filter"
        type="text"
        value={filter}
        onChange={onChange}
      />
    </>
  );
};

export default Filter;
