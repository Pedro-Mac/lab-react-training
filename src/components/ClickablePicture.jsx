import React, { Component } from 'react';

class ClickablePicture extends Component {
  constructor() {
    super();
    this.state = {
      picture: './img/persons/maxence.png',
    };
  }

  handleImgClick = () => {
    if (/glasses/.test(this.state.picture)) {
      this.setState({
        picture: './img/persons/maxence.png',
      });
    } else {
      this.setState({
        picture: './img/persons/maxence-glasses.png',
      });
    }
  };

  render() {
    return (
      <div>
        <h1>It 9</h1>
        <img
          src={this.state.picture}
          alt="maxence"
          onClick={this.handleImgClick}
        />
      </div>
    );
  }
}

export default ClickablePicture;
