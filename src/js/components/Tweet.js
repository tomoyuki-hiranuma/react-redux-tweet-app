import React from "react";

export default class Tweet extends React.Component {
  render() {
    return (
      <div>
        <textarea rows="10" cols="55"></textarea>
        <button>submit</button>
      </div>
    )
  }
}