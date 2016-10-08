import React from 'react'

export default class CharDisplay extends React.Component {
  render() {
    return (
      <span className={this.props.cssClass}>{this.props.char}</span>
    )
  }
}
