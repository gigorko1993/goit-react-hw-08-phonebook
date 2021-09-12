import axios from "axios";
import { toast } from "react-toastify";
import actions from "./contacts-action";

axios.defaults.baseURL = "http://localhost:7777";

const errorMessage = (err) =>
  toast.error(`There are some isues. 
  Message: ${err}.`);

export const getContactsOperation = () => async (dispatch) => {
  dispatch(actions.fetchContactsStart());
  try {
    const { data } = await axios.get("/contacts");
    dispatch(actions.getContacts(data));
  } catch (error) {
    errorMessage(error);
    dispatch(actions.fetchContactsError(error));
  } finally {
    dispatch(actions.fetchContactsFinished());
  }
};

export const postContactsOperation = (contact) => async (dispatch) => {
  dispatch(actions.fetchContactsStart());
  try {
    const { data } = await axios.post("/contacts", contact);
    toast.success("Add new contact 🚀");
    dispatch(actions.addContact(data));
  } catch (error) {
    errorMessage(error);
    dispatch(actions.fetchContactsError(error));
  } finally {
    dispatch(actions.fetchContactsFinished());
  }
};

export const deleteContactsOperation = (id) => async (dispatch) => {
  const contactId = id.toString();
  dispatch(actions.fetchContactsStart());
  try {
    await axios.delete(`/contacts/${contactId}`);
    dispatch(actions.deleteContact(id));
  } catch (error) {
    errorMessage(error);
    dispatch(actions.fetchContactsError(error));
  } finally {
    dispatch(actions.fetchContactsFinished());
  }
};
