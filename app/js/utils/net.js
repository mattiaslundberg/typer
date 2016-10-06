export function post(url, data, expectedResponseCode) {
  return new Promise((resolve, reject) => {
    let request = new XMLHttpRequest()
    request.onload = function(e) {
      if (this.status == expectedResponseCode) {
        resolve(this.response)
      } else {
        reject(this.response)
      }
    }

    request.open("POST", url, true)
    request.setRequestHeader("Content-Type", "application/json")
    request.send(JSON.stringify(data))
  })
}

export function get(url) {
  return new Promise((resolve, reject) => {
    let request = new XMLHttpRequest()
    request.onload = function(e) {
      if (this.status == 200) {
        resolve(this.response)
      } else {
        reject(this.response)
      }
    }

    request.open("GET", url, true)
    request.send()
  })
}
