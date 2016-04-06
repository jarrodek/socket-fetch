(function() {
  /* global SocketFetchOptions */
  if (this.currentImport && this.currentImport.URL) {
    var url = this.currentImport.URL;
    var path = url.substr(url.indexOf('/', url.indexOf('/') + 2)).replace('socket-fetch.html','');
    var lastDot = path.lastIndexOf('.');
    if (lastDot !== -1 && path.substr(lastDot + 1) === 'html') {
      path = path.substr(path.lastIndexOf('/'));
    }
    path += '%s';
    SocketFetchOptions.importUrl = path;
  }
}).call(window);
