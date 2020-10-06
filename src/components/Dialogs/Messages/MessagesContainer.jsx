import { connect } from 'react-redux';
import Messages from './Messages';

const mapStatToProps = (state) => {
  return {
    messagesData: state.dialogsPage.messagesData,
    newMessageText: state.dialogsPage.newMessageText,
  }
}

const MessagesContainer = connect(mapStatToProps)(Messages);

export default MessagesContainer;
