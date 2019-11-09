import { connect } from 'react-redux';
import { addScaleInput } from '../actions';
import { compileScales } from '../actions/compileScales';
import Scale from '../scale/Scale';

const mapStateToProps = state => {
	return {
		input   : state.ProcessScales,
		scales: state.AssembleScales
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		addScaleInput: (input) => dispatch(input),
		compileScales: (scales) => dispatch(scales)
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Scale);