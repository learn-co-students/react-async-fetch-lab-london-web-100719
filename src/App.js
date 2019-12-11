import React, { Component } from "react";

class App extends Component {
  state = { people: [] };

  render() {
    return (
      <div>
        {this.state.people.map((person, id) => (
          <h1 key={id}>{person.name}</h1>
        ))}
      </div>
    );
  }
  componentDidMount() {
    let URL = "http://api.open-notify.org/astros.json";
    fetch(URL)
      .then(resp => resp.json())
      .then(({ people }) => this.setState({ people: people }));
  }
}

export default App;
