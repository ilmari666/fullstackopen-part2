import React from 'react';
import axios from 'axios';
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
    axios.get('http://localhost:3001/persons').then(result => {
      const { data: persons } = result;
      this.setState({persons});
    });
  }

  submitForm = (e) => {
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
          persons: persons.concat({ name: newName, number: newNumber, id: persons.length + 1 }),
        };
      });
    };



  render() {
    const { persons, newName, newNumber, filter } = this.state;

    return (
      <div>
        <h2>Puhelinluettelo</h2>
        <form onSubmit={this.submitForm}>
          <Input label="find countries:" name="filter" onChange={this.onInputUpdate} value={filter} />
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
