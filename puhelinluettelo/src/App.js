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

  render() {
    return (
      <div>
        <h2>Puhelinluettelo</h2>
        <form onSubmit={(e)=>{
          e.preventDefault();
          e.persist()
          console.log(e);
        }}>
          <div>
          nimi: <input name="name" onInput={(e) => { console.log(e); e.persist()}} />
          </div>
          <div>
            <Button
              type="submit"
              >
            lisää
            </Button>
          </div>
        </form>
        <h2>Numerot</h2>
        ...
      </div>
    );
  }
}

export default App;
