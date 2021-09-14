import "react-toastify/dist/ReactToastify.css";
import ContactForm from "../../components/ContactForm";
import Filter from "../../components/Filter";
import ContactList from "../../components/ContactList";
import s from "./ContactView.module.css";

export default function ContactsView() {
  return (
    <div className={s.container}>
      <div className={s.thumb}>
        <h1 className={s.title}>Your personal Phonebook</h1>
        <ContactForm />
        <Filter />
      </div>
      <ContactList />
    </div>
  );
}
