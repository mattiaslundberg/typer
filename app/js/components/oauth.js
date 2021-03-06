import React from 'react'
import {get} from '../utils/net'

export default class OAuth extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}

    get("/api/oauth/").then(
      response => this.handleResponse(response),
      error => this.setState({error: "Failed to get login url"})
    )
  }

  handleResponse(response) {
    const data = JSON.parse(response)
    const newState = {
      auth_url: data.auth_url,
      name: data.name,
      email: data.email,
    }

    this.setState(newState)

    if (this.props.authCallback) {
      this.props.authCallback(newState)
    }
  }

  render() {
    if (this.state.name) {
      return (
        <div className="logout">
          Logged in as {this.state.name}.
          <a href="/api/logout/">Logout</a>
        </div>
      )
    } else if (this.state.auth_url) {
      return (
        <div className="login">
          <a href={this.state.auth_url}>Login using Google</a>
        </div>
      )
    }
    return null
  }
}
