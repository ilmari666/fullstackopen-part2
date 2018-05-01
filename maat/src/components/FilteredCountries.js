import React from 'react';
import Country from './Country';

const matchName = (search) => {
  const filter = search.toLowerCase();
  return ({name}) => name.toLowerCase().indexOf(filter) !== -1;
};

const FilteredCountries = ({ filter, countries }) => {
  if (filter !== '') {
    const matcher = matchName(filter);
    const matches = countries.filter(matcher);

    if (matches.length < 10) {
      if (matches.length === 1) {
        return <Country country={matches[0]} />
      }
      return matches.map(({ name }) => <div>{name}</div>);
    }
  }
  return (<div>Too many matches, specify another filter</div>);
};

export default FilteredCountries;
