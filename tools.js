const fs = require('fs')
fs.readFile('models/E100_01.fbx', function (err, data) {
    if (err) throw err;
    fs.writeFile('models/E100_01_utf8.fbx',data.toString('utf-8'),"utf-8");
})