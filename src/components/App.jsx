import React from 'react';
import Body from './Body';
import Header from './Header';
import Footer from './Footer';

import KegList from '../model/KegList';
import DisplayKegs from './DisplayKegs';
import About from './About';
import NewKegControl from './NewKegControl';

import { Switch, Route } from 'react-router-dom';


class App extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      kegList: kegList,
    };
    this.handleAddingNewKegForm = this.handleAddingNewKegForm.bind(this);
  }

  handleAddingNewKegForm(newKeg){
    let newKegList = this.state.KegList.slice();
    newKegList.push(newKeg);
    this.setState({kegList: newKegList});
  }


  render(){
    return (
      <div>
        <style jsx global>{`
        body {
          background-color: #FFF3E2'
          margin: 0;
          padding: 0;
        }
        `}</style>


      <Header/>
      <Switch>
        <Route exact path='/' component={Body} />
        <Route path='newKeg' component="{NewKegControl}" />

      </Switch>
      <Body/>
      <Footer/>
    </div>

    );
  }
}

export default App;
