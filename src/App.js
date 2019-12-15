import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { people: null };
  }

  componentDidMount() {
    fetch("http://api.open-notify.org/astros.json")
      .then(resp => resp.json())
      .then(json => this.setState({ people: json }));
  }

  render() {
    return <ul>
    </ul>;
  }
}

export default App;
