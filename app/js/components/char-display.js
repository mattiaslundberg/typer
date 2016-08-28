import React from 'react'

class CharDisplay extends React.Component {
  render() {
    return (
      <span className={this.props.cssClass}>{this.props.char}</span>
    )
  }
}

export default CharDisplay;
