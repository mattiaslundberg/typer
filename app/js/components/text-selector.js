import React from 'react'

class TextSelector extends React.Component {
  constructor() {
    super()

    this.onChange = this.onChange.bind(this)
  }

  onChange(evt) {
    if (evt.target.value) {
      this.props.onSelect(evt.target.value)
    }
  }


  render() {
    return (
      <select onChange={this.onChange}>
        <option value="">Select text</option>
        <option value="Hello world!">hello</option>
      </select>
    )
  }
}

export default TextSelector;
