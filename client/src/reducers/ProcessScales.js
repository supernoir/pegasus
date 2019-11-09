import { addScaleInput } from '../actions';

const ProcessScales = (state = [], action) => {
	switch (action.type) {
		case  'ADD_SCALE_INPUT':
			return [
				...state,
				{
					input: action.input,
				}
			];
		default:
			return state;
	}
};

export default ProcessScales;


