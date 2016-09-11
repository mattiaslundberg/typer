import React from 'react'

class Input extends React.Component {
  constructor(props) {
    super(props)
    this.onkeyDown = this.onKeyDown.bind(this)
    this.forceFocus = this.forceFocus.bind(this)
    this.forceFocus()
  }

  forceFocus() {
    if (this._input) {
      this._input.focus()
    } else {
      setTimeout(this.forceFocus, 1)
    }
  }

  onKeyDown(evt) {
    if (evt.keyCode == 9) evt.preventDefault()
  }

  render() {
    return (
      <textarea ref={(c) => this._input = c} onKeyUp={this.props.onType} onKeyDown={this.onKeyDown}></textarea>
    )
  }
}

export default Input;
