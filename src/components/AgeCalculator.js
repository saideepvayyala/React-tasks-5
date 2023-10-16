import React, { Component } from 'react';
import './AgeCalculator';

import "bootstrap/dist/css/bootstrap.min.css";
class AgeCalculator extends Component {
  constructor() {
    super();
    this.state = {
      birthdate: '',
      age: null,
    };
  }

  handleBirthdateChange = (event) => {
    this.setState({ birthdate: event.target.value });
  };

  calculateAge = () => {
    const birthdate = new Date(this.state.birthdate);
    const currentDate = new Date();
    const ageInMilliseconds = currentDate - birthdate;

    const years = Math.floor(ageInMilliseconds / (365.25 * 24 * 60 * 60 * 1000));
    this.setState({ age: years });
  };

  render() {
    const { birthdate, age } = this.state;

    return (
      <div style={{textAlign:"center",marginTop:"200px"}}>
        <h1>Age Calculator</h1>
        <label style={{fontSize:"15px"}}><strong>Enter your date of birth: </strong></label><br/>
        <input style={{width:"300px",marginBottom:"4px"}}
          type="date"
          value={birthdate}
          onChange={this.handleBirthdateChange}
        /><br/>
        <button className="btn btn-primary" onClick={this.calculateAge}>Calculate Age</button>

        {age !== null && (
          <p>
            <strong>Your are {age} {age === 1 ? 'year' : 'years'}  old.</strong>
          </p>
        )}
      </div>
    );
  }
}

export default AgeCalculator;