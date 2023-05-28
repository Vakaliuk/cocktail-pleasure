import React from 'react';
import { createStore } from 'redux';

const initialState = { cocktails: [] };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_COCKTAILS':
      return { ...state, cocktails: action.payload };

    default:
      return state;
  }
};

export const store = createStore(reducer);
