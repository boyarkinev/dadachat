import { sendMessageCreator } from '../../../redux/dialogs-reducer';
import MessageTextForm from './MessageTextForm';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    messagesData: state.dialogsPage.messagesData,
    newMessageText: state.dialogsPage.newMessageText,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addMessage: (newMessageText) => {
      const action = sendMessageCreator(newMessageText)
      dispatch(action);
    },
  }
}

const MessageTextFormContainer = connect(mapStateToProps, mapDispatchToProps)(MessageTextForm);

export default MessageTextFormContainer;
