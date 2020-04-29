import React from 'react';

import RecipeItem from './RecipeItem/RecipeItem';

const RecipeList = (props) => {

  let displayRecipes = props.filteredRecipes.map((recipe, i) => {
    return (
      <RecipeItem key={i} recipe={recipe} />
    )
  })

  return (
    <div>
      {displayRecipes}
    </div>
  )
}

export default RecipeList;
