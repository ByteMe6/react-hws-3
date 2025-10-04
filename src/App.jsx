import React from 'react';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import Filter from './components/Filter/Filter';

export default function App() {
  return (
    <div className="app">
      <h1>Книга контактів</h1>
      <ContactForm />
      <Filter />
      <ContactList />
    </div>
  );
}
