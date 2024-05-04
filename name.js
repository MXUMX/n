function myfunction () {

  const w = window.open() // access the "about:blank" window you've opened
  w.document.body.innerHTML = "<iframe src='https://google.com/' width='100%' height='100%' frameborder='1'></iframe>"
  // or access other parts to add more JS or CSS
  const style = w.document.createElement("link")
  link.href = "/path/to.css"
  link.rel = "stylesheet"
  w.document.head.appendChild(style)

}

