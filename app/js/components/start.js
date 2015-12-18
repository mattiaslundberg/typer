'use strict';

import React from 'react';

class Start extends React.Component {
  constructor() {
    super();

    this.state = {
      author: '-@Roselpadilla [Twitter, Github]',
    };
  }

  render() {
    return (
      <div>
        <h1>Thanks for downloading the React-ES6-Boilerplate!</h1>
        <p>The fact that you can see this message means you're set up properly!</p>
        <p>Best of luck on all your projects!</p>
        <p>{this.state.author} | {this.props.who}</p>
      </div>
    );
  }
}

Start.propTypes = {
  who: React.PropTypes.string,
};

export default Start;
