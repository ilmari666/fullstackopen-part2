import React from 'react';
import Contact from './Contact';

const Contacts = ({ heading, contacts, filter }) => {
  const filteredContacts = !filter.length ? contacts :
    contacts.filter(({ name }) =>
      name.toLowerCase().indexOf(filter.toLowerCase()) === 0);
  return (<div>
    <h2>{heading}</h2>
    {filteredContacts.map(contact => <Contact key={contact.name} {...contact} />)}
  </div>);
}

export default Contacts;

