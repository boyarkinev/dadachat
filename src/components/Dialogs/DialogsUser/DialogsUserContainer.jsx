import { connect } from 'react-redux';
import DialogsUser from './DialogsUser';

let mapStatToProps = (state) => {
  return {
    usersData: state.dialogsPage.users,
  }
}

const DialogsUserContainer = connect(mapStatToProps)(DialogsUser);

export default DialogsUserContainer;
