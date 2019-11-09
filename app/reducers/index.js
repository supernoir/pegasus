import { combineReducers } from 'redux';
import ProcessScales from './ProcessScales';
import AssembleScales from './AssembleScales';

export const rootReducer = combineReducers({
	ProcessScales, AssembleScales });

export default rootReducer;