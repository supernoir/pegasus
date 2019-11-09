import { connect } from 'react-redux';
//import { setVisibilityFilter } from '../actions'
import Score from '../score/Score';

const mapStateToProps = state => ({
	scales: state
});

/* const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch(setVisibilityFilter(ownProps.filter))
}) */

export default connect(
	mapStateToProps
)(Score);