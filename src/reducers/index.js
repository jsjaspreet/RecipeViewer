import {combineReducers} from 'redux';
import RecipeReducer from './reducer_fetch_recipes';
import FilterReducer from './reducer_filter_recipes';

const rootReducer = combineReducers({
    recipes: RecipeReducer,
    filter: FilterReducer
});

export default rootReducer;
