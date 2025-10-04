import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contactsSlice';
import './ContactForm.css';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts);

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmedName = name.trim();
    const trimmedPhone = phone.trim();
    if (!trimmedName || !trimmedPhone) return;

    const exists = contacts.some(
      (c) => c.name.toLowerCase() === trimmedName.toLowerCase()
    );
    if (exists) {
      alert(`${trimmedName} вже є в контактах`);
      return;
    }

    dispatch(addContact({ name: trimmedName, phone: trimmedPhone }));
    setName('');
    setPhone('');
  };

  return (
    <form className="contactForm" onSubmit={handleSubmit}>
      <label className="field">
        Ім'я
        <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Ім'я" />
      </label>
      <label className="field">
        Телефон
        <input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Телефон" />
      </label>
      <button type="submit">Додати контакт</button>
    </form>
  );
}
