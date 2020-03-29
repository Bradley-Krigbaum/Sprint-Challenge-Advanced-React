import React from 'react';

import Darkmode from './components/Darkmode';

class App extends React.Component {

    state = {
        players: []
    };


  componentDidMount() {

    console.log("bk: App.js: CDU: component mounted");
    fetch("http://localhost:5000/api/players")
        .then(res => res.json())
        .then(player => {
            this.setState({ players: player });
        })
        .catch(err => console.error(err));

  }


  componentDidUpdate(prevState) {

    console.log("bk: App.js: CDU: component updated");
    if (prevState.players !== this.state.players) {
        // console.log("bk: App.js: CDU: user state has changed");
        // console.log('CDU: user state: ', this.state.users);
        // console.log('CDU: user name: ', this.state.userName);
    }

  }


  render() {

    return (
        <Darkmode player={this.state.players}/>
    );

  }
  
}

export default App;
