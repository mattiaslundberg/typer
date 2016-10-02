import React from 'react'
import request from '../net'

let open, send, onload, onerror

function createXHRmock() {
  open = jest.fn()

  send = jest.fn()

  const xhrMockClass = function () {
    return {
        open,
        send
    }
  }

  window.XMLHttpRequest = jest.fn(xhrMockClass)
}

describe('Net.request', () => {
  beforeEach(() => {
    createXHRmock()
  })

  it('Makes correct get request', () => {
    let done = jest.fn()
    request("http://test.com/test", done)
    expect(open).toBeCalledWith("GET", "http://test.com/test")
  })

  it('Makes correct post request', () => {
    let done = jest.fn()
    request("http://test.com/test", done, "POST")
    expect(open).toBeCalledWith("POST", "http://test.com/test")
  })
})
