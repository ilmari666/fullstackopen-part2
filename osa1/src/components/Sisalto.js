import React from 'react';
import Osa from './Osa';

const Sisalto = props => <div>{props.osat.map(osa => <Osa key={osa.nimi} {...osa} />)}</div>;

export default Sisalto;
