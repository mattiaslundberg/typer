'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Start from './components/start';

class App extends React.Component {
  render() {
    return (
      <Start who="(author of React-ES6-Boilerplate)"/>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
