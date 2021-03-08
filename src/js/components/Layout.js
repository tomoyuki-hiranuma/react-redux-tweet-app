import React from "react";
import { connect } from "react-redux";
import { fetchUser } from "../actions/userActions";
import { fetchTweets } from "../actions/tweetsActions";

import Tweet from "./Tweet";

@connect((store) => {
  return {
    user: store.userReducer.user,
    userFetched: store.userReducer.fetched,
    tweets: store.tweetsReducer.tweets,
    tweetFetching: store.tweetsReducer.fetching,
  };
})
export default class Layout extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchUser());
  };
  componentDidMount() {
    this.props.dispatch(fetchTweets());
  };
  render() {
    const { user, tweets, tweetFetching } = this.props;
    if(tweetFetching === true) {
      return <div>loading...</div>
    }
    const mappedTweets = tweets.map(tweet => <li key={tweet.id}>{tweet.text}</li>);
    return (
      <div>
        <h1>{user.name}</h1>
        <ul>{mappedTweets}</ul>
        <Tweet />
      </div>
    )
  }
}