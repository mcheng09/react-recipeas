import React from 'react';

const RecipeIngredients = (props) => {

  const ingredients = props.ingredients.map((item, i) => {
    return <li key={'ingredient-' + i}>{item}</li>
  })

  console.log(props.ingredients[0])

  return (
    <div>
      <p>Recipe Ingredients</p>
      <ul>
        {ingredients}
      </ul>
    </div>
  )
}

export default RecipeIngredients;
