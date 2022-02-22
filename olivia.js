const fs = require('fs');
const https = require('https');
const express = require('express');
const port = 3000
const app = express();

app.get('/miller', (req, res) => {
  return res.send('Hello, Olivia!');
});

https
  .createServer(
    {
      // ...
      cert: fs.readFileSync('/etc/apache2/ssl/bloomcounty_eng_mu_edu_cert.pem'),
      key: fs.readFileSync('/etc/apache2/ssl/privateKey.pem'),
      // ...
    },
    app
  )
  .listen(port, () => {
  console.log(`Example app listening on port ${port}`)
