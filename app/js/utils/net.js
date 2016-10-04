export default function request(url, onDone, method="GET", data=null) {
  let request = new XMLHttpRequest()
  request.onreadystatechange = () => {
    if (request.readyState == XMLHttpRequest.DONE && request.status >= 200 &&
      request.status < 300) {
      onDone(request.responseText)
    }
  }
  request.open(method, url)
  if (method == "POST") {
    request.setRequestHeader("Content-Type", "application/json")
  }
  request.send(data)
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
