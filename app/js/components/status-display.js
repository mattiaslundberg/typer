import React from 'react'
import CharDisplay from './char-display'

class StatusDisplay extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const typedChars = this.props.typedSequence.split("")
    let invalid = false
    let chars = this.props.fullText.map((char, i) => {
      let cssClass = null
      let typed = typedChars[i]
      if (typed == undefined) {
        cssClass = "not-typed"
      } else if (!invalid && typed == char) {
        cssClass = "typed"
      } else {
        invalid = true
        cssClass = "invalid-typed"
      }
      return <CharDisplay key={`key-${i}`} char={char} cssClass={cssClass} />
    })
    return (
      <div>{chars}</div>
    )
  }
}

export default StatusDisplay;
