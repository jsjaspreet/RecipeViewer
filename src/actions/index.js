import recipes from '../../recipes';
import { FETCH_RECIPES } from './types';
import { APPLY_FILTER } from './types';


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