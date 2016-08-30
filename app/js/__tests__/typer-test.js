import React from 'react'
import Typer from '../typer'
import sd from 'skin-deep'

describe('TyperTest', () => {
  const render = (text) => {
    let fullText = text.split("")
    return sd.shallowRender(
      <Typer fullText={fullText} />
    )
  }

  it('Renders initial text', () => {
    let tree = render("hello")

    expect(tree.getRenderOutput()).toMatchSnapshot()
  })

  it('Renders result', () => {
    let component = render("hello")
    let instance = component.getMountedInstance()

    instance.setState({
      startedTyping: 100,
      finished: 300,
    })

    expect(component.getRenderOutput()).toMatchSnapshot()
  })
})
