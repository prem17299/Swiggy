import React from "react";

export class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { name, location, age } = this.props;
    return (
      <div className="user-card m-4 p-4 rounded-lg border border-solid border-black">
        <h2> Name : {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Age : {age}</h4>
      </div>
    );
  }
}
