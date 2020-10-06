import React from 'react';
import classes from './Dialogs.module.css';
// import DialogsUser from './DialogsUser/DialogsUser';
// import MessageContainer from './MessageContainer/MessageContainer';
import MessageTextFormContainer from './MessageTextForm/MessageTextFormContainer';

const Dialogs = (props) => {

  // const usersElements = props.state.dialogsPage.users.map((user, i) => (
  //   <DialogsUser name={user.name} id={user.id} key={i} />
  // ));

  // const messagesElements = props.state.dialogsPage.messagesData.map((message, i) => (
  //   <MessageContainer
  //     key={i}
  //     img={message.avatar}
  //     description='User Avatar'
  //     userName={message.userName}
  //     date={message.date}
  //     message={message.message}
  //   />
  // ));

  return (
    <div className={classes.dialogs}>
      <h2 className={classes.title}>Мои диалоги</h2>
      <ul className={classes.dialogsUsers}>
        {/* {usersElements} */}
      </ul>
      <div className={classes.dialogsMessages}>
        <div>
          {/* {messagesElements} */}
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
