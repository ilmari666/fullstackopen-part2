class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      notes: props.notes
    }
  }

  addNote = (event) => {
    event.preventDefault()
    console.log('nappia painettu')
  }

  render() {
    return (
      <div>
        <h1>Muistiinpanot</h1>
        <ul>
          {this.state.notes.map(note => <Note key={note.id} note={note} />)}
        </ul>
        <form onSubmit={this.addNote}>
          <input/>
          <button type="submit">tallenna</button>
        </form>
      </div>
    )
  }
}