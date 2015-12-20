'use strict';

import React from 'react';
import Welcome from './components/Welcome';

class App extends React.Component {
  render() {
    return (
      <Welcome who="(author of React-ES6-Boilerplate)"/>
    );
  }
}

export default App;
