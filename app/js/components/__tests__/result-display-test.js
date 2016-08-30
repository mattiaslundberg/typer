import React from 'react'
import ResultDisplay from '../result-display'
import renderer from 'react-test-renderer'

describe('ResultDisplayTest', () => {
  const render = (time, chars) => { return renderer.create(
    <ResultDisplay time={time} textLength={chars} />
  ) }

  it('WPM calculation is correct', () => {
    let component = render(10, 50)

    expect(component.toJSON()).toMatchSnapshot()
  })
})
