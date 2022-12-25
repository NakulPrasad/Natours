const express = require('express');
const app = express();

//routing
app.get('/', (req, res) => {
  res.status(200).send('Hello form server side');
});

const port = 2222;
app.listen(port, () => {
  console.log(`App is listening on ${port}...`);
});
