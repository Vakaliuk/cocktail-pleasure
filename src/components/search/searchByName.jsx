import React, { useState, useEffect } from 'react';
import { Input } from 'semantic-ui-react';
import Api from '../api/api';
import { Button, Popup } from 'semantic-ui-react';

export default function SearchByName() {
  const [usersCocktail, setCocktail] = useState('');
  const [params, setParams] = useState('');
  const forBtn = 'find by name';

  useEffect(() => {
    setParams({ ...params, s: usersCocktail });
  }, [usersCocktail]);

  function handleInputChange(e) {
    setCocktail(e.target.value);
  }

  function handlePaste(e) {
    e.preventDefault();
    const pastedText = e.clipboardData.getData('text/plain');
    setCocktail(pastedText);
  }

  const url = 'https://the-cocktail-db.p.rapidapi.com/search.php';

  function clearInput() {
    setCocktail('');
  }

  return (
    <div>
      <Input
        style={{ width: '200px', margin: '0 auto' }}
        type="text"
        placeholder="Cocktails name"
        value={usersCocktail}
        onChange={handleInputChange}
        onPaste={handlePaste}
        className="myInput"
      ></Input>

      <Api
        clearInput={clearInput}
        params={params}
        setCocktail={setCocktail}
        url={url}
        forBtn={forBtn}
      />

      <Popup
        trigger={
          <button className=" tryThese">Don`t know which? Try these</button>
        }
        content="Radler, Addison Special, Mother's Milk, Jitterbug, 252, Blue Lagoon"
        on="click"
        hideOnScroll
      />
    </div>
  );
}
