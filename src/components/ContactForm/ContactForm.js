import React, { useState } from 'react';
import css from './ContactForm.module.css';
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
    <form className={css.input__form} onSubmit={onFormSubmit}>
      <label className={css.input__label}>
        name
        <input
          type="text"
          name="name"
          value={name}
          onChange={onFormChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label className={css.input__label}>
        number
        <input
          type="tel"
          name="number"
          value={number}
          onChange={onFormChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button type="submit">add contact</button>
    </form>
  );
}

ContactForm.propTypes = {
  onAddContact: propTypes.func.isRequired,
};

export default ContactForm;
