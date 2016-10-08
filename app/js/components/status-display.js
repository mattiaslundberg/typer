import React from 'react'
import CharDisplay from './char-display'

export default class StatusDisplay extends React.Component {
  getChars() {
    const typedChars = this.props.typedSequence.split("")
    let invalid = false

    return this.props.fullText.map((char, i) => {
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
  }

  render() {
    return (
      <div>{this.getChars()}</div>
    )
  }
}
