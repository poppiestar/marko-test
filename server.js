var express = require('express');

var app = express();
var port = process.env.PORT || 8080;

var template = require('marko').load(require.resolve('./hello.marko'));

app.use('/', function (req, res) {
  var viewModel = {
    bodyProvider: function (args, callback) {
      setTimeout(function () {
        callback(null, {'content': 'This is my fancy async content'});
      }, 3000);
    }
  };

  template.stream(viewModel).pipe(res);
});

app.listen(port, function () {
  console.log('Server started: visit at http://localhost:' + port + '/');
});

