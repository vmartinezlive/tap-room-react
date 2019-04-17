import React from 'react';
import Ticket from './Ticket';
// import MarketSchedule from '../model/MarketSchedule.js';

const MarketSchedule = [
  {
    day: 'Sunday',
    location: 'Lents International',
    hours: '9:00am - 2:00pm',
    booth: '4A'
  },
  {
    day: 'Monday',
    location: 'Pioneer Courthouse Square',
    hours: '10:00am - 2:00pm',
    booth: '7C'
  },
  {
    day: 'Tuesday',
    location: 'Hillsboro',
    hours: '5:00pm - 8:30pm',
    booth: '1F'
  },
  {
    day: 'Wednesday',
    location: 'Shemanski Park',
    hours: '10:00am - 2:00pm',
    booth: '3E'
  },
  {
    day: 'Thursday',
    location: 'Northwest Portland',
    hours: '2:00pm - 6:00pm',
    booth: '6D'
  },
  {
    day: 'Saturday',
    location: 'Beaverton',
    hours: '10:00am - 1:30pm',
    booth: '9G'
  }
];
function TicketList(){
  return (
    <div>
      <style jsx>{`
          div{
            padding:10px;
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            grid-gap: 1%;
          }

      `}

      </style>
      {MarketSchedule.map((ticket, index) =>
        <Ticket day={ticket.day}
          location={ticket.location}
          hours={ticket.hours}
          booth={ticket.booth}
          key={index}/>
      )}
    </div>
  );
}

export default TicketList;
