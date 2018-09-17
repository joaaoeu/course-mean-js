const express = require('express');
const server = express();

server.route('/customer')
  .get((req, res) => res.send('Customers List'))
  .post((req, res) => res.send('New Customer'))
  .put((req, res) => res.send('Update Customer'))
  .delete((req, res) => res.send('Remove Customer')) 

server.listen(3000, () => console.log('Watching...'));