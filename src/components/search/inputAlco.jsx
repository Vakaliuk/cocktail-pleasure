import React, { useState } from 'react';
import Api from '../api/api';

export default function InputAlco({ options, defaultValue, value, onChange }) {
  return (
    <div>
      <select value={value} onChange={(event) => onChange(event.target.value)}>
        <option disabled value="">
          {defaultValue}
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.text}
          </option>
        ))}
      </select>
    </div>
  );
}
