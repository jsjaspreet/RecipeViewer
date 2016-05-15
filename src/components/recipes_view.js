import React from 'react';
import RecipeView from './recipe_view';

export default ({recipes, filter}) => {
    if (!recipes) {
        return <p>Loading</p>
    }

    const filteredRecipes = recipes.filter((recipe) => {
        let containsFilter = false;
        recipe.ingredients.forEach((ingredient) => {
            if(ingredient.toUpperCase().includes(filter.toUpperCase())) {
                containsFilter = true;
            }
        });
        return containsFilter;
    });

    return (
        <div className="recipes-display">
            {
                filteredRecipes.map(
                    (recipe) =>
                        <RecipeView
                            recipe={recipe}
                            key={recipe.name}
                        />)
            }
        </div>
    )
}