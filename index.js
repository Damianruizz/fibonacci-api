'use strict';

var app = require('./app');

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`The server is initialized on the port ${port}`);
});