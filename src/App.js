import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

import Layout from './hoc/Layout/Layout'
import HomePage from './pages/Home/Home';
import AboutPage from './pages/About/About';
import RecipeContainer from './containers/RecipeContainer/RecipeContainer';
import ContactPage from './pages/Contact/Contact';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
            <Switch>
              <Route path='/contact' component={ContactPage} />
              <Route path='/recipes' component={RecipeContainer} />
              <Route path='/about' component={AboutPage} />
              <Route path='/' component={HomePage} />
            </Switch>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
