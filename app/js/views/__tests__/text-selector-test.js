import React from 'react'
import TextSelector from '../text-selector'
import sd from 'skin-deep'

describe("TextSelectorTest", () => {
  const render = (cb=jest.fn()) => {
    return sd.shallowRender(
      <TextSelector onSelect={cb} options={[{"fulltext": "some full text", "name": "One"}]}/>
    )
  }

  it('Render selectable items', () => {
    let tree = render()
    let instance = tree.getMountedInstance()

    expect(tree.getRenderOutput()).toMatchSnapshot()
  })

  it('Returns to select view after cancel', () => {
    let tree = render()
    let instance = tree.getMountedInstance()
    instance.onAddClick()
    instance.onNewCancel()

    expect(tree.getRenderOutput().props.children).toMatchSnapshot()
  })
})
