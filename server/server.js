const express = require('express')
const app = express()
const path = require('path');

app.use(express.static(path.join(__dirname, '../static/public')));

app.use((req, res) => {
  res.sendStatus(404);
});

app.listen(3000, () => console.log('3000'))