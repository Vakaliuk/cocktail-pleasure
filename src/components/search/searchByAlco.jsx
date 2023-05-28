import React, { useState, useEffect } from 'react';
import Api from '../api/api';
import InputAlco from './inputAlco';
import { Dropdown } from 'semantic-ui-react';

export default function SearchByAlco() {
  const options = [
    { key: 'alco', text: 'Alcoholic', value: 'Alcoholic' },
    { key: 'nona', text: 'Non alcoholic', value: 'Non alcoholic' },
  ];

  const forBtn = 'find by strength';

  const [selectStrength, setSelectStrength] = useState('');
  const [params, setParams] = useState({
    a: '',
  });

  useEffect(() => {
    setParams({ ...params, a: selectStrength });
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
        value={selectStrength}
        selection
        onChange={updateParams}
        options={options}
        placeholder="Stregth"
      />
      <Api name={selectStrength} url={url} params={params} forBtn={forBtn} />
    </div>
  );
}
