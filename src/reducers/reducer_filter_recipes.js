import { APPLY_FILTER } from '../actions/types';

export default function(state='', action) {
    switch(action.type) {
        case APPLY_FILTER:
            return action.payload;
    }
    return state;
}