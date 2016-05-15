import {combineReducers} from 'redux';
import RecipeReducer from './reducer_fetch_recipes';
import FilterReducer from './reducer_filter_recipes';
import SelectionReducer from './reducer_select_recipes';

const rootReducer = combineReducers({
    recipes: RecipeReducer,
    filter: FilterReducer,
    selected_recipes: SelectionReducer 
});

export default rootReducer;
