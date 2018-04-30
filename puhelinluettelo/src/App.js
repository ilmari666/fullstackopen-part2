import React from 'react';
import Button from './components/Button';
import Contact from './components/Contact';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      persons: [
        { name: 'Arto Hellas', number: '040-123456'},
      ],
      newName: '',
      newNumber: '',
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
    const { persons, newName, newNumber } = this.state;
    return (
      <div>
        <h2>Puhelinluettelo</h2>
        <form onSubmit={this.submitForm()}>
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
        {persons.map((contact) => <Contact key={contact.name} {...contact} />)}
      </div>
    );
  }
}


export default App;
