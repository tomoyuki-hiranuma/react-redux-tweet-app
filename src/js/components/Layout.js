import React from "react";
import { connect } from "react-redux";

@connect((store) => {
  return {
    user: store.userReducer.user,
    userFetched: store.userReducer.fetched,
  };
})
export default class Layout extends React.Component {
  render() {
    console.log(this.props.user);
    console.log(this.props.userFetched);
    return (
      <h1>
        でけた
      </h1>
    );
  }
}