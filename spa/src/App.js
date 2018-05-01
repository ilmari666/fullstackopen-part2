import React from 'react';
import axios from 'axios';
import Note from './components/Note';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
      newNote: '',
      showAll: true,
    };
    console.log('constructor');
  }

  componentDidMount() {
    console.log('will mount');
    axios
      .get('http://localhost:3001/notes')
      .then((response) => {
        console.log('promise fulfilled');
        this.setState({ notes: response.data });
      });
  }

  render() {
    console.log('render');
    const notesToShow =
      this.state.showAll ?
        this.state.notes :
        this.state.notes.filter(note => note.important === true);

    const label = this.state.showAll ? 'vain tärkeät' : 'kaikki';

    return (
      <div>
        <h1>Muistiinpanot</h1>
        <div>
          <button onClick={this.toggleVisible}>
            näytä {label}
          </button>
        </div>
        <ul>
          {notesToShow.map(note => <Note key={note.id} note={note} />)}
        </ul>
        <form onSubmit={this.addNote}>
          <input
            value={this.state.newNote}
            onChange={this.handleNoteChange}
          />
          <button type="submit">tallenna</button>
        </form>
      </div>
    );
  }
}

export default App;
