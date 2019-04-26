import React from 'react';
import Header from './Header';
import Body from './Body';
import KegList from '../model/KegList';
import Footer from './Footer';
import NewKegControl from './NewKegControl';
// import Error404 from './Error404';
import { Switch, Route } from 'react-router-dom';


class App extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      KegList: KegList,
    };
this.handleAddingNewKegForm = this.handleAddingNewKegForm.bind(this);
  }

  handleAddingNewKegForm(newKeg){
    let newKegList = this.state.KegList.slice();
    newKegList.push(newKeg);
    this.setState({KegList: newKegList});
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
        <Route component={Error404} />
      </Switch>
      <Body/>
      <Footer/>
    </div>
    );
  }
}

export default App;
