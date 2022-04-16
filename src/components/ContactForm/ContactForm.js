import React, { useState } from 'react';
import { InputForm, InputLabel, Input, Button } from './ContactForm.styled';
import propTypes from 'prop-types';

function ContactForm({ onAddContact }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const onFormChange = event => {
    const { name, value } = event.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const onFormSubmit = event => {
    event.preventDefault();
    onAddContact(name, number);
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
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
