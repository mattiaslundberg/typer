import React from 'react'
import {get, post} from '../net'

let open, send, onload, onerror, setRequestHeader

function createXHRmock() {
  setRequestHeader = jest.fn()
  open = jest.fn()
  send = jest.fn(() => this.onload())

  const xhrMockClass = () => {
    return {
      setRequestHeader,
      open,
      send,
      onload
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
    return get("http://test.com/test").then(() => {
        expect(open).toBeCalledWith("GET", "http://test.com/test")
      },
      () => {}
    )
  })

  it('Makes correct post request', () => {
    let done = jest.fn()
    let data = "some data"
    return post("http://test.com", data, 201).then(() => {
      expect(open).toBeCalledWith("POST", "http://test.com/test")
      expect(send).toBeCalledWith(data)
      expect(setRequestHeader)
        .toBeCalledWith("Content-Type", "application/json")
    }, () => {})
  })
})
