import React, { Component } from "react";

class App extends Component {
  state = {
    astronauts: []
  };

  componentDidMount() {
    fetch("http://api.open-notify.org/astros.json")
      .then(res => res.json())
      .then(data => {
        this.setState({ astronauts: data.people });
      });
  }

  showAstronauts = () => {
    return this.state.astronauts.map(a => (
      <li>
        {a.name} - {a.craft}
      </li>
    ));
  };

  render() {
    return <ul>{this.showAstronauts()}</ul>;
  }
}

export default App;
