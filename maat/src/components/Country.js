import React from 'react';

const Country = ({country})=>{
  const { name, flag } = country;
  return <div>{name}<img src={flag} alt={name} /></div>;
};

export default Country;
