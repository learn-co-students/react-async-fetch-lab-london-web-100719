import React from 'react';

export default class App extends React.Component {

constructor(props){
    super(props)
    this.state = {
        astronauts: [{name: 'test'}]
    }
}

componentDidMount(){
    const API_ENDPOINT = 'http://api.open-notify.org/astros.json'

    fetch(API_ENDPOINT)
        .then(response => response.json())
        .then(json => this.setState({astronauts: json.people}))
}

render(){

    return (
    <div>
        <h1> People currently in Space</h1>
        <ul>
            {this.state.astronauts.map(
                (astronaut, index) => <li key={index}>{astronaut.name}</li>
            )}
        </ul>
    </div>
    )
}

}

