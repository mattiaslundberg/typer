import React from 'react'
import TextUploader from '../components/text-uploader'
import Selection from '../components/selection'

export default class TextSelector extends React.Component {
  constructor() {
    super()

    this.state = {
      isUploading: false
    }

    this.onAddClick = this.onAddClick.bind(this)
    this.onNewCancel = this.onNewCancel.bind(this)
  }

  onAddClick() {
    this.setState({isUploading: true})
  }

  onNewCancel() {
    this.setState({isUploading: false})

    // TODO: Reload the list
  }

  render() {
    if (this.state.isUploading) {
      return <TextUploader onUpload={this.onNewCancel} />
    }
    return <Selection
      onAddClick={this.onAddClick}
      onSelect={this.props.onSelect}
      options={this.props.options}
    />
  }
}
