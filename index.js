var templatePath = require.resolve('./hello.marko');
var template = require('marko').load(templatePath);

template.render({
        name: 'World',
        colors: ["red", "green", "blue"],
        bodyProvider: function () {
            return { 'content': 'This is the non-async content' };
        }
    },
    function(err, output) {
        console.log(output);
    });

