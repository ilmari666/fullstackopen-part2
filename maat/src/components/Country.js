import React from 'react';

const Country = ({country})=>{
  const { name, flag } = country;
  return <div>{name}<br /><img src={flag} width="30%" alt={name} /></div>;
};

export default Country;
