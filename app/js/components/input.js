import React from 'react'

class Input extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <input onKeyUp={this.props.onType} type="text"></input>
    )
  }
}

export default Input;
