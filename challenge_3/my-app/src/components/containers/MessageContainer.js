import { connect } from 'react-redux';
import MessageView from '../MessageView';

const mapStateToProps = ({ loss, gameOver }) => ({
  loss,
  gameOver,
});

const mapDispatchToProps = () => ({});

const MessageContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(MessageView);

export default MessageContainer;
