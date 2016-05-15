import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/index';

class RecipeView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isChecked: false,
            recipe: props.recipe
        };
        this.onChange = this.onChange.bind(this);
    }


    componentWillReceiveProps(props) {
        let selected = false;
        props.selected_recipes.forEach((recipe) => {
            if(recipe.name == this.state.recipe.name) {
                selected=true;
            }
        });
        this.setState({isChecked: selected});
    }


    onChange() {
        let isChecked = !this.state.isChecked;
        if (isChecked)
            this.props.selectRecipe(this.state.recipe);
        else
            this.props.unselectRecipe(this.state.recipe);
        this.setState({isChecked});
    }

    render() {
        return (

            <div className="recipe-display">
                <div className="recipe-header">
                    <h3 className="dish-name">{this.state.recipe.name}</h3>
                    <h5 classname="cuisine-type">{this.state.recipe.type}</h5>
                    <h5 className="cook-time">{this.state.recipe.cook_time} min</h5>
                </div>
                <div className="recipe-ingredients">
                    {
                        this.state.recipe.ingredients.map
                        (ingredient =>
                                <span key={ingredient} className="recipe-ingredient">
                             {ingredient}
                        </span>
                        )
                    }
                </div>
                <div className="select-recipe"> Select
                    <input type="checkbox"
                           checked={this.state.isChecked}
                           onChange={this.onChange}
                           className="recipe-checkbox"
                    />
                </div>
            </div>
        );
    }
}

function mapStateToProps({selected_recipes}) {
    return {selected_recipes};
}

export default connect(mapStateToProps, actions)(RecipeView);