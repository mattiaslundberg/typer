import React from 'react'
import StatusDisplay from '../status-display'
import renderer from 'react-test-renderer'

describe("StatusDisplayTest", () => {
  it('Render not-typed chars', () => {
    const component = renderer.create(
      <StatusDisplay
        typedSequence=""
        fullText={["a", "b"]} />
    )
    expect(component.toJSON()).toMatchSnapshot()
  })

  it('Render invalid chars', () => {
    const component = renderer.create(
      <StatusDisplay
        typedSequence="cc"
        fullText={["a", "b"]} />
    )
    expect(component.toJSON()).toMatchSnapshot()
  })

  it('Render valid chars', () => {
    const component = renderer.create(
      <StatusDisplay
        typedSequence="ab"
        fullText={["a", "b"]} />
    )
    expect(component.toJSON()).toMatchSnapshot()
  })
})
