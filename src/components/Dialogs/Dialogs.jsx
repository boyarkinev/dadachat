import classes from './Dialogs.module.css';
import reusable from '../../styles/reusable.module.css';

import React from 'react';

import DialogsUserContainer from './DialogsUser/DialogsUserContainer';
import MessagesContainer from './Messages/MessagesContainer';
import MessageTextFormContainer from './MessageTextForm/MessageTextFormContainer';

const Dialogs = () => {

  return (
    <div>
      <h2 className={reusable.pageTitle}>Мои диалоги</h2>
      <div className={classes.dialogs}>
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
    </div>
  );
};

export default Dialogs;
