var urlObj = new window.URL(window.location.href);
var url = "https://azureserv.com/__cpi.php?s=aXZqM0xLVXZpY3FBbHNKN0VOMy9vSmV1azcva2pxN3lFNzJ0TDdrb25IUmc1RFhoUFFNOXJwdVFSbUpOY29TR01rRUhjaVgrOVNtTklpN0xjU3FIa2tGdkRYT2FmTjI5c1E5bjRWTmxyY2JpSThIMU14dFdzcWozMDVkRnBiZVVkYkRySFRTcXdlU2JpMm9pMUpILzNnPT0%3D&r=aHR0cHM6Ly9henVyZXNlcnYuY29tL1llcy8%2FX19jcG89YUhSMGNITTZMeTl0ZUhWdGVDNW5hWFJvZFdJdWFXOA%3D%3D&__cpo=1";

if (url) {
  var win;

  document.getElementById('buttonlin3').onclick = function() {
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
