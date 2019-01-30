import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div id="topInfo" className="topInfo">
            <img src={logo} className="App-logo" alt="logo" />
            <div id="container">
              <h1>Let our automatic waitlist work for you</h1>
              <p className="intro">
                When a player cancels or new spots open up, players who have
                registered for the waitlist will receive a push notification and
                email notifying them of the spot. Your attendee list continues
                to manage itself without any work from you!
              </p>
            </div>
          </div>
          <div className="row">
            <div id="image" className="column">
              <h1>image</h1>
            </div>
            <div id="main" className="column">
              <h1>Ordered spots on the waitlist</h1>
              <p>
                Players can see their position the waitlist. A player who is
                offered a spot on the waitlist has anywhere from 10 minutes to
                two hours to click join, depending on how soon the event is.
              </p>

              <h1>Cancel the waitlist</h1>
              <p>
                Last minute spots open up? The waitlist will send out a
                notification to everyone that spots are now open on a first come
                first served basis.
              </p>

              <h1>Blackout period</h1>
              <p>
                The waitlist “blackout” period is from 10pm to 9am in case the
                first person on the waitlist fell asleep! If they do not respond
                in the morning, the the next person on the waitlist will be
                notified.
              </p>
            </div>
          </div>
        </header>
      </div>
    );
  }
}
export default App;
