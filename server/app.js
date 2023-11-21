const express = require('express');

const PORT = 5001;
const app = express();

app.get('/', (req, res, next) => {
  res.send('Server works');
});

app.listen(PORT);
