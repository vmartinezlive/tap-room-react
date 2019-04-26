import React from 'react';
import ConfirmationQuestion from'./ConfirmationQuestion';
import NewKegForm from './NewKegForm';

class NewKegControl extends React.Component {
  
  constructor(props) {
    super(props);
      this.state = {
        formVisbleOnPage: false
      };
      this.handleTroubleshootingConfirmation = this.handleTroubleshootingConfirmation.bind(this);
    }
    // 
    handleTroubleshootingConfirmation(){
      this.setState({formVisibleOnPage: true});
    }
    
  render(){
    let currentlyVisibleContent = null;
    if (this.state.formVisbleOnPage){
      currentlyVisibleContent = <NewKegForm />;
    } else {
      currentlyVisibleContent = <ConfirmationQuestions onTroubleshootingConfirmation={this.hahandleTroubleshootingConfirmation} />;  
    }
    return(
      <div>
      <ConfirmationQuestion/>
      </div>
    );
  }
}

export default NewKegControl; 