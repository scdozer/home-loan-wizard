import React, { Component } from 'react';
import './App.css';
import router from './router';
import { connect } from 'react-redux';


class App extends Component {
  constructor(){
    super()
    this.state = {
      //first view
      loanType: 'Home Purchase',
      propertyType: 'Single Family Home',
      //second view
      city: '',
      //third view
      propToBeUsedOn: '',
      //fourth view
      found: "false",
      //fifth view
      realEstateAgent: "false",
      //sixth view
      downPayment: 0,
      cost: 0,
      //seventh view
      credit: '',
      //eigth view
      history: '',
      //ninth view
      addressOne: '',
      addressTwo: '',
      addressThree: '',
      //tenth view
      firstName: '',
      lastName: '',
      email: ''
    }
  }
  render() {
    return (
      <div>
        { router }
      </div>
    );
  }
}


function mapStateToProps(state){
  return {state};
}
export default connect(mapStateToProps)(App);
