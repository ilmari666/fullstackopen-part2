import React from 'react';

const Yhteensa = props => (<p>yhteensä {
  props.osat.reduce((yhteensa, osa) => yhteensa + osa.tehtavia, 0)
} tehtävää
</p>);

export default Yhteensa;
