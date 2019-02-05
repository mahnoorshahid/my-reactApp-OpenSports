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
                width="45px"
                height="45px"
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
                width="45px"
                height="45px"
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
                width="45px"
                height="45px"
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

                <ul className="lists">
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
            <section>
              <h1 height="300px">quote</h1>
            </section>

            <section id="blackout">
              <div className="blackout-rt-col">
                <h1>
                  Ease your players worries when it comes to checking if a spot
                  has opened
                </h1>
                <p>
                  Your players don’t want to miss a chance at securing their
                  spot to your event if it becomes available while they are
                  sleeping! We created a blackout period to ease their mind so
                  they can get some zzzz’s
                </p>
                <ul className="lists">
                  <li>
                    The waitlist “blackout” period is from 10pm to 9am. If a
                    spot on the waitlist opens at 10:01pm, the first person on
                    the waitlist will have until 9am to respond*
                  </li>
                  <li>
                    Players do not need to worry about “checking their email
                    regularly” to make sure they do not miss out on their spot
                  </li>
                  <li>
                    Instant notifications through the app and email ensure
                    players don’t miss their spot
                  </li>
                  <div>*as long as the event is at least 16 hours away</div>
                </ul>
              </div>
            </section>

            <section id="waitlist-hold">
              <p>
                As your event gets closer, you need your waitlist to cycle
                through players faster. By default, OpenSports holds a spot for
                two hours to give the player time to view the notification and
                claim their spot. As your event gets closer, the OpenSports
                waitlist gives players less time to claim their spot before the
                spot is given to the next person on the waitlist.
              </p>
              <h1>timeline animation</h1>
              <ul className="lists">
                <li>
                  If the event is more than sixteen hours in the future; the
                  spot has a two hour hold;
                </li>
                <li>
                  If the event is 16 hours to 1 hour away, there is a 30 minute
                  hold;
                </li>
                <li>
                  If the event is less than one hour away, there is a 10 minute
                  hold.
                </li>
              </ul>
            </section>
          </div>
        </header>
      </div>
    );
  }
}
export default App;
