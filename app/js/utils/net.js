export default function request(url, onDone, method="GET", data=null) {
  let request = new XMLHttpRequest()
  request.onreadystatechange = () => {
    if (request.readyState == XMLHttpRequest.DONE && request.status == 200) {
      onDone(request.responseText)
    }
  }
  request.open(method, url)
  request.send(data)
}
