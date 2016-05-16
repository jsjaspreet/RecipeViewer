import React, {Component} from 'react';
import SearchBar from '../containers/search_bar';
import { connect } from 'react-redux';
import RecipesView from './recipes_view';
import IngredientsView from './ingredients_view';
import * as actions from '../actions';

class App extends Component {
    constructor(props) {
        super(props);
    }
    
    componentWillMount() {
        this.props.fetchRecipes();
        this.props.fetchSelections();
    }
    

    render() {
        return (
            <div id="app">
                <h1 id="app-title">Recipe Viewer</h1>
                <div id="app-container">
                <span className="ingredients-view">
                    <IngredientsView />
                </span>
                <span className="recipe-container">
                    <SearchBar />
                    <RecipesView 
                        recipes={this.props.recipes}
                        filter={this.props.filter}
                    />
                </span>
                </div>
            </div>
        );
    }
}

function mapStateToProps({recipes, filter}) {
    return {recipes, filter};
}

export default connect(mapStateToProps, actions)(App);



