import React from 'react';
import SearchByName from './searchByName';
import SearchByIng from './searchByIng';
import SearchByAlco from './searchByAlco';

export default function Searches() {
  return (
    <div className="searches">
      <SearchByIng />
      <SearchByName />
      <SearchByAlco />
    </div>
  );
}
