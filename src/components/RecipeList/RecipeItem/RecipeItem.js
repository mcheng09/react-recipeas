import React from 'react';

import RecipeIngredients from './RecipeIngredients/RecipeIngredients'
import styles from './RecipeItem.module.scss'

const RecipeItem = (props) => {
  return (
    <div className={styles.RecipeItem}>
      <div className={styles.RecipeImage} style={{ backgroundImage: `url(${props.recipe.recipe.image})`}} alt={props.recipe.recipe.label} ></div>
      <div>
        <h3>{props.recipe.recipe.label}</h3>
        <p>Calories: {props.recipe.recipe.calories.toFixed(0)}</p>
        <RecipeIngredients ingredients={props.recipe.recipe.ingredientLines}/>
      </div>
    </div>
  )
}

export default RecipeItem;
