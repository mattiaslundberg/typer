import React from 'react'

class ResultDisplay extends React.Component {
  constructor() {
    super()
  }

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
      </div>
    )
  }
}

export default ResultDisplay;
