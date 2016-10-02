import React from 'react'
import request from '../utils/net.js'

export default class TextUploader extends React.Component {
  constructor(props) {
    super(props)
    this.onNewSubmit = this.onNewSubmit.bind(this)
  }

  onNewSubmit() {
    const data = {
      name: this._name.value,
      fulltext: this._text.value,
    }

    let self = this
    request("/api/texts/", (response) => {
      self.props.onUpload && self.props.onUpload()
    }, "POST", JSON.stringify(data))
  }

  render() {
    return (
      <div>
        <p>
          <label htmlFor="name">Name</label>
          <input ref={(i) => this._name = i} type="text" name="name"></input>
        </p>
        <p>
          <label htmlFor="text">Text</label>
          <input ref={(i) => this._text = i} type="text" name="text"></input>
        </p>
        <p>
          <button onClick={this.onNewSubmit}>Save</button>
          <button onClick={this.props.onUpload}>Cancel</button>
        </p>
      </div>
    )
  }
}
