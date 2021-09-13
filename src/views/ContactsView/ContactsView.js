import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ContactForm from "../../components/ContactForm";
import Filter from "../../components/Filter";
import ContactList from "../../components/ContactList";

export default function Contacts() {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div>
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </div>
    </>
  );
}
