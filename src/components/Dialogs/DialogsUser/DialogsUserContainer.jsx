import { connect } from 'react-redux';
import DialogsUser from './DialogsUser';

const mapStateToProps = (state) => {
  return {
    usersData: state.dialogsPage.users,
  }
}

const DialogsUserContainer = connect(mapStateToProps)(DialogsUser);

export default DialogsUserContainer;
