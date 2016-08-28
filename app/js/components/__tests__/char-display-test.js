import React from 'react'
import CharDisplay from '../char-display'
import renderer from 'react-test-renderer'

describe('CharDisplayTest', () => {
  it('Renders with correct class', () => {
    const component = renderer.create(
      <CharDisplay cssClass="myclass" char="B" />
    );

    expect(component.toJSON()).toMatchSnapshot();
  })
})
