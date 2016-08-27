import React from 'react'

class CharDisplay extends React.Component {
  render() {
    let cssClass = this.props.typed ? "typed" : "not-typed"
    return (
      <span className={cssClass}>{this.props.char}</span>
    )
  }
}

export default CharDisplay;
