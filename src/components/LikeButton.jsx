import React from 'react';

class LikeButton extends React.Component {
  constructor() {
    super();

    this.state = {
      likes: 0,
    };
  }

  handleIncrementLikes = () => {
    this.setState({
      likes: this.state.likes + 1,
    });
  };

  render() {
    let word;
    this.state.likes === 1 ? (word = 'Like') : (word = 'Likes');

    return (
      <div>
        <h3>Iteration 8</h3>
        <button onClick={this.handleIncrementLikes}>
          {this.state.likes} {word}
        </button>
      </div>
    );
  }
}

export default LikeButton;
