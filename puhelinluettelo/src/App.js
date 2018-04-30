import React from 'react';
import Button from './components/Button';
import Contacts from './components/Contacts';
import Input from './components/Input';


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
          newNumber: '',
          persons: persons.concat({ name: newName, number: newNumber }),
        };
      });
    };
  }

  render() {
    const { persons, newName, newNumber, filter } = this.state;

    return (
      <div>
        <h2>Puhelinluettelo</h2>
        <form onSubmit={this.submitForm()}>
          <Input label="rajaa:" name="filter" onChange={this.onInputUpdate()} value={filter} />
          <h2>Lisää uusi</h2>
          <Input label="nimi:" name="newName" onChange={this.onInputUpdate()} value={newName} />
          <Input label="numero:" name="newNumber" onChange={this.onInputUpdate()} value={newNumber} />
          <Button type="submit">lisää</Button>
        </form>
        <Contacts heading="Numerot" contacts={persons} filter={filter}/>
      </div>
    );
  }
}


export default App;
