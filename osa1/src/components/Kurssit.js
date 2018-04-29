import React from 'react';
import Kurssi from './Kurssi';

const Kurssit = ({ kurssit }) => kurssit.map(kurssi => <Kurssi key={kurssi.nimi} kurssi={kurssi} />);

export default Kurssit;
