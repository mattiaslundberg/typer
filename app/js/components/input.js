import React from 'react'

class Input extends React.Component {
  render() {
    return (
      <textarea onKeyUp={this.props.onType}></textarea>
    )
  }
}

export default Input;
