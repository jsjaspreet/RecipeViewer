import React from 'react';
import RecipeView from './recipe_view';

export default ({recipes}) => {
    if (!recipes) {
        return <p>Loading</p>
    }

    return (
        <div>
            {
                recipes.map(
                    (recipe) =>
                        <RecipeView
                            recipe={recipe}
                            key={recipe.name}
                        />)
            }
        </div>
    )
}