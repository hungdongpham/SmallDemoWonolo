var express = require('express');
var path = require('path');

// Create our app
var app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(__dirname));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'index.html'));
});

app.listen(PORT, function () {
  console.log('Express server is up on port ' + PORT);
});

