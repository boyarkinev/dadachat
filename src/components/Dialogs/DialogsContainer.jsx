import { compose } from 'redux';
import { connect } from 'react-redux';

import Dialogs from './Dialogs';
import { sendMessageCreator } from '../../redux/dialogs-reducer';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';

const mapStateToProps = (state) => ({
  dialogsPage: state.dialogsPage,
});

const mapDispatchToProps = (dispatch) => {
  return {
    senMessage: () => {
      dispatch(sendMessageCreator());
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
