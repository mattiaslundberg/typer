import React from 'react'
import TextUploader from '../text-uploader'
import sd from 'skin-deep'

describe("TextSelectorTest", () => {
  const render = (onNewCancel=jest.fn()) => {
    return sd.shallowRender(
      <TextUploader onNewCancel={onNewCancel} />
    )
  }

  it('Render input form', () => {
    let tree = render()
    let instance = tree.getMountedInstance()

    expect(tree.getRenderOutput().props.children).toMatchSnapshot()
  })

  // TODO: DOM Tests

  it('Render errors', () => {
    let tree = render()
    let instance = tree.getMountedInstance()
    instance.setState({error: {message: "Something went wrong"}})

    expect(tree.getRenderOutput()).toMatchSnapshot()
  })
})
