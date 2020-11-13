import { connect } from 'react-redux';
import Friends from './Friends';

const mapStateToProps = (state) => {
  return {
    friendsList: state.friendsList
  }
}

const FriendsContainer = connect(mapStateToProps)(Friends)

export default FriendsContainer;
