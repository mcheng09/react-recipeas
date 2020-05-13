import React, { useState } from 'react';
import axios from 'axios';

import api from './../../store/api'

import Aux from './../../hoc/Aux/Aux'
import RecipeSearch from './../../components/RecipeSearch/RecipeSearch'
import RecipeList from './../../components/RecipeList/RecipeList'

const RecipeContainer = () => {
  const [filteredRecipes, setFilteredRecipes] = useState([])

  const clickHelper = (e, search) => {
    e.preventDefault();

    axios.get(api + search)
      .then(function(res){
        console.log(res.data.hits)
        setFilteredRecipes(res.data.hits);
      })
  }

  return (
    <Aux>
      <h1>Search Recipe</h1>
      <RecipeSearch clickHelper={clickHelper }/>
      <RecipeList filteredRecipes={filteredRecipes}/>
    </Aux>
  )
}

export default RecipeContainer;
