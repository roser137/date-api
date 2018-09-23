const express = require('express')
const app = express()
const port = 8080

app.get('/', (req, res) => {
  js = {}
  js.time = new Date();
  js.remoteAddress = req.connection.remoteAddress;
  js.ip = req.ip;
  res.json(js);
})

app.get('/hi', (req, res) => {
  
  res.send('Hello World! <br/ >' + new Date());
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))