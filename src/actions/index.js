import recipes from '../../recipes';
import { FETCH_RECIPES } from './types';
import { APPLY_FILTER } from './types';
import { SELECT_RECIPE } from './types';
import { UNSELECT_RECIPE } from './types';
import { FETCH_SELECTIONS } from './types';
import { Set } from 'immutable';


export function fetchRecipes() {
    return {
        type: FETCH_RECIPES,
        payload: recipes
    }
}

export function applyFilter(filter) {
    return {
        type: APPLY_FILTER,
        payload: filter
    }
}

export function selectRecipe(recipe) {
    return {
        type: SELECT_RECIPE,
        payload: recipe
    }
}
export function unselectRecipe(recipe) {
    return {
        type: UNSELECT_RECIPE,
        payload: recipe
    }
}

export function fetchSelections() {
    const selections = localStorage.getItem('recipe-viewer-selections');
    const selectedRecipes = new Set(JSON.parse(selections));
    return {
        type: FETCH_SELECTIONS,
        payload: selectedRecipes 
    }
}
