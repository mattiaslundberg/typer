import React from 'react'
import Input from './components/input'
import StatusDisplay from './components/status-display'
import ResultDisplay from './components/result-display'

export default class Typer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      typedSequence: "",
      charsTyped: 0,
    }

    this.onType = this.onType.bind(this)
  }

  onType(evt) {
    if (
        evt.keyCode == 16 ||
        evt.keyCode == 9 ||
        evt.getModifierState("Fn") ||
        evt.getModifierState("Hyper") ||
        evt.getModifierState("OS") ||
        evt.getModifierState("Super") ||
        evt.getModifierState("Win")) {
      evt.preventDefault()
      return
    }

    if (this.state.charsTyped == 0) {
      this.setState({startedTyping: new Date().getTime()})
    }
    if (evt.target.value == this.props.fullText.join("") && !this.state.finished) {
      this.setState({finished: new Date().getTime()})
    }
    this.setState({
      typedSequence: evt.target.value,
      charsTyped: this.state.charsTyped + 1
    })
  }

  render() {
    if (this.state.finished) {
      const milliseconds = this.state.finished - this.state.startedTyping
      const writtenChars = this.props.fullText.length

      return (
        <div className="typer">
          <ResultDisplay time={milliseconds} textLength={writtenChars} />
        </div>
      )
    }
    return (
      <div className="typer">
        <StatusDisplay
          typedSequence={this.state.typedSequence}
          fullText={this.props.fullText}
          startTime={this.state.startedTyping} />
        <Input onType={this.onType} />
      </div>
    )
  }
}
