import React from 'react';

const RecipeItem = (props) => {
  return (
    <div>{props.recipe.recipe.label}</div>
  )
}

export default RecipeItem;
