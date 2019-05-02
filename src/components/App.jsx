import React, { Component } from 'react';
import Header from './Header';
import Navbar from './Navbar';
import NewKegControl from './NewKegControl';
import NewKegForm from './NewKegForm';
import kegList from '../model/KegData';
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
          <Route exact path ='/' render={() =><DisplayKegs keglist={this.state.kegList} />} />
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
