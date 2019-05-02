import React from 'react';
import ConfirmationQuestions from'./ConfirmationQuestions';
import NewKegForm from './NewKegForm';
import PropTypes from 'prop-types';

class NewKegControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      sampleName: ' ',
      sampleStyle: ' ',
      sampleOrigin: ' ',
      sampleAlcohol: ' '
    };

    this.handleNewKegFormSubmission = this.handleNewKegFormSubmission.bind(this);
  }

  handleNewKegFormSubmission(){
    this.setState({formVisibleOnPage: true});
console.log(this.formVisibleOnPage, "hey");
  }

  render(){
    let currentlyVisibleContent = null;
    if (this.state.formVisibleOnPage){
      currentlyVisibleContent = <NewKegForm  onNewKegCreation={this.props.onNewKegCreation} />;
    } else {
      currentlyVisibleContent = <ConfirmationQuestions onFormSubmission={this.handleNewKegFormSubmission} />;
    }
    return(
      <div>
        {currentlyVisibleContent}
      </div>
    );
  }
}

NewKegControl.propTypes = {
  onNewKegCreation: PropTypes.func
};

export default NewKegControl;
