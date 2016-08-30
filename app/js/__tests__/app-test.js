import React from 'react'
import App from '../app'
import sd from 'skin-deep'

describe('AppTest', () => {
  const render = () => {
    return sd.shallowRender(
      <App />
    )
  }

  it('Renders Typer with text', () => {
    let tree = render()

    expect(tree.getRenderOutput()).toMatchSnapshot()
  })
})
