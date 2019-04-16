import React from 'react';
import Ticket from './Ticket';

var masterTicketList = [
  {
    location:'Portland State University',
    address: 'SW Park & Montgomery',
    hours:'9:00am to 2:00pm (Nov-March). Spring/Summer Hours - *;30am to 2:00pm (April-Oct)'
  },
  {
    location:'Lents International',
    address: 'SE 92nd & Reedway',
    hours:'Opens in June'
  },
  {
    location:'King',
    address: 'NE 7th and Wygant',
    hours:'Opens in May'
  },
  {
    location:'Kenton',
    address: 'N Denver & McClellan',
    hours:'Opens in June'
  },
  {
    location:'Shemanski Park',
    address: 'SW Park & Main',
    hours:'Opens in May'
  },
  {
    location:'Shemanski Park',
    address: 'SW Park & Main',
    hours:'Opens in May'
  },


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
      {masterTicketList.map((ticket, index) =>
        <Ticket location={ticket.location}
          address={ticket.address}
          hours={ticket.hours}
          key={index}/>
      )}
    </div>
  );
}

export default TicketList;
