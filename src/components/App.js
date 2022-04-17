import React, { useState, useEffect } from 'react';
import shortid from 'shortid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ContactsList from './ContactsList/ContactsList';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';

function App() {
  const [contacts, setContacts] = useState(() => {
    return (
      JSON.parse(window.localStorage.getItem('contacts')) ?? [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      ]
    );
  });

  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const onAddContact = contact => {
    const newContact = {
      id: shortid.generate(),
      ...contact,
    };

    const contactAllreadyExists = contacts.find(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );

    if (contactAllreadyExists) {
      toast.error(`${newContact.name} is already in contacts`);
    } else {
      setContacts([...contacts, newContact]);
      toast.success(`${newContact.name} added to your contacts`);
    }
  };

  const onSearch = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const onFilterChange = e => {
    const target = e.target.value;
    setFilter(target);
  };

  const onDelete = id => {
    const updatedContacts = contacts.filter(contact => contact.id !== id);
    setContacts([...updatedContacts]);
  };

  return (
    <div className="App">
      <h1> Phonebook </h1>
      <ContactForm onAddContact={onAddContact} />

      <h2> Contacts </h2>
      <Filter filter={filter} onSearch={onFilterChange} />
      <ContactsList contacts={onSearch()} onDelete={onDelete} />
      <ToastContainer />
    </div>
  );
}

export default App;
