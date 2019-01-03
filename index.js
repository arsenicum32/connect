const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.post('/alise', function (req, res) {
  res.send({ response: "done" , req: req.query });
});
app.listen(8400, function () {
  console.log('Example app listening on port 8400!');
});
