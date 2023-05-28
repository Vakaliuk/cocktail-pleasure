import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../loader/loader';

export default function Api(props) {
  const dispatch = useDispatch();
  const { drinks } = useSelector((state) => state.cocktails);
  const [isLoading, setIsLoading] = useState(false);

  const addDrinks = (data) => {
    dispatch({ type: 'GET_COCKTAILS', payload: data });
  };

  const options = {
    method: 'GET',
    url: props.url,
    params: props.params,
    headers: {
      'X-RapidAPI-Key': '02495f1089msh86e45e4714bb8b3p1b2231jsn687b04c99f03',
      'X-RapidAPI-Host': 'the-cocktail-db.p.rapidapi.com',
    },
  };

  async function fetchCocktails() {
    if (
      props.params.a !== '' &&
      props.params.i !== '' &&
      props.params.s !== ''
    ) {
      setIsLoading(true);
      try {
        const response = await axios.request(options);
        console.log(response.data);
        addDrinks(response.data);
      } catch (error) {
        console.error(error);
      }
      if (props.clearInput) {
        props.clearInput();
      }
      setIsLoading(false);
    }
  }

  return (
    <div>
      <button className="btn" onClick={fetchCocktails}>
        {props.forBtn}
      </button>
      <div>{isLoading ? <Loader /> : <></>}</div>
    </div>
  );
}
