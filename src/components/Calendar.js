import React, { Component } from 'react';


class Calendar extends Component {

constructor(props) {
  super(props);

  this.state = {
    calendarData: [
      {
        eventTitle: 'Title of Event 1',
        time: 950,
        numberOfPeople: 3,
        numberOfBerries: 50, 
      },
      {
        eventTitle: 'Title of Event 2',
        time: 950,
        numberOfPeople: 3,
        numberOfBerries: 50, 
      },
      {
        eventTitle: 'Title of Event 3',
        time: 950,
        numberOfPeople: 3,
        numberOfBerries: 50, 
      },
      {
        eventTitle: 'Title of Event 4',
        time: 950,
        numberOfPeople: 3,
        numberOfBerries: 50, 
      },
      {
        eventTitle: 'Title of Event 5',
        time: 950,
        numberOfPeople: 3,
        numberOfBerries: 50, 
      }
    ]
  }
}





  render() {
    const { calendarData } = this.state; 

    return (
      <div id="calBody">
        <div className="header">
          <h1 id="upcomingEvents"> Upcoming Events </h1>
        {calendarData.map((event) => {
          return (
            <div id="EventInfoAndCheckInButton">
              <div id="eventInfo">

              <ul className="infoForEachEvent"> 
              <div id="eventTitle">
              <img id="eventTitleIcon" src="/images/eventTitleIcon.png" alt="Event Title"/>
              {event.eventTitle}
              </div>
              </ul>

              <ul className="infoForEachEvent"> 
              <img id="eventTimeIcon" src="/images/eventTimeIcon.png" alt="Event Time"/>
              {event.time} <p> am Today</p>
              </ul>

              <ul className="infoForEachEvent">
              <div id="numberOfBerries">
              <img id="eventBerryIcon" src="/images/redBerryIcon.png" alt="Event Time"/>
              {event.numberOfBerries}
              </div>
              </ul>

              <ul className="infoForEachEvent"> 
              <img id="eventMemberIcon" src="/images/eventMemberIcon.png" alt="Event Time"/>
              {event.numberOfPeople}
              </ul>

              </div>
            
              <div className="checkInButton">
              <button onclick="" id="checkIn"> Check in 15 minutes before</button>
              </div>
            </div>
          )
        })}
        </div>
      </div>
    );
  }
}

export default Calendar;
