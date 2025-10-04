import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';
import './ContactList.css';

export default function ContactList() {
  const contacts = useSelector((state) => state.contacts);
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  const filtered = contacts.filter((c) =>
    c.name.toLowerCase().includes(filter.toLowerCase())
  );

  if (filtered.length === 0) {
    return <p>Контакти відсутні або нічого не знайдено.</p>;
  }

  return (
    <ul className="contactList">
      {filtered.map((c) => (
        <li key={c.id} className="contactItem">
          <div>
            <div className="name">{c.name}</div>
            <div className="phone">{c.phone}</div>
          </div>
          <button onClick={() => dispatch(deleteContact(c.id))}>
            Видалити
          </button>
        </li>
      ))}
    </ul>
  );
}
