import { SELECT_RECIPE, UNSELECT_RECIPE } from '../actions/types';
import { Set } from 'immutable';

export default function(state=new Set(), action) {
    switch(action.type) {
        case SELECT_RECIPE:
            return state.add(action.payload);
        case UNSELECT_RECIPE:
            return state.remove(action.payload);
    }
    return state;
}