import React from 'react'
import TextSelector from '../text-selector'
import sd from 'skin-deep'

describe("TextSelectorTest", () => {
  const render = (cb=jest.genMockFn()) => {
    return sd.shallowRender(
      <TextSelector onSelect={cb} options={[{"value": "one", "name": "One"}]}/>
    )
  }

  it('Render selectable items', () => {
    let tree = render()
    let instance = tree.getMountedInstance()

    expect(tree.getRenderOutput()).toMatchSnapshot()
  })

  it('Triggers callback event', () => {
    let tree = render()
    let instance = tree.getMountedInstance()

    let evt = {
      target: {
        value: "/test",
      },
    }

    // TODO: Figure out how to test with mocked request.
    //instance.onChange(evt)
  })

  it('Correctly removes duplicate spaces', () => {
    let tree = render()
    let instance = tree.getMountedInstance()

    let result = instance.prepareText("abc \t\n\n\t  bc  ")
    expect(result.match(/\s{2,}/)).toBe(null)
  })
})
