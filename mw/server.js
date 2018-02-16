let express = require('express');
let app = express();
let path = require('path');
let fs = require('fs')


// Our first route
app.get('/dishes', function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    let dishes = JSON.parse(fs.readFileSync(path.resolve(__dirname + '/../app/mock.json')).toString());
    res.send(JSON.stringify(dishes));
});

// Listen to port 8099
app.listen(8099, function () {
    console.log('Dev app listening on port 8099!');
});
