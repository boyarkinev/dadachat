import { connect } from 'react-redux';
import Friends from './Friends';

const mapStatToProps = (state) => {
  return {
    friendsList: state.friendsList
  }
}

const FriendsContainer = connect(mapStatToProps)(Friends)

export default FriendsContainer;
