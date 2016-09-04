import React from 'react'
import TextSelector from '../text-selector'
import sd from 'skin-deep'

describe("TextSelectorTest", () => {
  const render = (cb=jest.genMockFn()) => {
    return sd.shallowRender(
      <TextSelector onSelect={cb} />
    )
  }

  it('Render selectable items', () => {
    let tree = render()

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
})
