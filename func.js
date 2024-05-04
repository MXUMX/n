function func () {

  const w = window.open() // access the "about:blank" window you've opened
  w.document.body.innerHTML = "https://images-opensocial.googleusercontent.com/gadgets/ifr?url=https://cdn.jsdelivr.net/gh/sk1bx/version@e14f9d7fa2d076a4845a22c5b0e566f7cfd0ac4b/Getaway-Shootout.xml&container=ig"
  // or access other parts to add more JS or CSS
  const style = w.document.createElement("link")
  link.href = "/path/to.css"
  link.rel = "stylesheet"
  w.document.head.appendChild(style)

}
