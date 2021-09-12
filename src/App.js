import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ContactForm from "./components/ContactForm";
import Filter from "./components/Filter";
import ContactList from "./components/ContactList";
import s from "./App.module.css";

export default function App() {
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
      <div className={s.thumb}>
        <h1 className={s.title}>Phonebook</h1>
        <ContactForm />
        <h2 className={s.title}>Contacts</h2>
        <Filter />
        <ContactList />
      </div>
    </>
  );
}
