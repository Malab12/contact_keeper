import React, {useReducer} from 'react';
import uuid from 'uuid';
import ContactContext from  './contactContext';
import contactReducer from './contactReducer';
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER
} from '../types';

const ContactState = props => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: 'Jim',
        email: 'Jim@a.com',
        phone: '000-000-0000',
        type: 'personal'
      },
      {
        id: 2,
        name: 'Jill',
        email: 'Jill@a.com',
        phone: '001-000-0000',
        type: 'professional'
      },
      {
        id: 1,
        name: 'Jake',
        email: 'Jake@a.com',
        phone: '002-000-0000',
        type: 'personal'
      }
    ]
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  // Add Contact

  // Delete Contact

  // Set Current Contact

  // Clear Current Contact

  // Update Contact

  // Filter Contacts

  // Clear Filter

  return (
    <ContactContext.Provider
      value = {{
        contacts: state.contacts
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;