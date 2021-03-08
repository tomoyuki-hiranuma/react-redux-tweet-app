import React from "react";
import { connect } from "react-redux";
import { addTweet } from "../actions/tweetsActions";

@connect((store) => {
  return {
    user: store.userReducer.user,
    userFetched: store.userReducer.fetched,
    tweets: store.tweetsReducer.tweets,
    tweetFetching: store.tweetsReducer.fetching,
  };
})
export default class Tweet extends React.Component {
  constructor() {
    super();
    this.state = {
      text: "",
    };
  }

  onHandleChange(e) {
    console.log(e.target.value);
    this.setState({
      text: e.target.value
    })
  }
  submitTweet() {
    this.props.dispatch(addTweet())
  }
  render() {
    return (
      <div>
        <div>
          <textarea rows="10" cols="55" value={this.state.text} onChange={e => this.onHandleChange(e)}></textarea>
        </div>
        <div>
          <button onClick={this.submitTweet.bind(this)}>submit</button>
        </div>
      </div>
    );
  }
}