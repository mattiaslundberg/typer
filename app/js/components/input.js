import React from 'react'

class Input extends React.Component {
  constructor(props) {
    super(props)
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

  render() {
    return (
      <textarea ref={(c) => this._input = c} onKeyUp={this.props.onType}></textarea>
    )
  }
}

export default Input;
