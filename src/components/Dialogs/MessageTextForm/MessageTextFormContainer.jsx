import { sendMessageCreator, updateNewMessageCreator } from '../../../redux/dialogs-reducer';
import MessageTextForm from './MessageTextForm';
import { connect } from 'react-redux';

const mapStatToProps = (state) => {
  return {
    messagesData: state.dialogsPage.messagesData,
    newMessageText: state.dialogsPage.newMessageText,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addMessage: () => {
      const action = sendMessageCreator()
      dispatch(action);
    },
    updateNewMessageText: (text) => {
      const action = updateNewMessageCreator(text)
      dispatch(action);
    }
  }
}

const MessageTextFormContainer = connect(mapStatToProps, mapDispatchToProps)(MessageTextForm);

export default MessageTextFormContainer;
