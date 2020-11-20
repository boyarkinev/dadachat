import reusable from '../../../styles/reusable.module.css';

import React from 'react';
import { Field, reduxForm } from 'redux-form';

import { Textarea } from '../../commons/FormsControls/FormsControls';
import { maxLengthCreator, required } from '../../../utils/validators/validators';

const maxLength = maxLengthCreator(120); 

const MessageTextForm = (props) => {

  const addNewMessage = (values) => {
    props.addMessage(values.newMessageText);
  };

  return (
      <AddMessageFormRedux onSubmit={addNewMessage} />
  );
};
const addMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} className={reusable.form}>
      <Field
        component={Textarea}
        validate={[required, maxLength]}
        name='newMessageText'
        placeholder='Введите текст'
        className={reusable.textarea}
      />
      <div className={reusable.send}>
        <button className={reusable.submitButton}>Отправить</button>
      </div>
    </form>
  );
}

const AddMessageFormRedux = reduxForm({form: 'dialogMessageTextForm'})(addMessageForm);

export default MessageTextForm;
