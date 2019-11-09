export const COMPILE_SCALES = 'COMPILE_SCALES';

export const compileScales = scales => {
	return {
		type: COMPILE_SCALES,
		scales
	};
};
