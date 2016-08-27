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
    if (
        evt.keyCode == 16 ||
        evt.getModifierState("Fn") ||
        evt.getModifierState("Hyper") ||
        evt.getModifierState("OS") ||
        evt.getModifierState("Super") ||
        evt.getModifierState("Win") /* hack for IE */) {
      return;
    }
    this.setState({
      typedSequence: evt.target.value,
      charsTyped: this.state.charsTyped + 1
    })
  }

  render() {
    return (
      <div className="typer">
        <StatusDisplay typedSequence={this.state.typedSequence} fullText={this.props.fullText} />
        <Input onType={this.onType} />
      </div>
    )
  }
}

export default Typer;
