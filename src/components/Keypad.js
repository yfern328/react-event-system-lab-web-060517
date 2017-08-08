import React from 'react';

class Keypad extends React.Component {

  typing = () => {
    console.log('Entering password...')
  }

  render(){
    return(
      <div className="keypad">
        <input type="password" onKeyUp={this.typing} />
      </div>
    );
  }
};

export default Keypad;
