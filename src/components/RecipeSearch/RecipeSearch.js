import React, { useState } from 'react';

const RecipeSearch = (props) => {
  const [searchRecipe, setSearchRecipe] = useState('')

  return (
    <div>
      <form>
        <input placeholder='Search Recipe' style={{ marginRight: '8px'}} onChange={(e) => setSearchRecipe(e.target.value)}/>
        <input type='submit' value='Search!' onClick={e => props.clickHelper(e, searchRecipe)} />
      </form>
    </div>
  )
}

export default RecipeSearch;
