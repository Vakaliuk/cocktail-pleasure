import React from 'react';
import { Button, Popup } from 'semantic-ui-react';

export default function About() {
  return (
    <div>
      <Popup
        trigger={<button className="tryThese">About</button>}
        content="This application allows you to find cocktails by name, strength or ingredients.
Also, after choosing the desired drink from the list, you can see the recipe and the necessary ingredients for its creation"
        hideOnScroll
        className="pop-Up"
      />
    </div>
  );
}
