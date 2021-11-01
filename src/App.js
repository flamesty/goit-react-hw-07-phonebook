import React from "react";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import Container from "./components/Container/Container";
import Filter from "./components/Filter/Filter";
import s from "./index.css"

export default function App() {
  return (
    <Container>
      <div className={s.container}>
        <h1 className={s.title}>Phonebook</h1>
        <ContactForm />

        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </div>
    </Container>
  );
}

