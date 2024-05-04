function func () {

  const w = window.open() // access the "about:blank" window you've opened
  w.document.body.innerHTML = "<iframe id="myiframe" src='https://images-opensocial.googleusercontent.com/gadgets/ifr?url=https://cdn.jsdelivr.net/gh/sk1bx/version@e14f9d7fa2d076a4845a22c5b0e566f7cfd0ac4b/Getaway-Shootout.xml&container=ig' width='100%' height='100%' style="border:none;" frameBorder="0"></iframe> <script>var iframe = document.getElementById("myiframe");iframe.width = iframe.contentWindow.document.body.scrollWidth;iframe.height = iframe.contentWindow.document.body.scrollHeight;</script>"
  // or access other parts to add more JS or CSS
  const style = w.document.createElement("link")
  link.href = "/path/to.css"
  link.rel = "stylesheet"
  w.document.head.appendChild(style)

}
