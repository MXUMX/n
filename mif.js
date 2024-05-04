function mif () {

  var urlObj = new window.URL(window.location.href);
  var url = "https://images-opensocial.googleusercontent.com/gadgets/ifr?url=https://cdn.jsdelivr.net/gh/sk1bx/version@e14f9d7fa2d076a4845a22c5b0e566f7cfd0ac4b/Getaway-Shootout.xml&container=ig";
  
  if (url) {
    var win;

    if (win) {
        win.focus();
    } else {
        win = window.open();
        win.document.body.style.margin = '0';
        win.document.body.style.height = '100vh';
        var iframe = win.document.createElement('iframe');
        iframe.style.border = 'none';
        iframe.style.width = '100%';
        iframe.style.height = '100%';
        iframe.style.margin = '0';
        iframe.src = url;
        win.document.body.appendChild(iframe);
        

        var interval = setInterval(function() {
            if (win.closed) {
                clearInterval(interval);
                win = undefined;

            }
        }, 500);


    }
      
  }
  
}
