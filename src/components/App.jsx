import React from 'react';
import TicketList from './TicketList';
import Header from './Header';
// import Body from './Body';
// import Icon from './Icon';
// import Nav from './Nav';
// import Ticket from './Links';


// import { Switch, Route } from 'react-router-dom';
// import Error404 from './Error404';

function App(){
  return (
    <div>
      <style jsx global>{`
          body {
            background-color: black;
            margin: 0;
            padding: 0;
          }
        `}</style>
      <Header/>
      <TicketList/>
    </div>
  );
}


export default App;
