import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

import Form from '../Form';
import Filter from '../FindContact'
import ContactList from '../ContactList';

import s from './PhoneBook.module.css'

class Phonebook extends Component {

  state = {
    contacts: [],
    filter: ''
  }

  componentDidMount() {
    const contacts = JSON.parse(localStorage.getItem('contactList'))
    if (contacts) {
      this.setState({ contacts: contacts })
    }
  }

  componentDidUpdate(prevState) {
    const { contacts } = this.state;
    if (contacts !== prevState.contacts) {
      localStorage.setItem('contactList', JSON.stringify(contacts))
    }
  }

  onSubmitHandler = ({ name, number }) => {
    const contactName = name.toLowerCase();
    const { contacts } = this.state
    if (contacts.find(({ name }) => name.toLowerCase() === contactName)) {
      alert(`${name} already in your contact list`)
      return;
    }
    const newContact = {
      id: uuidv4(),
      name,
      number
    }

    this.setState(prevState => ({
      contacts: [newContact, ...prevState.contacts],
    }))
  }

  changeFilterHandler = ({ target: { value } }) => {
    this.setState({ filter: value });
  }

  getFilteredContacts = () => {
    const { filter, contacts } = this.state;
    const normalFilter = filter.toLowerCase();
    return contacts.filter(({ name }) => name.toLowerCase().includes(normalFilter));
  }

  deleteContactHandler = (id) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id)
    }))
  }

  render() {
    const visibleContacts = this.getFilteredContacts();
    const { contacts, filter } = this.state

    return (
      <div className={s.phonebook}>
        <h1 className={s.phonebook_header}>Phonebook</h1>
        <h2 className={s.section_header}>Create a new contact</h2>
        <Form onSubmit={this.onSubmitHandler} />

        <h2 className={s.section_header}>Contacts</h2>
        <Filter value={filter} onChange={this.changeFilterHandler} />
        <ContactList items={visibleContacts} totalItems={contacts.length} handler={this.deleteContactHandler} />
      </div >
    )
  }
}

export default Phonebook;
