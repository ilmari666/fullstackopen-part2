import React from 'react';

import personsService from './services/persons'
import Button from './components/Button';
import Contacts from './components/Contacts';
import Input from './components/Input';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      persons: [],
      newName: '',
      newNumber: '',
      filter: '',
    };
  }

  onInputUpdate = (e) => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  componentDidMount() {
   personsService.getAll()
    .then(persons=>this.setState({persons}));
  }

  submitForm = (e) => {
    e.preventDefault();
    const { newName : name, newNumber : number, persons } = this.state;
    const contact = { name, number };

    personsService.createPerson(contact)
      .then(person =>
        this.setState( {
          newName: '',
          newNumber: '',
          persons: persons.concat(person),
        }))
    };



  render() {
    const { persons, newName, newNumber, filter } = this.state;

    return (
      <div>
        <h2>Puhelinluettelo</h2>
        <form onSubmit={this.submitForm}>
          <Input label="hae:" name="filter" onChange={this.onInputUpdate} value={filter} />
          <h2>Lisää uusi</h2>
          <Input label="nimi:" name="newName" onChange={this.onInputUpdate} value={newName} />
          <Input label="numero:" name="newNumber" onChange={this.onInputUpdate} value={newNumber} />
          <Button type="submit">lisää</Button>
        </form>
        <Contacts heading="Numerot" contacts={persons} filter={filter} />
      </div>
    );
  }
}


export default App;
