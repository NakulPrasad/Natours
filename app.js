const express = require('express');
const app = express();

//routing
// app.get('/', (req, res) => {
//   //   res.status(200).send('Hello form server side');
//   res.status(200).json({ message: 'Hello form server side', app: 'Natours' });
// });

// app.post('/', (req, res) => {
//   res.send('you can post to this endpoint...');
// });

app.get('/api/v1/tours', (req, res) => {});

const port = 2222;
app.listen(port, () => {
  console.log(`App is listening on ${port}...`);
});
