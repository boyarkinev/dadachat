import React from 'react';
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
    addMessage: (text) => {
      dispatch(sendMessageCreator(text));
    },
    onNewMessageChange: (text) => {
      dispatch(updateNewMessageCreator(text));
    }
  }
}

const MessageTextFormContainer = connect(mapStatToProps, mapDispatchToProps)(MessageTextForm);

export default MessageTextFormContainer;
