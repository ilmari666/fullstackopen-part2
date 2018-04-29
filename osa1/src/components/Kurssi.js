import React from 'react';
import Otsikko from './Otsikko';
import Sisalto from './Sisalto';
import Yhteensa from './Yhteensa';

const Kurssi = ({kurssi})=>{
  const { osat, nimi } = kurssi;
  return (<div>
    <Otsikko kurssi={nimi} />
    <Sisalto osat={osat} />
    <Yhteensa osat={osat} />
  </div>);
}

export default Kurssi;
