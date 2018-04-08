import { connect } from 'react-redux';
import BoardView from '../BoardView';

const mapStateToProps = state => ({
  board: state.board,
});

const mapDispatchToProps = () => ({});

const BoardContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(BoardView);

export default BoardContainer;
