import React from 'react';
import Button from './components/Button';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      persons: [
        { name: 'Arto Hellas' },
      ],
      newName: '',
    };
  }

  onInputUpdate() {
    return (e) => {
      this.setState({ newName: e.target.value });
    };
  }

  submitForm() {
    return (e) => {
      e.preventDefault();
      this.setState(({ newName, persons }) => ({
        newName: '',
        persons: persons.concat([{ name: newName }]),
      }));
    };
  }

  render() {
    const { persons, newName } = this.state;
    return (
      <div>
        <h2>Puhelinluettelo</h2>
        <form onSubmit={this.submitForm()}>
          <div>
            nimi: <input name="name" onChange={this.onInputUpdate()} value={newName} />
          </div>
          <div>
            <Button type="submit">lisää</Button>
          </div>
        </form>
        <h2>Numerot</h2>
        {persons.map(person=><p key={person.name}>{person.name}</p>)}
      </div>
    );
  }
}

export default App;
