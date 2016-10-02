import React from 'react'
import TextSelector from '../text-selector'
import sd from 'skin-deep'

describe("TextSelectorTest", () => {
  const render = (cb=jest.genMockFn()) => {
    return sd.shallowRender(
      <TextSelector onSelect={cb} options={[{"fulltext": "some full text", "name": "One"}]}/>
    )
  }

  it('Render selectable items', () => {
    let tree = render()
    let instance = tree.getMountedInstance()

    expect(tree.getRenderOutput()).toMatchSnapshot()
  })

  it('Triggers callback event', () => {
    let cb = jest.fn()
    let tree = render(cb)
    let instance = tree.getMountedInstance()

    let evt = {
      target: {
        value: "test",
      },
    }

    instance.onChange(evt)
    expect(cb).toBeCalled()
    expect(cb.mock.calls[0][0].indexOf("test")).not.toBe(-1)
  })

  it('Correctly removes duplicate spaces', () => {
    let tree = render()
    let instance = tree.getMountedInstance()

    let result = instance.prepareText("abc \t\n\n\t  bc  ")
    expect(result.match(/\s{2,}/)).toBe(null)
  })

  describe('Upload', () => {
    it('Render input form', () => {
      let tree = render()
      let instance = tree.getMountedInstance()
      instance.onAddClick()

      expect(tree.getRenderOutput().props.children).toMatchSnapshot()
    })
  })
})
