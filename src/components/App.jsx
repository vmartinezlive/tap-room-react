import React, { Component } from 'react';
import Header from './Header';
import Navbar from './Navbar';
import NewKegControl from './NewKegControl';
import NewKegForm from './NewKegForm';

import DisplayKegs from './DisplayKegs';
import logo from '../assets/images/RedLogo.png';
import background from '../assets/images/beer.gif';
import About from './About';
import { Switch, Link, Route } from 'react-router-dom';
import Footer from './Footer';
import Error404 from './Error404';
import PropTypes from 'prop-types';


class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      kegList: [
        {
          name: 'Golden Nektar',
          style: 'Pilsner',
          origin: 'German',
          alcohol: '4.99%',
          id: 0,
        },
        {
          name: 'Twisted Read Ale',
          style: 'Red Ale',
          origin: 'American Amber/Red',
          alcohol: '7.02%',
          id: 1,
        },
        {
          name: 'Hoppy Salvation',
          style: 'IPA',
          origin: 'American',
          alcohol: '7.35%',
          id: 2,
        },
        {
          name: 'O\'Breadsley\'s Stout',
          style: 'Stout',
          origin: 'American',
          alcohol: '6.04%',
          id: 3,
        },
        {
          name: 'Resin Raptor',
          style: 'IPA',
          origin: 'Ipmerial/Double',
          alcohol: '9%',
          id: 4,
        },
        {
          name: 'Show Me Your Nelson',
          style: 'IPA',
          origin: 'Ipmerial/Double',
          alcohol: '8.4%',
          id: 5,
        },
        {
          name: 'Nitro O\'Breadsley\'s Stout(Nitro) ',
          style: 'Stout',
          origin: 'American',
          alcohol: '6.4%',
          id: 6,
        },
        {
          name: 'Primo Cones ',
          style: 'IPA',
          origin: 'American',
          alcohol: '6%',
          id: 7,
        },
        {
          name: 'Not Your Fathers Fruit Beer ',
          style: 'Belgian Quad',
          origin: 'Belgian',
          alcohol: '13%',
          id: 8,
        }
      ],
    };
    this.handleAddingNewKegForm = this.handleAddingNewKegForm.bind(this);
    this.handleDeleteKeg = this.handleDeleteKeg.bind(this);
  }
  handleAddingNewKegForm(newKeg){
    let newKegList = this.state.kegList.slice();
    newKegList.push(newKeg);
    this.setState({kegList: newKegList});
  }
  handleDeleteKeg(info) {
    console.log(info.id);
    console.log(this.state.kegList)
    let newKegList = this.state.kegList.slice();
    for (let i= 0; i < newKegList.length; i ++){
      console.log(i);
      if (info.id === newKegList[i].id){
        console.log("hi");
        newKegList.splice(i,1);
      }
    }
    this.setState({kegList: newKegList});
  }
  render(){
    return (
      <div className="container">
        <style jsx global>{`
        .container{
          background-color: #FDFFF2;
        }
        .backgroundImg {
          background-size: block;
          width: 100%;
          height: 40%;
        }
        .logo{
          position:absolute;
          z-index: 1;
          top: 13vh;
          left: 18vw;
          width: 60%;
        }


        `}</style>
        <Header/>
        <img className="logo" src={logo} alt="logo"></img>
        <img className="backgroundImg" src={background} alt="background"></img>
        <Navbar/>
        <Switch>
          <Route exact path ='/' render={() =><DisplayKegs handleDeleteKeg={this.handleDeleteKeg} kegList={this.state.kegList} />} />
          <Route exact path = '/newkeg' render={() =><NewKegControl  onNewKegCreation={this.handleAddingNewKegForm}/>} />
          <Route exact path ='/about' component={About} />
          <Route component={Error404} />
        </Switch>
        <Footer/>
      </div>
    );
  }
}

export default App;
