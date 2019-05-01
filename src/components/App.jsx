import React, { Component } from 'react';
import Image from './Image';
import Header from './Header';
import Navbar from './Navbar';
import Footer from './Footer';
import NewKegControl from './NewKegControl';
import kegList from '../model/KegData';
import DisplayKegs from './DisplayKegs';
import About from './About';
import { Switch, Route } from 'react-router-dom';
// import PropTypes from 'prop-types';


class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      kegList: kegList,
    };
    this.handleAddingNewKegForm = this.handleAddingNewKegForm.bind(this);
  }

  handleAddingNewKegForm(newKeg){
    let newKegList = this.state.kegList.slice();
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
          <Route exact path ='/' render={() =><DisplayKegs keglist={this.state.kegList} />} /> 
          <Route exact path = '/newkegontrol'render={() =><NewKegControl  onNewKegCreation={this.handleAddingNewKegForm}/>} />
        </Switch>
        <Image/>
        <Navbar/>
        <About/>
        <Footer/>
      </div>

    );
  }
}

export default App;
