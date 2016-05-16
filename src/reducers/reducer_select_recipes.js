import { SELECT_RECIPE, UNSELECT_RECIPE, FETCH_SELECTIONS } from '../actions/types';
import { Set } from 'immutable';

export default function(state=new Set(), action) {
    switch(action.type) {
        case SELECT_RECIPE:
            state = state.add(action.payload);
            localStorage.setItem('recipe-viewer-selections', JSON.stringify(state));
            return state;
        case UNSELECT_RECIPE:
            state = state.filter((recipe) => {
                return action.payload.name != recipe.name
            });
            localStorage.setItem('recipe-viewer-selections', JSON.stringify(state));
            return state;
        case FETCH_SELECTIONS:
            return action.payload;
    }
    return state;
}