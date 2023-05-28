import React from 'react';
import { Image, Modal } from 'semantic-ui-react';
import axios from 'axios';

export default function ModalContent({ drink, onClose, id }) {
  return (
    <Modal open={true} onClose={onClose}>
      <Modal.Header>Cocktail "{drink.strDrink}"</Modal.Header>
      <Modal.Content image>
        <Image size="medium" src={drink.strDrinkThumb} wrapped />
        <Modal.Description>
          <h4>How to make:</h4>
          <p>{drink.strInstructions}</p>
          <h4>Ingredients:</h4>
          <p>{drink.strIngredient1}</p>
          <p>{drink.strIngredient2}</p>
          <p>{drink.strIngredient3}</p>
          <p>{drink.strIngredient4}</p>
          <p>{drink.strIngredient5}</p>
          <p>{drink.strIngredient6}</p>
          <p>{drink.strIngredient7}</p>
          <p>{drink.strIngredient8}</p>
          <p>{drink.strIngredient9}</p>
          <p>{drink.strIngredient10}</p>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <button className="btn" onClick={onClose}>
          Back
        </button>
      </Modal.Actions>
    </Modal>
  );
}
