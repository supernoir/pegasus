import { compileScales } from '../actions/compileScales';

const AssembleScales = (state = [], action) => {
	switch (action.type) {
		case  'COMPILE_SCALES':
			return [
				...state,
				{
					scales: action.compileScales,
				}
			];
		default:
			return state;
	}
};

export default AssembleScales;


