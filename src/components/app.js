import React, { Component } from 'react';
import SearchBar from '../containers/search_bar';
import RecipesView from './recipes_view';
import Recipes from '../../recipes';


export default class App extends Component {
  render() {
    return (
        <div id="app">
            <h1 id="app-title">Recipe Viewer</h1>
            <div id="app-container">
                <span>
                    { /* Ingredient View*/} 
                </span>
                <span>
                    <RecipesView recipes={Recipes}/>
                </span>
            </div>
        </div>
    );
  }
}


