import React, { useState } from 'react';
import { InputForm, InputLabel, Input, Button } from './ContactForm.styled';
import propTypes from 'prop-types';

function ContactForm({ onAddContact }) {
  const [contact, setContact] = useState({
    name: '',
    number: '',
  });

  const { name, number } = contact;

  const onFormChange = event => {
    const { name, value } = event.currentTarget;
    setContact({ ...contact, [name]: value });
  };

  const onFormSubmit = event => {
    event.preventDefault();
    onAddContact(contact);
    console.log(contact);
    reset();
  };

  const reset = () => {
    setContact({
      name: '',
      number: '',
    });
  };

  return (
    <InputForm onSubmit={onFormSubmit}>
      <InputLabel>
        name
        <Input
          type="text"
          name="name"
          value={name}
          onChange={onFormChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </InputLabel>
      <InputLabel>
        number
        <Input
          type="tel"
          name="number"
          value={number}
          onChange={onFormChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </InputLabel>
      <Button type="submit">add contact</Button>
    </InputForm>
  );
}

ContactForm.propTypes = {
  onAddContact: propTypes.func.isRequired,
};

export default ContactForm;
