# File Loader

A simple, pure javascript file handler (For downloading and uploading files)

**See [demo.html](http://projects.martymagaan.com/file-loader/demo.html) file to see it in action.**

## How to use

Add js file in your HTML:

    <script src="path-to/file-loader.js"></script>

Using *download()* method of *fileLoader* object:

    fileLoader.download('filename.ext', 'content');

Using *upload()* method of *fileLoader* object:

    fileLoader.upload(callback);

    function callback(data) {
      // Do stuff with data
      // data contains: data.name, data.size, data.content
    }

## Compatibility

* Chrome 14.0
* FireFox 20.0
* IE 13.0
* Safari 10.1
* Opera 15.0

## To Do
* Improve compatibility by finding alternative for "download" attribute