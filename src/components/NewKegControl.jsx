import React from 'react';
import ConfirmationQuestion from'./ConfirmationQuestion';
import NewKegForm from './NewKegForm';
import PropTypes from 'prop-types';

class NewKegControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisbleOnPage: false
    };
    this.handleNewKegFormSubmission = this.handleNewKegFormSubmission.bind(this);
  }
  //

  handleNewKegFormSubmission(){
    this.setState({formVisibleOnPage: true});
  }

  render(){
    let currentlyVisibleContent = null;
    if (this.state.formVisbleOnPage){
      currentlyVisibleContent = <NewKegForm  onNewKegCreation={this.props.onNewKegCreation} />;
    } else {
      currentlyVisibleContent = <ConfirmationQuestion onFormSubmission={this.handleNewKegFormSubmission} />;
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
