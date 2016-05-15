import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Set} from 'immutable';

class IngredientsView extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.selected_recipes.isEmpty()) {
            return (
                <div>
                    Please select a recipe.
                </div>
            )
        }
        else {
            let ingredientSet = new Set();

            this.props.selected_recipes.forEach((recipe) => {
                recipe.ingredients.forEach((ingredient) => {
                    ingredientSet = ingredientSet.add(ingredient);
                });
            });

            ingredientSet = ingredientSet.sort();


            return (
                <ul className="ingredient-list list-group">
                    {
                        ingredientSet.map((ingredient) => <li className="list-group-item" key={ingredient}>{ingredient}</li>)
                    }
                </ul>
            )
        }
    }
}

function mapStateToProps({selected_recipes}) {
    return {selected_recipes};
}

export default connect(mapStateToProps)(IngredientsView);
