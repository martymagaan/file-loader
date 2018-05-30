var fileLoader = {

  download: function(filename, content) {
    var downloader = document.createElement('a');
    downloader.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(content));
    downloader.setAttribute('download', filename);
    downloader.style.display = 'none';
    document.body.appendChild(downloader);
    downloader.click();
    document.body.removeChild(downloader);
  },

  upload: function(callback) {
    var uploader = document.createElement('input');
    uploader.setAttribute('type', 'file');
    uploader.style.display = 'none';
    document.body.appendChild(uploader);
    uploader.click();
    uploader.onchange = function() {
      var fileReader = new FileReader();
      fileReader.onload = function(e) {
        var data = {
          name: uploader.files[0].name,
          size: uploader.files[0].size,
          content: e.target.result
        };
        document.body.removeChild(uploader);
        callback(data);
      };
      fileReader.readAsText(uploader.files[0], 'UTF-8');
    }
  }

}
