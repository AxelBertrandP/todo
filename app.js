var fs = require('fs');
var n = 0;

fs.readFile('test.txt', 'utf8', function(err, data) {
    if (err) throw err;
    console.log(data);
});
fs.appendFile('test.txt', 'tache'+n+'\n', function(err, data) {
    if (err) throw err;
});
