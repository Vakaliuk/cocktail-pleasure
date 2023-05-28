import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Api from '../api/api';
import { Dropdown } from 'semantic-ui-react';

export default function SearchByAlco() {
  const forBtn = 'find by ingredients';

  const options = [
    { key: 1, text: 'Vodka', value: 'Vodka' },
    { key: 2, text: 'Gin', value: 'Gin' },
    { key: 3, text: 'Tequila', value: 'Tequila' },
    { key: 4, text: 'Light rum', value: 'Light rum' },
    { key: 5, text: 'Rum', value: 'Rum' },
    { key: 6, text: 'Coffee liqueur', value: 'Coffee liqueur' },
    { key: 7, text: 'Cognac', value: 'Cognac' },
    { key: 8, text: 'Beer', value: 'Beer' },
  ];
  const [selectStrength, setSelectStrength] = useState('');
  const [params, setParams] = useState({
    i: '',
  });

  useEffect(() => {
    setParams({ ...params, i: selectStrength });
  }, [selectStrength]);

  const updateParams = (event, data) => {
    setSelectStrength(data.value);
  };

  const url = 'https://the-cocktail-db.p.rapidapi.com/filter.php';

  return (
    <div>
      <Dropdown
        style={{ width: '200px', margin: '0 auto' }}
        fluid
        placeholder="Ingredients"
        value={selectStrength}
        selection
        onChange={updateParams}
        options={options}
      />
      <Api forBtn={forBtn} name={selectStrength} url={url} params={params} />
    </div>
  );
}
