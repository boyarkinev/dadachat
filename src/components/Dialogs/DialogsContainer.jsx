import {
  sendMessageCreator,
  updateNewMessageCreator,
} from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

const mapStateToProps = (state) => ({
  dialogsPage: state.dialogsPage,
});

const mapDispatchToProps = (dispatch) => {
  return {
    senMessage: () => {
      dispatch(sendMessageCreator());
    },
    updateNewMessageText: (text) => {
      dispatch(updateNewMessageCreator());
    },
  };
};

export default compose(
  connect( mapStateToProps, mapDispatchToProps ),
  withAuthRedirect
)(Dialogs);
/*
Как работает compose:
1. Берет Dialogs и перекидывает на обработку в withAuthRedirect
2. withAuthRedirect отдает результат, который compose передает в connect
*/
