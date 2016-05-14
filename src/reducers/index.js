import {combineReducers} from 'redux';
import ScanDataReducer from './reducer_fetch_scan_data';

const rootReducer = combineReducers({
    scanData: ScanDataReducer
});

export default rootReducer;
