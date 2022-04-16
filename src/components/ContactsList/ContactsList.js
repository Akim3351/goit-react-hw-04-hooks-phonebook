import React from 'react';
import ContactsListItem from '../ContactsListItem/ContactsListItem';
import { ContactList } from './ContactsList.styled';
import propTypes from 'prop-types';

const ContactsList = ({ contacts, onDelete }) => {
  return (
    <ContactList>
      {contacts.map(contact => {
        const { id, name, number } = contact;
        return (
          <ContactsListItem
            id={id}
            name={name}
            number={number}
            onDelete={onDelete}
            key={id}
          />
        );
      })}
    </ContactList>
  );
};

ContactsList.propTypes = {
  contacts: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string.isRequired,
      name: propTypes.string.isRequired,
      number: propTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  onDelete: propTypes.func.isRequired,
};

export default ContactsList;
