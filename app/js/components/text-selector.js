import React from 'react'

const options = [
  {value: "Hello world!", name: "hello world"},
  {value: "print('some test')", name: "python-print"},
]

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

  getOptions() {
    return options.map((o) => {
      return <option key={o.value} value={o.value}>{o.name}</option>
    })
  }

  render() {
    return (
      <select onChange={this.onChange}>
        <option value="">Select text</option>
        {this.getOptions()}
      </select>
    )
  }
}

export default TextSelector;
