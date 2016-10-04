import React from 'react'
import Selection from '../selection'
import sd from 'skin-deep'

describe('Selection', () => {
  const render = (onAddClick=jest.fn(), onSelect=jest.fn()) => {
    return sd.shallowRender(
      <Selection
        onAddClick={onAddClick}
        onSelect={onSelect}
        options={[{"fulltext": "some full text", "name": "One"}]}
      />
    )
  }

  it('Correctly removes duplicate spaces', () => {
    let tree = render()
    let instance = tree.getMountedInstance()

    let result = instance.prepareText("abc \t\n\n\t  bc  ")
    expect(result.match(/\s{2,}/)).toBe(null)
  })

  it('Triggers callback event', () => {
    let cb = jest.fn()
    let tree = render(jest.fn(), cb)
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
})
