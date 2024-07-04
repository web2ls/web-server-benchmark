require('dotenv').config();
const express = require('express');
const app = express();

const PORT = process.env.PORT;

app.get('/live', (_, response) => {
  response.status(200).send('OK');
});

app.listen(PORT, () => {
  console.log('Server has been started...');
})