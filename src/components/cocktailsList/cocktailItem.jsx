import React, { useState } from 'react';
import { Divider, Item } from 'semantic-ui-react';
import { useSelector } from 'react-redux';
import ModalContent from './modal';
import axios from 'axios';

export default function CocktailItem() {
  const { drinks } = useSelector((state) => state.cocktails);
  const [selectedDrink, setSelectedDrink] = React.useState(null);

  async function fetchCocktailDetails(id) {
    const options = {
      method: 'GET',
      url: 'https://the-cocktail-db.p.rapidapi.com/lookup.php',
      params: { i: id },
      headers: {
        'X-RapidAPI-Key': '02495f1089msh86e45e4714bb8b3p1b2231jsn687b04c99f03',
        'X-RapidAPI-Host': 'the-cocktail-db.p.rapidapi.com',
      },
    };

    try {
      const response = await axios.request(options);
      const { drinks } = response.data;
      return drinks[0];
    } catch (error) {
      console.error(error);
    }
  }

  async function handleOpenModal(drink) {
    const updatedDrink = await fetchCocktailDetails(drink.idDrink);
    setSelectedDrink(updatedDrink);
  }

  function handleCloseModal() {
    setSelectedDrink(null);
  }

  function renderDrinks() {
    if (drinks && drinks.length > 0) {
      return (
        <div>
          {drinks.map((drink) => (
            <Item.Group key={drink.idDrink}>
              <Divider />
              <Item>
                <Item.Image size="small" src={drink.strDrinkThumb} />
                <Item.Content>
                  <Item.Header as="a" onClick={() => handleOpenModal(drink)}>
                    {drink.strDrink}
                  </Item.Header>
                </Item.Content>
              </Item>
              <Divider />
            </Item.Group>
          ))}
        </div>
      );
    } else {
      return (
        <p className="list-Empty">
          List empty...Choose filters or enter the coctails name
        </p>
      );
    }
  }

  return (
    <div className="cocktail-Item">
      {renderDrinks()}
      {selectedDrink && (
        <ModalContent drink={selectedDrink} onClose={handleCloseModal} />
      )}
    </div>
  );
}
