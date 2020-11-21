import React from 'react';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Profile from './Profile';
import { getUserProfile, getStatus, updateStatus, saveProfile, savePhoto } from './../../redux/profile-reducer';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';

class ProfileContainer extends React.Component {
  
  refreshProfile() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = this.props.authorizedUserId;
    }
    this.props.getUserProfile(userId);
    this.props.getStatus(userId);
  }

  componentDidMount() {
    this.refreshProfile();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.match.params.userId !== prevProps.match.params.userId) {
      this.refreshProfile();
    }
  }

  render() {
    return (
      <Profile {...this.props}
        isOwner={!this.props.match.params.userId}
        profile={this.props.profile}
        status={this.props.status}
        updateStatus={this.props.updateStatus}
        savePhoto={this.props.savePhoto}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  authorizedUserId: state.auth.userId,
  isAuth: state.auth.isAuth,
});

export default compose(
  connect(mapStateToProps, { getUserProfile, getStatus, updateStatus, savePhoto, saveProfile }),
  withRouter,
  withAuthRedirect
)(ProfileContainer)
/*
Как работает compose:
1. Берет Dialogs и перекидывает на обработку в withAuthRedirect
2. withAuthRedirect отдает результат, который compose передает в withRouter
3. Из withRouter результат передается в connect
*/
