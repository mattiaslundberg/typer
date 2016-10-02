export default function request(url, onDone, method="GET", data=null) {
  let request = new XMLHttpRequest()
  request.onreadystatechange = () => {
    if (request.readyState == XMLHttpRequest.DONE && request.status == 200) {
      onDone(request.responseText)
    }
  }
  request.open(method, url)
  if (method == "POST") {
    request.setRequestHeader("Content-Type", "application/json")
  }
  request.send(data)
}
