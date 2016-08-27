import React from 'react'
import CharDisplay from './char-display'

class StatusDisplay extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const typedChars = this.props.typedSequence.split("")
    let chars = this.props.fullText.map((char, i) => {
      const typed = typedChars[i] == char
      return <CharDisplay key={`key-${i}`} char={char} typed={typed} />
    })
    return (
      <div>{chars}</div>
    )
  }
}

export default StatusDisplay;
