import express = require('express');
import db = require('./db/db');
const app: express.Application = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(3000, async () => {
  console.log('App is listening on port 3000!');
  await start()
});

async function start() {
  await db.connect();
}