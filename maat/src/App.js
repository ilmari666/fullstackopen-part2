import React, { Component } from 'react';
import axios from 'axios';
import Input from './components/Input';
import FilteredCountries from './components/FilteredCountries';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      results: [],
      filter: '',
    };
  }

  onInputUpdate = (e) => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  getSetFilter = filter => () => this.setState({filter});

  componentDidMount() {
    axios.get('https://restcountries.eu/rest/v2/all').then(result => {
      const { data: countries } = result;
      this.setState({countries});
    });
  }


  render() {
    const { filter, countries } = this.state;
    return (
      <form onSubmit={this.submitForm}>
      <Input label="rajaa:" name="filter" onChange={this.onInputUpdate} value={filter} />
      <FilteredCountries filter={filter} countries={countries} onClick={this.getSetFilter}/> 
    </form>
    );
  }
}

export default App;
