import React from 'react';
import axios from 'axios';
import noteService from './services/notes'
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

  addNote = (event) => {
    event.preventDefault()
    const noteObject = {
      content: this.state.newNote,
      date: new Date(),
      important: Math.random() > 0.5
    }
    noteService
      .create(noteObject)
      .then(noteService.getAll()
        .then(notes=>
          this.setState({
            notes,
            newNote: ''
          })
        )
      )
    };

  handleNoteChange = ({target})=>{
    const { value: newNote } = target;
    this.setState({newNote});
  }

  toggleImportanceOf = (id) => {
    return () => {
      const note = this.state.notes.find(n => n.id === id)
      const changedNote = { ...note, important: !note.important }
  
      noteService
        .update(id, changedNote)
        .then(changedNote => {
          const notes = this.state.notes.filter(n => n.id !== id)
          this.setState({
            notes: notes.concat(changedNote)
          })
        })
        .catch(error => {
          alert(`muistiinpano '${note.content}' on jo valitettavasti poistettu palvelimelta`)
          this.setState({ notes: this.state.notes.filter(n => n.id !== id) })
        })
    }
  }

  componentDidMount() {
    noteService
      .getAll().then(notes => this.setState({notes}));
  }
  toggleVisible = () => {
    this.setState({ showAll: !this.state.showAll })
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
          {notesToShow.map(note => <Note key={note.id} note={note} toggleImportance={this.toggleImportanceOf(note.id)} />)}
        </ul>
        <form onSubmit={this.addNote}>
          <input
            name="newNote"
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
