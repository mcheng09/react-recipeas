import React, { useState } from 'react';

import Form from 'react-bootstrap/form'
import Button from 'react-bootstrap/button'

const RecipeSearch = (props) => {
  const [searchRecipe, setSearchRecipe] = useState('')

  return (
    <Form>
      <Form.Control type='text' placeholder='Search Recipe' onChange={(e) => setSearchRecipe(e.target.value)}/>
      <Button type='submit' onClick={e => props.clickHelper(e, searchRecipe)}>Search</Button>
      <Button type='reset'>Reset</Button>
    </Form>
  )
}

export default RecipeSearch;
