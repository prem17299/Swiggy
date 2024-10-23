import React from "react";
import { UserContext } from "../utils/UserContext";

export class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { name, location, age } = this.props;
    return (
      <div className="bg-gray-200 p-6 rounded-lg shadow-lg text-center max-w-lg mx-auto">
        <h2 className="text-2xl font-bold mb-2">Name: {name}</h2>
        <h3 className="text-lg mb-2">Location: {location}</h3>
        <h4 className="text-lg mb-4">Age: {age}</h4>
        <div>
          <UserContext.Consumer>
            {({ loggedInUser }) => (
              <h1 className="font-bold text-xl text-gray-800">
                Logged In User: {loggedInUser}
              </h1>
            )}
          </UserContext.Consumer>
        </div>
      </div>
    );
  }
}
