import React from 'react';
import ConfirmationQuestion from'./ConfirmationQuestion';
import NewKegForm extends './NewKegForm';

class NewKegControl extends React.Component {
  
  constructor(props) {
    super(props);
      this.state = {
        formVisbleOnPage: false
      };
      // this.handleClick = this handleClick.bind(this);
    }
    // 
    // handleClick(){
    //   this.setState({formVisibleOnPage: true});
    //   console.log('formVisibleOnPage is currently set to:' + this.state.formVisibleOnPage);
    // }
    
  render(){
    let currentlyVisibleContent = null;
    if (this.state.formVisbleOnPage){
      currentlyVisibleContent = <NewKegForm />;
    } else {
      currentlyVisibleContent = <ConfirmationQuestions />;  
    }
    return(
      <div>
      <ConfirmationQuestion/>
      </div>
    );
  }
}

export default NewKegControl; 