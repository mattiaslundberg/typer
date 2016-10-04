
import React from 'react'

export default class Selection extends React.Component {
  constructor(props) {
    super(props)

    this.onChange = this.onChange.bind(this)
    this.prepareText = this.prepareText.bind(this)
  }

  onChange(evt) {
    if (evt.target.value) {
      this.props.onSelect(this.prepareText(evt.target.value))
    }
  }

  prepareText(text) {
    let i = 10
    while (i-- && text.match(/\s{2,}/g))
      text = text.replace(/[^\x20-\x7E]/g, " ").replace(/\s+/g, " ").trim()
    let selected = this.getRandom(20, text.split(" "))
    return selected.join(" ")
  }

  getRandom(num, choices) {
    let result = []
    for (var i = 0; i < num; ++i) {
      result.push(choices[Math.floor(Math.random() * choices.length)])
    }
    return result
  }

  getOptions() {
    return this.props.options.map((o) => {
      return <option key={o.name} value={o.fulltext}>{o.name}</option>
    })
  }

  render() {
    return (
      <div>
        <p>
          <select onChange={this.onChange}>
            <option value="">Select text</option>
            {this.getOptions()}
          </select>
        </p>
        <p>
          <button onClick={this.props.onAddClick}>Add new</button>
        </p>
      </div>
    )
  }
}
