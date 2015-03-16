var express = require('express');

var app = express();
var port = process.env.PORT || 8080;
var marko = require('marko');

var bodyProvider = function (args, callback) {
      setTimeout(function () {
        callback(null, {'content': 'This is my fancy async content'});
      }, 1000);
};

app.use('/', function (req, res) {
  var template = marko.load(require.resolve('./hello.marko'));

  var viewModel = {
    bodyProvider: bodyProvider
  };

  template.render(viewModel, res);
});

app.listen(port, function () {
  console.log('Server started: visit at http://localhost:' + port + '/');
});

