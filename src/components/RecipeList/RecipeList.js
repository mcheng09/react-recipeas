import React from 'react';

import RecipeItem from './RecipeItem/RecipeItem';
import styles from './RecipeList.module.scss'

const RecipeList = (props) => {

  let displayRecipes = props.filteredRecipes.map((recipe, i) => {
    return (
      <RecipeItem key={i} recipe={recipe} />
    )
  })

  return (
    <div className={styles.RecipeList}>
      {displayRecipes}
    </div>
  )
}

export default RecipeList;
