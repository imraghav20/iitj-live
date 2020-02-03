import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import './App.css';
import VideoPlayer from './views/VideoPlayer';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/:id" component={VideoPlayer} />
        </Switch>
      </Router>
    );
  }
}

class Home extends React.Component {
  state = {
    stream: '',
    redirect: false
  }
  onChange = (event) => {
    const stream = event.target.value;
    this.setState({ stream });
  }
  stream = () => {
    this.setState({ redirect: true })
  }
  render() {
    const { stream, redirect } = this.state;
    if (redirect) {
      return <Redirect to={stream} />
    }
    return (
      <div className="App">
        <img src="/iitj-logo-big.jpg" className="App-logo" alt="logo" />
        Indian Institute of Technology, Jodhpur
          <br />
        <p className="live">LIVE</p>
        <div className="stream-form">
          <input type="text" value={stream} onChange={this.onChange} id="stream" placeholder="Stream-ID" />
          <button onClick={this.stream}>Stream</button>
        </div>
      </div>
    );
  }
}

export default App;
