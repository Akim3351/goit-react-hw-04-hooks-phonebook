import React from 'react';
import { ContactsItem, Contact, DeleteButton } from './ContactsListItem.styled';
import propTypes from 'prop-types';

const ContactsListItem = ({ id, name, number, onDelete }) => {
  return (
    <ContactsItem id={id}>
      <Contact>
        {name}: {number}
      </Contact>
      <DeleteButton onClick={() => onDelete(id)}>delete</DeleteButton>
    </ContactsItem>
  );
};

ContactsListItem.propTypes = {
  id: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  number: propTypes.string.isRequired,
  onDelete: propTypes.func.isRequired,
};

export default ContactsListItem;
