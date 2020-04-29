import React, { useState } from 'react';
import axios from 'axios';

import RecipeSearch from './../../components/RecipeSearch/RecipeSearch'
import RecipeList from './../../components/RecipeList/RecipeList'

const RecipeContainer = () => {
  const [filteredRecipes, setFilteredRecipes] = useState([])

  const clickHelper = (e, search) => {
    e.preventDefault();

    axios.get('https://api.edamam.com/search?q=' + search + '&app_id='+ process.env.REACT_APP_EDAMAM_APP_ID + '&app_key=' + process.env.REACT_APP_EDAMAM_API_KEY)
      .then(function(res){
        console.log(res.data.hits)
        setFilteredRecipes(res.data.hits);
      })
  }

  return (
    <div>
      <h1>ReciPeas</h1>
      <RecipeSearch clickHelper={clickHelper }/>
      <RecipeList filteredRecipes={filteredRecipes}/>
    </div>
  )
}

export default RecipeContainer;
