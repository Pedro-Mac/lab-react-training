import React from 'react';

class Carousel extends React.Component {
  constructor() {
    super();

    this.state = {
      imageIndex: 0,
    };
  }

  handleLeftClick = () => {
    if (this.state.imageIndex === 0) {
      this.setState({
        imageIndex: this.props.imgs.length - 1,
      });
    } else {
      this.setState({
        imageIndex: this.state.imageIndex - 1,
      });
    }
  };

  handleRightClick = () => {
    if (this.state.imageIndex === this.props.imgs.length - 1) {
      this.setState({
        imageIndex: 0,
      });
    } else {
      this.setState({
        imageIndex: this.state.imageIndex + 1,
      });
    }
  };

  render() {
    return (
      <div>
        <h1>Iteration 11</h1>
        <button onClick={this.handleLeftClick}> Previous </button>
        <img src={this.props.imgs[this.state.imageIndex]} alt="none" />
        <button onClick={this.handleRightClick}> Next </button>
      </div>
    );
  }
}

export default Carousel;
