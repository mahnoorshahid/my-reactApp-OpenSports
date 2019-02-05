import React, { Component } from 'react';
import logo from './logo.svg';
import cancel from './cancel.svg';
import list from './list.svg';
import blackout from './sleep.svg';
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
              <img
                className="icon-waitlist"
                src={list}
                alt="list"
                width="25px"
                height="25px"
              />
              <h1>Ordered spots on the waitlist</h1>

              <p>
                Players can see their position the waitlist. A player who is
                offered a spot on the waitlist has anywhere from 10 minutes to
                two hours to click join, depending on how soon the event is.
              </p>
              <img
                className="icon-cancel"
                src={cancel}
                alt="cancel"
                width="25px"
                height="25px"
              />
              <h1>Cancel the waitlist</h1>

              <p>
                Last minute spots open up? The waitlist will send out a
                notification to everyone that spots are now open on a first come
                first served basis.
              </p>
              <img
                className="icon-blackout"
                src={blackout}
                alt="blackout"
                width="25px"
                height="25px"
              />
              <h1>Blackout period</h1>

              <p>
                The waitlist “blackout” period is from 10pm to 9am in case the
                first person on the waitlist fell asleep! If they do not respond
                in the morning, the the next person on the waitlist will be
                notified.
              </p>
            </div>

            <section id="dropout">
              <div className="dropout-lf-col">
                <h1>
                  Say goodbye to manually keeping track of drop-outs and next
                  available players
                </h1>
                <p className="dropout-intro">
                  OpenSports created an exceptional tool that will save you
                  hours of repetitive work every week by instantly filling
                  available spots with waitlisted players. The days of trying to
                  find players to fill in for cancelled spots are over!
                </p>

                <ul>
                  <li>
                    When your event fills, players can click “Join Waitlist” and
                    immediately view their position on the waitlist!
                  </li>
                  <li>
                    If an attendee cancels their RSVP, the first player on the
                    waitlist receives a notification
                  </li>
                  <li>
                    If the player joins, their payment is processed, and the
                    spot is theirs
                  </li>
                  <li>
                    If the player rejects the spot or does not respond,
                    OpenSports notifies the next player on the waitlist.
                  </li>
                </ul>
              </div>

              <div className="dropout-rt-col">
                <div>
                  <div className="notif">
                    <p>
                      Alex Joseph’s waitlist spot for Thursday Volleyball has
                      opened. He has 2 hours to join.
                    </p>
                    <div className="time">1 hour ago</div>
                  </div>

                  <div className="notif">
                    <p>Alex Joseph joined Thursday Volleyball.</p>
                    <div className="time">50 min ago</div>
                  </div>

                  <div className="notif">
                    <p>Gary Li joined the waitlist for Thursday Volleyball.</p>
                    <div className="time">30 min ago</div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </header>
      </div>
    );
  }
}
export default App;
