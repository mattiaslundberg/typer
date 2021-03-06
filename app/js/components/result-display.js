import React from 'react'

export default class ResultDisplay extends React.Component {
  render() {
    const milliseconds = this.props.time
    const writtenChars = this.props.textLength
    const seconds = milliseconds / 1000
    const minutes = seconds / 60
    const writtenWords = writtenChars / 5
    const charsperm = writtenChars / minutes
    const wordsperm = writtenWords / minutes
    return (
      <div>
        <div>Time: {seconds.toFixed()}s</div>
        <div>Chars/m: {charsperm.toFixed()}</div>
        <div>Words/m: {wordsperm.toFixed()}</div>

        <button onClick={this.props.onNewClick}>Try again</button>
      </div>
    )
  }
}
