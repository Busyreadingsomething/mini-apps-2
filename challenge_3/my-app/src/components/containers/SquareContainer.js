import { connect } from 'react-redux';
import SquareView from '../SquareView';
import { revealSpace } from '../actions/actions';

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch, ownProps) => ({
  selectSquare: () => dispatch(revealSpace(ownProps.row, ownProps.col)),
});

const SquareContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SquareView);

export default SquareContainer;
