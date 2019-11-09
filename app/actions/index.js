/* ACTION TYPES */
const ADD_SCALE_INPUT = 'ADD_SCALE_INPUT';

/* ACTION CREATORS*/
export const addScaleInput = (input) => {
	return {
		type: ADD_SCALE_INPUT,
		input
	};
};
