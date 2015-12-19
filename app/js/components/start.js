'use strict';

import React from 'react';

class Start extends React.Component {

  static propTypes = {
    who: React.PropTypes.string,
    accounts: React.PropTypes.string,
  };

  static defaultProps = {
    accounts: '[Twitter, Github, npm]',
  }

  state = {
    author: '@roselpadilla',
  };

  render() {
    return (
      <div>
        <h1>Thanks for downloading the React-ES6-Boilerplate!</h1>
        <p>The fact that you can see this message means you're set up properly!</p>
        <p>Best of luck on all your projects!</p>
        <p>-{this.state.author} on: {this.props.accounts} | {this.props.who}</p>
      </div>
    );
  }
}



export default Start;
