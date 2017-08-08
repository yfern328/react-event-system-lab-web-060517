import React from 'react';

class EyesOnMe extends React.Component {

  good = () => {
    console.log('Good!')
  }

  eyes = () => {
    console.log('Hey! Eyes on me!')
  }

  render(){
    return(
      <div className="eyes-on-me">
        <button onFocus={this.good} onBlur={this.eyes}>Enter Password</button>
      </div>
    );
  }
};

export default EyesOnMe;
