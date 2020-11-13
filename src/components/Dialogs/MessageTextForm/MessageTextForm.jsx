import React from 'react';
import { Field, reduxForm } from 'redux-form';
import classes from './MessageTextForm.module.css';
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
    <form onSubmit={props.handleSubmit} className={classes.form}>
      <Field
        component={Textarea}
        validate={[required, maxLength]}
        name='newMessageText'
        placeholder='Введите текст'
        className={classes.message}
      />
      <div className={classes.send}>
        <button className={classes.button}>Отправить</button>
      </div>
    </form>
  );
}

const AddMessageFormRedux = reduxForm({form: 'dialogMessageTextForm'})(addMessageForm);

export default MessageTextForm;
