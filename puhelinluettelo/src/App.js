import React from 'react';
import Button from './components/Button';
import Contact from './components/Contact';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      persons: [
        { name: 'Arto Hellas', number: '040-123456' },
        { name: 'Martti Tienari', number: '040-123456' },
        { name: 'Arto Järvinen', number: '040-123456' },
        { name: 'Lea Kutvonen', number: '040-123456' },
      ],
      newName: '',
      newNumber: '',
      filter: '',
    };
  }

  onInputUpdate() {
    return (e) => {
      const { value, name } = e.target;
      this.setState({ [name]: value });
    };
  }

  submitForm() {
    return (e) => {
      e.preventDefault();
      this.setState((prevState) => {
        const { newName, persons, newNumber } = prevState;
        const duplicate = persons.some(({ name }) => name === newName);
        if (duplicate) {
          return prevState;
        }
        return {
          newName: '',
          persons: persons.concat({ name: newName, number: newNumber }),
        };
      });
    };
  }

  render() {
    const { persons, newName, newNumber, filter } = this.state;
    const filteredContacts = !filter.length ? persons :
      persons.filter(({ name }) =>
        name.toLowerCase().indexOf(filter.toLowerCase()) === 0);
    return (
      <div>
        <h2>Puhelinluettelo</h2>
        <form onSubmit={this.submitForm()}>
          <div>
            rajaa: <input name="filter" onChange={this.onInputUpdate()} value={filter} />
          </div>
          <h2>Lisää uusi</h2>
          <div>
            nimi: <input name="newName" onChange={this.onInputUpdate()} value={newName} />
          </div>
          <div>
            numero: <input name="newNumber" onChange={this.onInputUpdate()} value={newNumber} />
          </div>
          <div>
            <Button type="submit">lisää</Button>
          </div>
        </form>
        <h2>Numerot</h2>
        {filteredContacts.map((contact) => <Contact key={contact.name} {...contact} />)}
      </div>
    );
  }
}


export default App;
