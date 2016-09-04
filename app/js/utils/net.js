export default function request(url, onDone) {
  let request = new XMLHttpRequest()
  request.onreadystatechange = () => {
    if (request.readyState == XMLHttpRequest.DONE && request.status == 200) {
      onDone(request.responseText)
    }
  }
  request.open("GET", url)
  request.send()
}
