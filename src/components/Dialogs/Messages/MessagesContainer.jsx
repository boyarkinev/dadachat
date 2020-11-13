import { connect } from 'react-redux';
import Messages from './Messages';

const mapStateToProps = (state) => {
  return {
    messagesData: state.dialogsPage.messagesData,
    newMessageText: state.dialogsPage.newMessageText,
  }
}

const MessagesContainer = connect(mapStateToProps)(Messages);

export default MessagesContainer;
