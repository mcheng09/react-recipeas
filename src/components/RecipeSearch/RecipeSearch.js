import React, { useState } from 'react';

import styles from './RecipeSearch.module.css'

const RecipeSearch = (props) => {
  const [searchRecipe, setSearchRecipe] = useState('')

  return (
    <div className={styles.RecipeSearch}>
      <form>
        <input className={styles.RecipeSearchInput} placeholder='Search Recipe' onChange={(e) => setSearchRecipe(e.target.value)}/>
        <input type='submit' value='Search!' onClick={e => props.clickHelper(e, searchRecipe)} />
        <input type='reset' value='Reset Search'/>
      </form>
    </div>
  )
}

export default RecipeSearch;
