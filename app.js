const fs = require('fs');
const express = require('express');
const app = express();
app.use(express.json());

//routing
// app.get('/', (req, res) => {
//   //   res.status(200).send('Hello form server side');
//   res.status(200).json({ message: 'Hello form server side', app: 'Natours' });
// });

// app.post('/', (req, res) => {
//   res.send('you can post to this endpoint...');
// });

const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`)
);

app.get('/api/v1/tours', (req, res) => {
  res.status(200).json({
    status: 'success',
    results: tours.length,
    data: {
      tours,
    },
  });
});

app.get('/api/v1/tours/:id', (req, res) => {
  // console.log(req.params);

  const id = req.params.id * 1; //converts to number from string

  const tour = tours.find((el) => el.id === id); //ids are in string
  if (id < tours.length) {
    res.status(200).json({
      status: 'success',
      // results: tours.length,
      data: {
        tour,
      },
    });
  } else
    res.status(404).json({
      status: 'fail',
      message: 'invalid id',
    });
});

//patch request
app.patch('/api/v1/tours/:id', (req, res) => {
  res.status(200).json({
    status: 'success',
    data: {
      tour: 'UPDataed DAta',
    },
  });
});

app.post('/api/v1/tours', (req, res) => {
  // console.log(req.body);

  const newId = tours[tours.length - 1].id + 1;
  //body we send + newid
  //Object.assign{create modified object using one as base}
  const newTour = Object.assign({ id: newId }, req.body);
  tours.push(newTour);
  fs.writeFile(
    `${__dirname}/dev-data/data/tours-simple.json`,
    JSON.stringify(tours),
    (err) => {
      res.status(201).json({
        status: 'success',
        data: {
          tour: newTour,
        },
      }); //created
    }
  );

  // res.send('done');
});

const port = 2222;
app.listen(port, () => {
  console.log(`App is listening on ${port}...`);
});
