// create your App component here
import React from "react";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      peopleInSpace: []
    };
  }

  render() {
    return (
      <div>
        {this.state.peopleInSpace.map((person, id) => (
          <h1 key={id}>{person.name}</h1>
        ))}
      </div>
    );
  }

  componentDidMount() {
    fetch("http://api.open-notify.org/astros.json")
      .then(response => response.json())
      .then(({ people }) => this.setState({ peopleInSpace: people }));
  }
}
