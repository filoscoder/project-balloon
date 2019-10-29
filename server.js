const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();

app.use(bodyParser.json());

var mysqlConnection = mysql.createConnection(
  {
    host: '192.168.0.117',
    user: 'balloon',
    password: 'balloon',
    database: 'balloonDB'

  }
);

mysqlConnection.connect((err) => {
  if (!err) {
    console.log('DB connetion succeeded');
  } else {
    console.log('failed:', JSON.stringify(err, undefined, 2))
  }
})

app.get('/api/customers', (req, res) => {
  const customers = [
    { id: 1, firstName: 'John', lastName: 'Doe' },
    { id: 2, firstName: 'Brad', lastName: 'Traversy' },
    { id: 3, firstName: 'Mary', lastName: 'Swanson' },
  ];

  res.json(customers);

});


app.get('/members', (req, res) => {
  mysqlConnection.query('SELECT * FROM members', (err, rows, fields) => {
    if (!err) {

      res.send(rows)

    }
    else
      console.log(err)
  })
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => `Server running on port ${PORT}`);