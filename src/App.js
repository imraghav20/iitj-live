import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link
} from "react-router-dom";
import './App.css';
import VideoPlayer from './views/VideoPlayer';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/info" component={Info} />
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
        <form onSubmit={this.stream} className="stream-form">
          <input autoComplete="false" type="text" value={stream} onChange={this.onChange} id="stream" placeholder="Stream-ID" />
          <button type="submit" onClick={this.stream}>Stream</button>
        </form>
        <p className="developer">
          <Link to='/info'>How to stream?</Link>
          <br />
          Developed by: Kunal Tawatia
        </p>
      </div>
    );
  }
}

class Info extends React.Component {
  render() {
    return (
      <div className="info">
        <img src="/iitj-logo-big.jpg" className="App-logo" alt="logo" />
        Indian Institute of Technology, Jodhpur
          <br />
        <p className="live">LIVE INTRANET STREAMING</p>
        <p className="info-text">A streaming service on the intranet, which allows every connected student to securely broadcast webcams, screens, class lectures, GPL and what not, over the whole institute, in high quality, without any bandwidth consumption.</p>
        <h5 className="topic-header">How to broadcast a stream ?</h5>
        <h6 className="topic-subheader">On Android:</h6>
        <ul className="topic-point">
          <li ><p>Download RTMP Camera from Google Play Store.</p></li>
            <img src={require('./assets/camera.jpg')} alt="info" width="80%"/>
          <li ><p>Select <em>Options</em> button in the top left corner.</p></li>
          <li ><p>Select <em>Publish address</em> button in the menu.</p></li>
          <li ><p>Set RTMP server URL as <em>rtmp://10.22.0.22/live</em>.</p></li>
          <li>
            <p>
              Now,
              <em> Stream name</em> can be set randomly by your choice, this will act as your Stream ID.
              <br />
              * Choose your stream name such that it doesn't collide with someone else's
            </p>
          </li>
          <li ><p>Press <em>Close</em></p></li>  
          <li>
            <p>Enter the Stream name / Stream ID on Home Page and click <em>Stream</em></p>
            <img src={require('./assets/screen.jpg')} alt="info" width="80%" />
          </li><li ><p>Now start stream by clicking <em>Start</em></p></li>
        </ul>
        <h6 className="topic-subheader">On Windows/Linux/Mac:</h6>
        <ul className="topic-point">
          <li ><a href="https://obsproject.com/download" target="_blank" rel="noopener noreferrer">Download OBS Studio</a></li>
          <li>
            <p>In <em>Controls</em> , select <em>Settings.</em></p>
            <img src={require('./assets/control.jpg')} alt="info" />
          </li>
          <li>
            <p>In menu, select <em>Server.</em></p>
            <img src={require('./assets/settings.jpg')} alt="info" width="80%" />
          </li>
          <li>
            <p>
              Now set,
              <br />
              * <em>Service</em> as <em>"Custom..."</em>
              <br />
              * <em>Server</em> as <em>"rtmp://10.22.0.22/live"</em>
              <br />
              * <em>Stream Key</em> can be set randomly by your choice, this will act as your Stream ID.
              <br />
              Choose stream key such that it doesn't collide with someone else's
            </p>
            <img src={require('./assets/configurations.jpg')} alt="info" width="80%" />
          </li>
          <li>
            <p>Select the source by clicking the + button </p>
            <img src={require('./assets/source.jpg')} alt="info" />
          </li>
          <li>
            <p>Finally Start Streaming :)<br />Report if you see any crash/issue.</p>
            <img src={require('./assets/control.jpg')} alt="info" />
          </li>
          <li>
            <p>Enter the Stream Key / Stream ID on Home Page and click <em>Stream</em></p>
            <img src={require('./assets/screen.jpg')} alt="info" width="80%" />
          </li>
        </ul>
        <p className="developer">Developed by: Kunal Tawatia</p>
      </div >
    );
  }
}

export default App;
