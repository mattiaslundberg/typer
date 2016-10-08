import React from 'react'

jest.mock('../utils/net')
import App from '../app'
import sd from 'skin-deep'

describe('AppTest', () => {
  const render = () => {
    return sd.shallowRender(
      <App />
    )
  }

  it('Renders Typer after text is set', () => {
    let tree = render()
    let instance = tree.getMountedInstance()
    instance.setState({text: "Hello world!"})

    expect(tree.getRenderOutput()).toMatchSnapshot()
  })

  it('Renders TextSelector', () => {
    let tree = render()

    expect(tree.getRenderOutput()).toMatchSnapshot()

    let instance = tree.getMountedInstance()
    instance.setState({options: [{"value": "one", "name": "one"}]})
    expect(tree.getRenderOutput()).toMatchSnapshot()
  })

  it('Renders error view', () => {
    let tree = render()
    let instance = tree.getMountedInstance()
    instance.setState({error: {message: "Something went wrong"}})
    expect(tree.getRenderOutput()).toMatchSnapshot()
  })
})
