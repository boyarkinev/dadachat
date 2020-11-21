import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';

import {
  follow,
  unfollow,
  toggleFollowingProgress,
  setCurrentPage,
  requestUsers
} from '../../redux/users-reducer';
import Users from './Users';
import Preloader from '../commons/Preloader/Preloader';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import {
  getUsers,
  getPageSize,
  getTotalItemsCount,
  getCurrentPage,
  getIsFetching,
  getFollowingInProgress,
} from '../../redux/users-selectors';
import classes from './Users.module.css';

class UsersContainer extends React.Component {
  componentDidMount() {
    const {currentPage, pageSize} = this.props;
    this.props.requestUsers(currentPage, pageSize);
  } // Обработали данные через thunk

  onPageChanged = (pageNumber) => {
    const {pageSize} = this.props
    this.props.setCurrentPage(pageNumber);
    this.props.requestUsers(pageNumber, pageSize);
  }; // Обработали данные через thunk

  render() {
    return (
      <>
        <div className={classes.preloaderContainer}>
          {this.props.isFetching ? <Preloader /> : null}
        </div>
        <Users
          totalItemsCount={this.props.totalItemsCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          onPageChanged={this.onPageChanged}
          users={this.props.users}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
          followingInProgress={this.props.followingInProgress}
        />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalItemsCount: getTotalItemsCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state),
  };
};


export default compose(
  withAuthRedirect,
  connect(mapStateToProps, { follow, unfollow, setCurrentPage, toggleFollowingProgress, requestUsers })
)(UsersContainer)