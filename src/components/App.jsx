import { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addNewContact = contact => {
    const { contacts } = this.state;
    const isExist = contacts.some(
      ({ name }) => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (isExist) {
      alert(`${contact.name} is already in contacts.`);
      return;
    }

    const newContact = {
      id: nanoid(),
      ...contact,
    };

    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  filteredContacts = () => {
    const { contacts, filter } = this.state;

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  handleFilterChange = event => {
    this.setState({
      filter: event.target.value,
    });
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const { filter, contacts } = this.state;

    return (
      <section>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addNewContact} />
        <div>
          <h2>Contacts</h2>

          {contacts.length === 0 ? (
            <div style={{ textAlign: 'center' }}>
              Your phonebook is empty 🥺
            </div>
          ) : (
            <>
              <Filter
                filter={filter}
                onFilterChange={this.handleFilterChange}
              />

              {this.filteredContacts().length > 0 && (
                <ContactList
                  contacts={this.filteredContacts()}
                  onDeleteContact={this.deleteContact}
                />
              )}
            </>
          )}
        </div>
      </section>
    );
  }
}
