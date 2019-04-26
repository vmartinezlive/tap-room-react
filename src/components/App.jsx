import React from 'react';
import Body from './Body';
import Header from './Header';
import Footer from './Footer';
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
      </Switch>
      <Body/>
      <Footer/>

    </div>
  );
}


export default App;
