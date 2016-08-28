import React from 'react'
import Input from './components/input'
import StatusDisplay from './components/status-display'

class Typer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      typedSequence: "",
      charsTyped: 0,
    }

    this.onType = this.onType.bind(this)
  }

  onType(evt) {
    // Ignore if following modifier is active.
    // https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/getModifierState
    if (
        evt.keyCode == 16 ||
        evt.getModifierState("Fn") ||
        evt.getModifierState("Hyper") ||
        evt.getModifierState("OS") ||
        evt.getModifierState("Super") ||
        evt.getModifierState("Win") /* hack for IE */) {
      return;
    }

    if (this.state.charsTyped == 0) {
      this.setState({startedTyping: new Date().getTime()})
    }
    if (evt.target.value == this.props.fullText.join("")) {
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
      const seconds = milliseconds / 100
      const minutes = seconds / 60
      const writtenChars = this.props.fullText.length
      const writtenWords = writtenChars / 5
      const charsperm = writtenChars / minutes
      const wordsperm = writtenWords / minutes

      return (
        <div className="typer">
          <div>
            <div>Time: {seconds}s</div>
            <div>Chars/m: {charsperm}</div>
            <div>Words/m: {wordsperm}</div>
          </div>
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

export default Typer;
