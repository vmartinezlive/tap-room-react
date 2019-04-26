import React from 'react';
import Body from './Body';
import Header from './Header';
import Footer from './Footer';
import NewKegControl from './NewKegControl';
import Error404 from './Error404';
import { Switch, Route } from 'react-router-dom';

function App(){
  return (
    <div>
      <style jsx global>{`



        `}</style>

      <Header/>
      <Switch>
        <Route exact path='/' component={Body} />
        <Route path='newKeg' component="{NewKegForm}" />
        <Route component={Error404} />
      </Switch>
      <Body/>
      <Footer/>

    </div>
  );
}


export default App;
