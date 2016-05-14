import { FETCH_SCAN_DATA } from '../actions/index';

export default function(state=null, action) {
    switch(action.type) {
        case FETCH_SCAN_DATA:
            return Object.assign({}, action.payload.data);
    }
    return state;
}