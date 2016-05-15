import React, {Component} from 'react';

export default class RecipeView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isChecked:false,
            recipe: props.recipe
        };
        this.onChange = this.onChange.bind(this);
    }

    onChange() {
        this.setState({isChecked: !this.state.isChecked});
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
                           onClick={this.onChange}
                           className="recipe-checkbox"
                    />
                </div>
            </div>
        )
            ;
    }
}