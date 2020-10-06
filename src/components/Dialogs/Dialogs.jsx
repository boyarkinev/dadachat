import React from 'react';
import classes from './Dialogs.module.css';
import DialogsUserContainer from './DialogsUser/DialogsUserContainer';
import MessagesContainer from './Messages/MessagesContainer';
import MessageTextFormContainer from './MessageTextForm/MessageTextFormContainer';

const Dialogs = () => {

  return (
    <div className={classes.dialogs}>
      <h2 className={classes.title}>Мои диалоги</h2>
      <ul className={classes.dialogsUsers}>
        <DialogsUserContainer />
      </ul>
      <div className={classes.dialogsMessages}>
        <div>
          <MessagesContainer />
        </div>
        <div className={classes.formItems}>
          <button className={classes.attachment} />
          <MessageTextFormContainer />
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
