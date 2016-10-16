import React from 'react'
import sd from 'skin-deep'
import OAuth from '../oauth'

describe('OAuth', () => {
  let render = () => {
    return sd.shallowRender(<OAuth />)
  }

  it('Render nothing before being loaded', () => {
    let tree = render()
    expect(tree.getRenderOutput()).toBe(null)
  })

  it('Render login link when received', () => {
    let tree = render()
    let instance = tree.getMountedInstance()
    instance.handleResponse(JSON.stringify({
      auth_url: "http://hello.com",
    }))

    expect(tree.getRenderOutput()).toMatchSnapshot()
  })

  it('Render logged in status when received', () => {
    let tree = render()
    let instance = tree.getMountedInstance()
    instance.handleResponse(JSON.stringify({
      auth_url: "http://hello.com",
      name: "Mattias",
      email: "mattias@example.com",
    }))

    expect(tree.getRenderOutput()).toMatchSnapshot()
  })
})
